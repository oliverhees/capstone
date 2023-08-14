import { useState } from "react";
import styled from "styled-components";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import Link from "next/link";
import ReactPlayer from "react-player";
import CountdownTimer from "../ExerciseCounter";

const ExerciseDisplay = ({ setFormData, formData, exercises }) => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [newExerciseData, setNewExerciseData] = useState({
    exercise_id: "",
    exercise_done: false,
    exercise_date: "",
  });
  const exerciseRawData = exercises[0];
  const exercise = exerciseRawData.exercises;

  const exerciseCount = exercise.length - 1;

  const nextExercise = () => {
    if (currentExerciseIndex < exerciseCount) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    }
  };

  const prevExercise = () => {
    if (currentExerciseIndex < exerciseCount) {
      setCurrentExerciseIndex(currentExerciseIndex - 1);
    }
  };

  const doneExercise = () => {
    const currentDate = new Date();
    const updatedEDoneList = formData.eDone || [];

    // Füge die neuen Daten zur Liste hinzu
    updatedEDoneList.push({
      exercise_id: exercise[exerciseArray]._id,
      exercise_done: true,
      exercise_date: currentDate.toLocaleDateString(),
    });

    setFormData({
      ...formData,
      eDone: updatedEDoneList,
    });
  };

  const exerciseArray = currentExerciseIndex + 1;

  const foundExerciseData = (id) => {
    let output = false;
    const currentDate = new Date();
    const foundId = formData.eDone.find((itemId) => itemId.exercise_id === id);
    console.log(id);
    const foundDate = formData.eDone.find(
      (item) => item.exercise_date === currentDate.toLocaleDateString()
    );
    const foundDone = formData.eDone.find(
      (item) => item.exercise_done === true
    );

    if (foundId && foundDate && foundDone) {
      output = true;
    }

    return output;
  };

  return (
    <>
      <ExerciseFrameDiv>
        <ExerciseDiv>
          <ExerciseTitleH2>{`Exercise ${currentExerciseIndex + 1} from ${
            exercise.length
          }`}</ExerciseTitleH2>
          <ExerciseTitleH3>{exercise[exerciseArray].name}</ExerciseTitleH3>
          <PlayerWrapper>
            <ReactPlayer
              className="react-player"
              url={exercise[exerciseArray].exercise_video}
              width="100%"
              height="100%"
            />
          </PlayerWrapper>
          <ExerciseDetails>
            <ExerciseDescription>
              {exercise[exerciseArray].description}
            </ExerciseDescription>
            <ExerciseRepetitions>
              Repetions: {exercise[exerciseArray].exercise_repetitions}
            </ExerciseRepetitions>
            <ExerciseSets>
              Sets: {exercise[exerciseArray].number_of_sets}
            </ExerciseSets>
          </ExerciseDetails>
        </ExerciseDiv>
      </ExerciseFrameDiv>
<CountdownTimer />
      <ExerciseNavigation>
        {foundExerciseData(exercise[exerciseArray]._id) ? (
          <ButtonExerciseDoneMarkStyled>
            You have done this exercise!
          </ButtonExerciseDoneMarkStyled>
        ) : (
          <ButtonExerciseDoneStyled onClick={doneExercise}>
            Mark exercise as complete!
          </ButtonExerciseDoneStyled>
        )}
      </ExerciseNavigation>
      <ExerciseNavigation>
        {currentExerciseIndex > 0 ? (
          <ButtonStyled onClick={prevExercise}>
            <GrFormPreviousLink className="icon" size={20} />
            Prev
          </ButtonStyled>
        ) : (
          <ButtonStyled>
            <GrFormPreviousLink className="icon" size={20} />
            Prev
          </ButtonStyled>
        )}
        {currentExerciseIndex === exerciseCount - 1 ? (
          <Link href="/exercise-done">
            <ButtonStyled>
              Next <GrFormNextLink className="icon" size={20} />
            </ButtonStyled>
          </Link>
        ) : (
          <ButtonStyled onClick={nextExercise}>
            Next <GrFormNextLink className="icon" size={20} />
          </ButtonStyled>
        )}
      </ExerciseNavigation>
    </>
  );
};

export default ExerciseDisplay;

const ExerciseDoneButton = styled.a``;

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const ExerciseDetails = styled.div`
  font-size: 1.2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ExerciseDescription = styled.div`
  font-size: 0.8rem;
  padding: 1rem 0;
`;

const ExerciseRepetitions = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  padding: 1rem 0;
  width: 50%;
`;

const ExerciseSets = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  padding: 1rem 0;
  width: 50%;
  text-align: right;
`;

const ExerciseNavigation = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
`;

const ButtonExerciseDoneStyled = styled.button`
  font-size: 1rem;
  width: 100%;
  text-align: center;
  color: #fff;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 2rem;
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

const ButtonExerciseDoneMarkStyled = styled.button`
  font-size: 1rem;
  width: 100%;
  padding: 10px 0;
  border-radius: 2rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: solid thin #ccc;
  background-color: mediumslateblue;
  color: #fff;
`;

const ButtonStyled = styled.button`
  font-size: 1rem;
  width: 200px;
  text-align: center;
  color: #fff;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
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

  .icon path {
  stroke: #fff;
  }
`;

const ExerciseTitleH2 = styled.h2`
  font-size: 1.1rem;
  font-weight: 400;
`;

const ExerciseDiv = styled.div`
  font-size: 1.5rem;
`;

const ExerciseFrameDiv = styled.div`
  padding: 2rem;
  border-radius: 1rem;
`;

const ExerciseTitleH3 = styled.h3`
  text-align: left;
  margin: 1rem 0 0.5rem 0;
  font-weight: 600;
  font-size: 1.2rem;
`;
