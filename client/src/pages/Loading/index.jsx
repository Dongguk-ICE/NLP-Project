import * as S from "./style.js";
import chImg from "../../assets/images/logo.png";

export const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <S.LoadingContainer>
        <S.Character src={chImg} alt="Loading character" />
        <h3>AI가 악보를 분석 중입니다...</h3>
      </S.LoadingContainer>
    </div>
  );
};

export default Loading;
