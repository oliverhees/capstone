import { useState } from "react";
import styled from "styled-components";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import Link from "next/link";
import ReactPlayer from "react-player";

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
            <GrFormPreviousLink size={20} />
            Prev
          </ButtonStyled>
        ) : (
          <ButtonStyled>
            <GrFormPreviousLink size={20} />
            Prev
          </ButtonStyled>
        )}
        {currentExerciseIndex === exerciseCount - 1 ? (
          <Link href="/exercise-done">
            <ButtonExerciseDoneStyled>
              Next <GrFormNextLink size={20} />
            </ButtonExerciseDoneStyled>
          </Link>
        ) : (
          <ButtonStyled onClick={nextExercise}>
            Next <GrFormNextLink size={20} />
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
`;

const ExerciseDescription = styled.div`
  font-size: 0.8rem;
  padding: 1rem 0;
`;

const ExerciseRepetitions = styled.div`
  font-size: 0.8rem;
  padding: 1rem 0;
  width: 50%;
`;

const ExerciseSets = styled.div`
  font-size: 0.8rem;
  padding: 1rem 0;
  width: 50%;
`;

const ExerciseNavigation = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonExerciseDoneStyled = styled.button`
  font-size: 1rem;
  width: 100%;
  padding: 10px 60px;
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
  padding: 10px 0;
  border-radius: 2rem;
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

const ExerciseTitleH2 = styled.h2`
  font-size: 1.2rem;
`;

const ExerciseDiv = styled.div`
  font-size: 1.5rem;
`;

const ExerciseFrameDiv = styled.div`
  border: solid thin #ccc;
  padding: 2rem;
  border-radius: 1rem;
`;

const ExerciseTitleH3 = styled.h3`
  text-align: left;
  margin: 2rem 0 0.5rem 0;
`;
