import { instance } from "./axios";

// 이미지 업로드 함수
export const chatImage = async (formData) => {
  try {
    const response = await instance.post("/docent/chatting/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

// 텍스트 전송 함수
export const chatText = async (text) => {
  try {
    const response = await instance.post("/docent/chatting/", { text });
    return response.data;
  } catch (error) {
    console.error("Error sending text:", error);
    throw error;
  }
};
