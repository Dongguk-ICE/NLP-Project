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

// 로딩 컨테이너 스타일
export const LoadingContainer = styled.div`
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
export const Character = styled.img`
  width: 100px;
  height: 100px;
  animation: ${runAnimation} 1s infinite;
`;
