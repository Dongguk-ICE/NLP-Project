import styled from "styled-components";

export const ImageLayout = styled.div`
    width: 40vw
    height:100%
`;

export const Layout = styled.div`
    display: flex;
    justify-content: flex-start;
    width:100%      
    height:100%
`;

export const OnBoardingLayout = styled.div`
  height: 100%;
  width: 60vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  padding: 1rem 0;
`;

export const Image = styled.img`
  height: ${(props) => (props.height ? `${props.height}` : "50%")};
  width: ${(props) => `${props.width}`};
  display: inline-block;
`;

export const ImageContainer = styled.div`
  cursor: pointer;
  background-color: #f1e4c4;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 30vw;
  overflow: hidden;
  margin-top: 2rem;
  border-radius: 20px;
`;

export const CustomImg = styled.img`
  /* max-width: 100%; */
  width: 100%;
  max-height: 40vh;
  object-fit: cover;
`;
