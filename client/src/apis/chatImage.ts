import { instance } from "./axios";

export const chatImage = async (formData) => {
  const response = await instance.post(
    "/docent/chatting/",
    {
      image: formData,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  console.log(response);
  return response.data;
};
