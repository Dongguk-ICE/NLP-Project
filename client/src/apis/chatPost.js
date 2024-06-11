import { instance } from "./axios";

// 이미지 업로드 함수
export const chatImage = async (formData) => {
  try {
    const response = await instance.post("/docent/chatting/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

// 텍스트 전송 함수
export const chatText = async (question) => {
  try {
    const response = await instance.post(
      "/docent/text-chatting/",
      {
        question: question,
      },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error sending text:", error);
    throw error;
  }
};
