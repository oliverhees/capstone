import styled from "styled-components";
import LottieAnimation from "../components/LottieAnimation";
import animationData from "../public/animation-goal.json";

export default function ExerciseDone() {
  return (
    <main>
      <LottieAnimation animationData={animationData} loop={true} />
      <TitleStyledH1>Great you made it!</TitleStyledH1>
      <TitleStyledH2>
        Your training for today is complete {<br />}Enjoy the day and relax!
      </TitleStyledH2>
      <ExerciseButtonDone href="/" passHref>
        Back to Dashboard
      </ExerciseButtonDone>
    </main>
  );
}

const TitleStyledH1 = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

const TitleStyledH2 = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  font-weight: 400;
`;

const ExerciseButtonDone = styled.a`
  font-size: 1rem;
  width: 300px;
  padding: 10px 0;
  border-radius: 2rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: aliceblue;
  border: solid thin #ccc;
  color: #000;

  &:hover {
    background-color: mediumslateblue;
    color: #fff;
  }

  &:visited {
    text-decoration: none;
  }
`;
