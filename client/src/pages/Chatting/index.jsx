import * as S from "./styled.js";
import logo from "../../assets/images/logo.svg";
import { chatText } from "../../apis/chatPost.js";
import { useState, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { chatInfo } from "../../atoms/resChat.js";
import { useNavigate } from "react-router-dom";
import chImg from "../../assets/images/logo.png";
import styled, { keyframes } from "styled-components";

const runAnimation = keyframes`
  0% { transform: translateX(0); }
  20% { transform: translateX(0); }
  30% { transform: translateX(5px); }
  40% { transform: translateX(10px); }
  50% { transform: translateX(5px); }
  60% { transform: translateX(0); }
  70% { transform: translateX(-5px); }
  80% { transform: translateX(-10px); }
  90% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;
const Character = styled.img`
  width: 100px;
  height: 100px;
  animation: ${runAnimation} 1s infinite;
`;

export const Chatting = () => {
  const navigate = useNavigate();
  const chatEndRef = useRef(null);
  const [speech, setSpeech] = useState(false);
  const [chatData, setChatData] = useRecoilState(chatInfo);
  const [question, setQuestion] = useState("");
  const [waiting, setWaiting] = useState(false);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatData]);

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleTextSubmit();
    }
  };

  const handleTextSubmit = async () => {
    const questionText = question.trim();
    setQuestion("");
    setChatData((prevChatData) => [
      ...prevChatData,
      { type: "request", text: question },
    ]);
    try {
      setWaiting(true);
      const response = await chatText(questionText);
      setWaiting(false);
      if (speech) {
        const utter = new SpeechSynthesisUtterance(response.response);
        utter.rate = 1.1;
        window.speechSynthesis.speak(utter);
      }
      setChatData((prevChatData) => [
        ...prevChatData,
        { type: "response", text: response.response }, // assuming response.data contains the chat response
      ]);
      setQuestion("");
      console.log(response);
    } catch (error) {
      console.error("Error sending text:", error);
    }
  };

  return (
    <S.Layout>
      <S.HeaderLayout>
        <S.LogoLayout>
          <img
            src={logo}
            alt=""
            style={{
              cursor: "pointer",
              height: "70%",
            }}
            onClick={() => {
              navigate(-1);
            }}
          />
          <div>
            <h2
              style={{
                margin: "3px 0",
                color: "white",
              }}
            >
              Music
            </h2>
            <h2
              style={{
                margin: "3px 0",
                color: "white",
              }}
            >
              Docent
            </h2>
          </div>
        </S.LogoLayout>
        <S.SpeechLayout>
          <h2
            style={{
              color: "white",
              margin: "0.5rem 3rem 0 0",
            }}
          >
            음성 해설
          </h2>
          {/* <img src={toggleImg} alt="" style={{ margin: "0 4rem 0 0" }} /> */}
          <button
            onClick={() => setSpeech(!speech)}
            style={{
              width: "5.5rem",
              height: "2rem",
              borderRadius: "12px",
              backgroundColor: `${speech ? "#7d7d7d" : "#f5f5f5"}`,
              border: "0",
              cursor: "pointer",
              margin: "0.5rem 3rem 0 0",
            }}
          >
            {speech ? "비활성화 하기" : "활성화 하기"}
          </button>
        </S.SpeechLayout>
      </S.HeaderLayout>
      {waiting && (
        <S.WaitingLayout>
          <Character src={chImg} alt="Loading character" />
        </S.WaitingLayout>
      )}
      <S.ChatViewLayout>
        {(chatData || []).map((chat, index) =>
          chat.type === "response" ? (
            <S.ReceiveChatLayout key={index}>{chat.text}</S.ReceiveChatLayout>
          ) : (
            <S.RequestChatLayout key={index}>{chat.text}</S.RequestChatLayout>
          )
        )}
        <div ref={chatEndRef} />
      </S.ChatViewLayout>
      <S.InputLayout>
        <div
          style={{
            borderRadius: "12px",
            backgroundColor: "#7d7d7d",
            width: "65%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <input
            type="text"
            name="chat"
            id="chat"
            placeholder="질문을 입력해주세요!"
            value={question}
            style={{
              width: "85%",
              height: "80%",
              borderRadius: "10px",
              border: "0",
            }}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button
            style={{
              width: "10%",
              height: "82%",
              borderRadius: "10px",
              border: "0",
              cursor: "pointer",
            }}
            onClick={handleTextSubmit}
          >
            전송
          </button>
        </div>
      </S.InputLayout>
    </S.Layout>
  );
};
