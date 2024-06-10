import { instance } from "./axios";

export const chatImage = async (file) => {
  // FormData 객체 생성
  const formData = new FormData();
  // FormData 객체에 이미지 파일 추가 ('image'는 서버에서 기대하는 필드 이름)
  formData.append("image", file);

  const response = await instance.post("/docent/chatting/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(response);
  return response.data;
};
