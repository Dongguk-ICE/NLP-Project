import { useState, useRef, useCallback } from "react";
// import { chatText } from "./apis/chatText";
import { chatImage } from "./apis/chatImage";
import "./App.css";

export const App = () => {
  // const [question, setQuestion] = useState("");
  const [reqImg, setReqImg] = useState(null);

  const inputRef = useRef();
  const handleSumbit = async () => {
    await chatImage(reqImg);
  };
  const handleChange = (e) => {
    // setQuestion(e.target.value);
    console.log(e);
  };
  const onUploadImage = useCallback((e) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    const reader = new FileReader();

    if (file) {
      console.log(file);
      setReqImg(file);
      reader.readAsDataURL(file);
      reader.onload = () => {
        setReqImg(reader.result);
      };
    }
  }, []);

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
