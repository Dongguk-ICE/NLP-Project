import { useState, useRef } from "react";
// import { chatText } from "./apis/chatText";
import { chatImage } from "./apis/chatImage";
import "./App.css";

export const App = () => {
  // const [question, setQuestion] = useState("");
  const [reqImg, setReqImg] = useState(null);
  const inputRef = useRef();

  const handleSumbit = async () => {
    if (reqImg) {
      const formData = new FormData();
      formData.append("file", reqImg);
      await chatImage(formData);
    }
  };

  const handleChange = (e) => {
    // setQuestion(e.target.value);
    console.log(e);
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
    </div>
  );
};
