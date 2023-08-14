import styled from "styled-components";
import LottieAnimation from "../components/LottieAnimation";
import animationData from "../public/animation-goal.json";

export default function ExerciseDone({ setFormData, formData }) {
  return (
    <StyledMain>
      <LottieAnimation animationData={animationData} loop={true} />
      <TitleStyledH1>Great you made it!</TitleStyledH1>
      <TitleStyledH2>
        Your training for today is complete {<br />}Enjoy the day and relax!
      </TitleStyledH2>
      <ExerciseButtonDone href="/" passHref>
        Back to Dashboard
      </ExerciseButtonDone>
    </StyledMain>
  );
}

const StyledMain = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
`;

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
  margin-top: 20px;
  width: 300px;
  text-align: center;
  color: #fff;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  text-decoration: none;
  background: rgb(120, 80, 191);
  background: linear-gradient(
    174deg,
    rgba(120, 80, 191, 1) 0%,
    rgba(81, 45, 168, 1) 100%
  );
  border: none;

  :hover {
    background: linear-gradient(
      174deg,
      rgba(160, 80, 191, 1) 0%,
      rgba(121, 45, 168, 1) 100%
    );
  }
  &:visited {
    text-decoration: none;
  }
`;
