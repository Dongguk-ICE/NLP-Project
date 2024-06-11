import styled, { keyframes } from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: #f1e4c4;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const HeaderLayout = styled.div`
  display: flex;
  width: 98%;
  height: 8%;
  background-color: #974e29;
  padding: 1rem;
  border-radius: 10px;
`;

export const LogoLayout = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  align-items: end;
  gap: 1rem;
`;

export const SpeechLayout = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  align-items: end;
  flex-direction: column;
`;

export const InputLayout = styled.div`
  display: flex;
  width: 100%;
  height: 6vh;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 1rem;
`;

export const ChatViewLayout = styled.div`
  width: 95%;
  margin: 1rem 2.5% 10vh 2.5%;
  display: flex;
  gap: 3%;
  flex-direction: column;
  overflow-y: auto;
  // height: calc(100vh - 160px);
`;

export const ReceiveChatLayout = styled.div`
  width: 40%;
  background-color: white;
  padding: 1rem;
  align-self: start;
  border-radius: 0px 12px 12px 12px;
`;

export const RequestChatLayout = styled.div`
  width: 40%;
  padding: 1rem;
  background-color: #c8ced1;
  align-self: end;
  border-radius: 12px 0px 12px 12px;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #09f;
  border-radius: 50%;
  width: 50x;
  height: 50px;
  animation: ${spin} 1s linear infinite;
  margin: 0.5rem auto;
  position: fixed;
  top: 25rem;
`;

export const WaitingLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  background-color: transparent;
  padding: 10px;
  font-size: 1.2rem;
  position: fixed;
  top: 40%;
`;
