import { instance } from "./axios";

export const chatText = async (question) => {
  const response = await instance.post("/docent/chatting/", {
    question: question,
  });
  console.log(response);
  return response.data;
};
