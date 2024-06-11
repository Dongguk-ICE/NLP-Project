import * as S from "./styled.js";
import logo from "../../assets/images/logo.svg";
import toggleImg from "../../assets/images/toggle.svg";

export const Chatting = () => {
  return (
    <S.Layout>
      <S.HeaderLayout>
        <S.LogoLayout>
          <img
            src={logo}
            alt=""
            style={{
              height: "70%",
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
              margin: "0 3rem 0 0",
            }}
          >
            음성 해설
          </h2>
          <img src={toggleImg} alt="" style={{ margin: "0 4rem 0 0" }} />
        </S.SpeechLayout>
      </S.HeaderLayout>
      <S.ChatViewLayout>
        <S.ReceiveChatLayout></S.ReceiveChatLayout>
        <S.RequestChatLayout></S.RequestChatLayout>
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
            style={{
              width: "85%",
              height: "80%",
              borderRadius: "10px",
              border: "0",
            }}
          />
          <button
            style={{
              width: "10%",
              height: "82%",
              borderRadius: "10px",
              border: "0",
              cursor: "pointer",
            }}
          >
            전송
          </button>
        </div>
      </S.InputLayout>
    </S.Layout>
  );
};
