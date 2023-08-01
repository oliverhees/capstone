import styled from "styled-components";
import Link from "next/link";
import LottieAnimation from "../LottieAnimation";
import animationData from "../../public/animation.json";

export default function Step4() {
  return (
    <main>
      <LottieAnimation animationData={animationData} loop={true} />
      <ProcessEndH2>Your training plan was successfully created!</ProcessEndH2>
      <Link href="/exercise">
        <ButtonViewTrainingDiv type="button">
          View training plan now
        </ButtonViewTrainingDiv>
      </Link>
    </main>
  );
}

const ProcessEndH2 = styled.h2`
  text-align: center;
`;
const ButtonViewTrainingDiv = styled.button`
  margin-top: 1rem;
  padding: 10px 0px 10px 0px;
  border-radius: 2rem;
  width: 100%;
  border: solid thin #ccc;

  &:hover {
    background-color: #999;
    color: #fff;
  }
`;
