import styled from "styled-components";

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
  height: 7vh;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 5rem;
`;

export const ChatViewLayout = styled.div`
  width: 95%;
  margin: 1rem 2.5% 1rem 2.5%;
  display: flex;
  gap: 10%;
  flex-direction: column;
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
