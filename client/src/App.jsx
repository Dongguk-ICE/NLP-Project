import { useState, useRef } from "react";
// import { chatText } from "./apis/chatText";
import { chatImage } from "./apis/chatImage";
import { chatText } from "./apis/chatText";
import "./App.css";

window.speechSynthesis;

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
      console.log(await chatImage(formData));
    }
  };

  const handleTextSumbit = async () => {
    const response = await chatText(question);
    console.log(response);
  };

  const handleChange = (e) => {
    setQuestion(e.target.value);
    console.log(e);
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
      console.log(file);
      setReqImg(file);
    }
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleSumbit}>테스트</button>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={onUploadImage}
      />
      <button onClick={handleMusic}>Hear the Analysis</button>
      <button onClick={handleTextSumbit}>텍스트 테스</button>
    </div>
  );
};
