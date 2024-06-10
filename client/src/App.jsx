import { useState, useRef } from "react";
import { chatImage, chatText } from "./apis/chatPost"; // 실제 경로에 맞게 수정
import "./App.css";

export const App = () => {
  const [question, setQuestion] = useState("");
  const utter = new SpeechSynthesisUtterance("안녕하세요!");
  utter.rate = 1.3;
  const [reqImg, setReqImg] = useState(null);
  const inputRef = useRef();

  const handleSumbit = async () => {
    if (reqImg) {
      const formData = new FormData();
      formData.append("file", reqImg);
      try {
        const response = await chatImage(formData);
        console.log("Image upload response:", response);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      console.error("No image selected");
    }
  };

  const handleTextSumbit = async () => {
    try {
      const response = await chatText(question);
      console.log("Text upload response:", response);
    } catch (error) {
      console.error("Error sending text:", error);
    }
  };

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleMusic = () => {
    window.speechSynthesis.speak(utter);
  };

  const onUploadImage = (e) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    if (file) {
      setReqImg(file);
    }
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={question} />
      <button onClick={handleSumbit}>Upload Image</button>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={onUploadImage}
      />
      <button onClick={handleMusic}>Hear the Analysis</button>
      <button onClick={handleTextSumbit}>Send Text</button>
    </div>
  );
};
