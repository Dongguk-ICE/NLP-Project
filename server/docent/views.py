import base64
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, JSONParser, FormParser
from .models import InputData
from langchain_openai import ChatOpenAI
from langchain.schema.messages import AIMessage, HumanMessage
from config.settings import OPENAI_API_KEY
from .serializers import InputSerializer
from django.core.files.uploadedfile import InMemoryUploadedFile
from django.db.models.fields.files import ImageFieldFile

chain = ChatOpenAI(model="gpt-4o", max_tokens=2048)

prompt="""You are a professional with specialized knowledge in the field of music.
Your role is to read the given sheet music and introduce the music to someone who has no background in music.
Refer to the following example to return results in Korean.
composer
Ludwig van Beethoven, the composer of this song, was born on December 16, 1770 in Bonn, Germany and died on March 26, 1827 in Vienna, Austria. He was a musician active during the transition from classicism to romanticism, and is considered one of the most important figures in music history.
background of the song It is known that Beethoven tried to express the pain and emotions caused by hearing loss through this song.

structure of the song
Adagio sostenuto: The very slow and calm first movement creates a soft and dreamy atmosphere, like moonlight reflected on a calm lake.
Allegretto: The second movement is a movement of a cheerful and bright character, with a short and concise form.
Presto agitato: The third and final movement is very fast and furious, demanding the pianist's technical ability.

characteristic
The Moonlight Sonata is a work that clearly demonstrates Beethoven's creativity and sensitivity, and is greatly loved among classical music lovers. This work is considered an important example of expanding the form and expressive possibilities of the piano sonata."""

prompt2="""You are a professional with specialized knowledge in the field of music.
Your role is to read the given sheet music and introduce the music to someone who has no background in music.
You should return results in korean."""

def encode_image(upload_file):
    if isinstance(upload_file, InMemoryUploadedFile):
        # 업로드된 이미지 파일 처리
        try:
            if upload_file.content_type.startswith('image/'):
                image_bytes = upload_file.read()
                base64_image = base64.b64encode(image_bytes).decode("utf-8")
                return base64_image
            else:
                print("Uploaded file is not an image.")
                return None
        except Exception as e:
            print(f"Image encoding failed: {e}")
            return None
    elif isinstance(upload_file, ImageFieldFile):
        # 저장된 이미지 파일 처리
        try:
            with upload_file.open('rb') as img:
                return base64.b64encode(img.read()).decode('utf-8')
        except Exception as e:
            print(f"Error encoding image: {str(e)}")
            return None
    else:
        print("Invalid file type.")
        return None

def encode_image_to_base64(image_file):
    if not image_file:
        return None
    try:
        with image_file.open('rb') as img:
            return base64.b64encode(img.read()).decode('utf-8')
    except Exception as e:
        print(f"Error encoding image: {str(e)}")
        return None

def get_response(b64image, qsn):
    if not b64image:
        return {"error": "Image encoding failed."}

    msg = chain.invoke(
        [
            AIMessage(content=prompt),
            HumanMessage(content=[
                {"type": "text", "text": qsn},
                {"type": "image_url", "image_url": {"url": "data:image/png;base64," + b64image, "detail": "auto"}}
            ])
        ]
    )
    return msg.content


def get_response2(b64image, qsn):
    if not b64image:
        return {"error": "Image encoding failed."}

    msg = chain.invoke(
        [
            AIMessage(content=prompt2),
            HumanMessage(content=[
                {"type": "text", "text": qsn},
                {"type": "image_url", "image_url": {"url": "data:image/png;base64," + b64image, "detail": "auto"}}
            ])
        ]
    )
    return msg.content

class InputDataView(APIView):
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    def post(self, request, *args, **kwargs):
        # 파일(이미지)이 업로드된 경우
        if 'file' in request.FILES:
            print(request.FILES)
            data = request.data.copy()
            data['file'] = request.FILES['file']  # 모델과 일치하는 필드 이름 사용
            serializer = InputSerializer(data=data)
            
            if serializer.is_valid():
                input_data = serializer.save()
                
                # 저장된 인스턴스에서 이미지 파일 가져오기
                b64_image = encode_image(input_data.file)
                if b64_image is None:
                    return Response({"error": "Image encoding failed"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
                
                response = get_response(b64_image, "")
                return Response({"response": response}, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        return Response({"error": "No valid data provided"}, status=status.HTTP_400_BAD_REQUEST)
        
class TextDataView(APIView):
    def post(self, request):    
       # 텍스트 데이터만 제출된 경우
        print(request.data)
        if request.data.get('question'):
            
            # 가장 최근의 이미지 데이터를 가져옵니다.
            latest_input = InputData.objects.filter(file__isnull=False).order_by('-created_at').first()
            base64_image = encode_image_to_base64(latest_input.file)
            
            if not latest_input or not latest_input.file:
                return Response({"error": "No image available. Please upload an image first."}, status=status.HTTP_400_BAD_REQUEST)
        
            qsn = request.data.get('question')

            response = get_response2(base64_image, qsn)
            
            return Response({"response": response}, status=status.HTTP_200_OK)

        else:
            return Response({"error": "No question provided"}, status=status.HTTP_400_BAD_REQUEST)