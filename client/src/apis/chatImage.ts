import { instance } from "./axios";

export const chatImage = async (image) => {
  const response = await instance.post(
    "/docent/chatting/",
    {
      image: image,
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
