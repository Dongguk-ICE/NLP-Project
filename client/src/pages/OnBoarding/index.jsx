import * as S from "./styled.js";
import { useRef, useCallback, useState } from "react";
import { chatImage } from "../../apis/chatPost.js";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { chatInfo } from "../../atoms/resChat.js";
import { Loading } from "../Loading/index.jsx";
import OnBoardingImg from "../../assets/images/onBoarding.png";
import defaultImg from "../../assets/images/defaultImg.svg";

export const OnBoarding = () => {
  const setResChat = useSetRecoilState(chatInfo);
  const navigate = useNavigate();
  const inputRef = useRef();
  const [reqImg, setReqImg] = useState("");
  const [imgFlag, setImgFlag] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onUploadImage = useCallback((e) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    const reader = new FileReader();

    if (file) {
      setReqImg(file);
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      setImgFlag(true);
    }
  }, []);
  const handleClick = () => {
    inputRef.current.click();
  };
  const handleSumbit = async () => {
    if (reqImg) {
      const formData = new FormData();
      formData.append("file", reqImg);
      try {
        setIsLoading(true);
        const response = await chatImage(formData);
        navigate("/chatting");
        setResChat([{ type: "response", text: response.response }]);
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      console.error("No image selected");
    }
  };

  if (isLoading) return <Loading />;

  return (
    <S.Layout>
      <S.ImageLayout>
        <img
          src={OnBoardingImg}
          alt=""
          style={{
            width: "40vw",
            height: "100vh",
          }}
        />
      </S.ImageLayout>
      <S.OnBoardingLayout>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              margin: "2rem 0 5px 0",
              color: "white",
            }}
          >
            AI 기반 음악 해설 서비스
          </h1>
          <h1
            style={{
              margin: "5px",
              color: "white",
            }}
          >
            Music Docent
          </h1>
        </div>
        <S.ImageContainer onClick={handleClick}>
          {imgFlag ? (
            <S.CustomImg src={imageSrc} alt="upload" />
          ) : (
            <img
              src={defaultImg}
              style={{
                height: "15%",
              }}
            />
          )}
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={onUploadImage}
            style={{ display: "none" }}
          />
        </S.ImageContainer>
        <button
          style={{
            width: "45%",
            height: "7vh",
            background: "#F1E4C4",
            borderRadius: "20px",
            border: 0,
            cursor: "pointer",
          }}
          onClick={handleSumbit}
        >
          사진 업로드 하고 시작하기
        </button>
      </S.OnBoardingLayout>
    </S.Layout>
  );
};
