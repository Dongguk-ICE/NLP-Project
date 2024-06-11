import styled, { keyframes } from "styled-components";
import chImg from "../../assets/images/logo.png";

// 애니메이션 정의
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

// 로딩 컨테이너 스타일
const LoadingContainer = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 60%;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// 캐릭터 스타일
const Character = styled.img`
  width: 100px;
  height: 100px;
  animation: ${runAnimation} 1s infinite;
`;

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
      <LoadingContainer>
        <Character src={chImg} alt="Loading character" />
        <h3>AI가 악보를 분석 중입니다...</h3>
      </LoadingContainer>
    </div>
  );
};

export default Loading;
