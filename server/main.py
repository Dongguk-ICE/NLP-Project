# sample-00-simple-chatbot.py
import openai
import streamlit as st

# OPENAI 키
OPENAI_API_KEY = "2f09fa9e8f774fc0b50ef367ff486a15"
# OPENAI 접속하는 주소
OPENAI_API_ENDPOINT = "https://cv01-kor-lhs.cognitiveservices.azure.com/"
# default값은 openai의 사이트로 가는 것인데
# #우리는 클라우드로 가게 할 것이라 타입 지정 필요
OPENAI_API_TYPE = "azure"
# OPEN AI의 호출하는 API의 버전(ChatGPT 버전과 다름)
OPENAI_API_VERSION = "2023-05-15"

openai.api_key = OPENAI_API_KEY
openai.azure_endpoint = OPENAI_API_ENDPOINT
openai.api_type = OPENAI_API_TYPE
openai.api_version = OPENAI_API_VERSION

##########
st.header("Welcome to AI Poem Bot", divider="rainbow")
st.write("아름다운 시를 함께 지어보아요~")

# 질문 넣어주기
# query = 'Who is Helen Keller'
name = st.text_input("작가의 이름을 입력하세요 ")
if name:
    st.write(name + "님 반갑습니다.")
subject = st.text_input("시의 주제를 입력하세요")
content = st.text_area("시의 내용을 입력하세요")


button_click = st.button("run")

if button_click:
    with st.spinner("wait for it..."):
        # 대화 생성하기
        result = openai.chat.completions.create(
            model="dev-model",
            # 보고서는 0.2 정도, 니 맘대로 해보세요는 1 정도, 사전처럼 사실만은 0
            temperature=1,
            # 대화는 3가지 종류 존재
            # 페르소나를 메세지로 잡을 수 있다.
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": "작가의 이름은 " + name},
                {"role": "user", "content": "시의 주제는 " + subject},
                {"role": "user", "content": "시의 내용은 " + content},
                {"role": "user", "content": "이 정보로 시를 생성해줘"},
            ],
        )

    # print(result.choices[0].message.content)
    st.write(result.choices[0].message.content)
    st.success("done!")
