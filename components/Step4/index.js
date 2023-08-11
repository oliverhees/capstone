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
      const response = await fetch("/api/openai");
      const data = await response.json();
      if (data) {
        // console.log(data.answer);
        // console.log(JSON.parse(data.answer.trim()));
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
    <main>
      {buttonClick ? (
        <div>
          {exerciseData ? (
            <>
              <LottieAnimation animationData={animationData} loop={true} />
              <ProcessEndH2>
                Your training plan was successfully created!
              </ProcessEndH2>
              <Link href="/exercise">
                <ButtonViewTrainingDiv type="button">
                  View training plan now
                </ButtonViewTrainingDiv>
              </Link>
            </>
          ) : (
            <div>
              <LoadingComponent />
            </div>
          )}
        </div>
      ) : (
        <>
          <LottieAnimation animationData={animationDataExercise} loop={true} />
          <p></p>
          <ButtonViewTrainingDiv type="button" onClick={handleOpenAi}>
            Create Workout Plan
          </ButtonViewTrainingDiv>
        </>
      )}
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
