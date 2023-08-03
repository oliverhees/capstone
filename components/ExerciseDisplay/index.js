import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import Link from "next/link";

const ExerciseDisplay = ({ exercises }) => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const exercise = exercises[currentExerciseIndex];

  const exerciseCount = exercises.length - 1;
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
    // if (currentExerciseIndex < exercises.length - 1) {
    //   setCurrentExerciseIndex(currentExerciseIndex - 1);
    // }
  };

  return (
    <>
      <ExerciseFrameDiv>
        <ExerciseDiv>
          <ExerciseTitleH2>{`Exercise ${currentExerciseIndex + 1} from ${
            exercises.length
          }`}</ExerciseTitleH2>
          <ExerciseTitleH3>{exercise.name}</ExerciseTitleH3>
          <Image
            src={exercise.gifUrl}
            alt="Übungs-GIF"
            width={300}
            height={150}
          />
        </ExerciseDiv>
      </ExerciseFrameDiv>
      {currentExerciseIndex === exerciseCount ? (
        <ExerciseNavigation>
          {/* <ButtonExerciseDoneStyled onClick={doneExercise}>
            Mark training as complete!
          </ButtonExerciseDoneStyled> */}
        </ExerciseNavigation>
      ) : (
        ""
      )}
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
        {currentExerciseIndex === exerciseCount ? (
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

const ExerciseNavigation = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonExerciseDoneStyled = styled.button`
  width: 200px;
  border-radius: 0.8rem;
  border: solid thin #ccc;
  padding: 15px 0px 15px 0px;
  border-radius: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;

  &:hover {
    background-color: #999;
    color: #fff;
  }
`;

const ButtonStyled = styled.button`
  width: 200px;
  border-radius: 0.8rem;
  border: solid thin #ccc;
  padding: 15px 0px 15px 0px;
  border-radius: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;

  &:visited {
    text-decoration: none;
  }

  &:hover {
    background-color: #999;
    color: #fff;
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
