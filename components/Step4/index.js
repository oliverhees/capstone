import styled from "styled-components";
import Link from "next/link";
import LottieAnimation from "../LottieAnimation";
import animationData from "../../public/animation.json";
import animationDataExercise from "../../public/animation_exercise_form_end.json";
import LoadingComponent from "../LoadingProgress";
import { useState } from "react";

export default function Step4({ formData, setFormData }) {
  //set states for data
  const [exerciseData, setExerciseData] = useState(null);
  const [buttonClick, setButtonClick] = useState(false);

  //function for openai call
  async function handleOpenAi(e) {
    e.preventDefault();
    setButtonClick(true);

    const updatedTDataList = formData.tData || [];

    try {
      const response = await fetch("/api/openai", {
        method: "POST", // oder die geeignete HTTP-Methode
        headers: {
          "Content-Type": "application/json", // Setzen des Content-Type Headers
        },
        body: JSON.stringify({ formData }), // Hier wird die formData in JSON umgewandelt und als Anfragekörper gesendet
      });
      
      const data = await response.json();
      if (data) {
        setExerciseData(data.answer.trim());
        console.log(exerciseData);
        updatedTDataList.push(JSON.parse(data.answer.trim()));
        setFormData({ ...formData, tData: updatedTDataList });
      }
    } catch (error) {
      console.error(error);
    }
  }

  const message = `You've cleared the form hurdle, now all that's missing is the
  grandiose click of the 'Create Workout Plan' button to get your
  muscles as toned as your form-filling muscle! Let's go, let's start
  the fitness journey! 💪🏋️‍♂️`;

  return (
    <StyledMain>
      {buttonClick ? (
        <Wrapper>
          {exerciseData ? (
            <>
              <LottieAnimation animationData={animationData} loop={true} />
              <ProcessEndH2>
                Your training plan was successfully created!
              </ProcessEndH2>
              <Link href="/exercise">
                <ButtonViewTrainingDiv>
                  View training plan now
                </ButtonViewTrainingDiv>
              </Link>
            </>
          ) : (
            <div>
              <LoadingComponent />
            </div>
          )}
        </Wrapper>
      ) : (
        <>
          <LottieAnimation animationData={animationDataExercise} loop={true} />
          <p></p>
          <ButtonViewTrainingDiv type="button" onClick={handleOpenAi}>
            Create Workout Plan
          </ButtonViewTrainingDiv>
        </>
      )}
    </StyledMain>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    text-decoration: none;
  }
`;

const StyledMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProcessEndH2 = styled.h2`
  text-align: center;
`;
const ButtonViewTrainingDiv = styled.button`
  font-size: 1rem;
  margin-top: 20px;
  width: 400px;
  text-align: center;
  color: #fff;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  background: rgb(120, 80, 191);
  text-decoration: none;
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
