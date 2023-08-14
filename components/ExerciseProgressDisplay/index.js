import React, { useState, useEffect } from "react";
import styled from "styled-components";

function ExerciseTracker({ formData }) {
  const exerciseData = formData.eDone;

  const getCurrentMonth = () => {
    const currentDate = new Date();
    return currentDate.getMonth() + 1;
  };

  const daysInMonth = (month, year) => new Date(year, month, 0).getDate();

  const countExercisesInCurrentMonth = (data) => {
    const currentMonth = getCurrentMonth();
    return data.reduce((count, exercise) => {
      const parts = exercise.exercise_date.split("."); // Annahme: Datum im Format "9.8.2023"
      const exerciseMonth = parseInt(parts[1], 10); // Monatsteil (8)
      const exerciseYear = parseInt(parts[2], 10); // Jahresteil (2023)

      if (exerciseMonth === currentMonth && exercise.exercise_done) {
        return count + 1;
      }
      return count;
    }, 0);
  };

  const exercisesCount = countExercisesInCurrentMonth(exerciseData);
  const currentYear = new Date().getFullYear();
  const daysInCurrentMonth = daysInMonth(getCurrentMonth(), currentYear);
  const maxExercisesPerDay = formData.work_per_week;
  const maxExercises = Math.round(daysInCurrentMonth / maxExercisesPerDay);
  const progressBarWidth = (exercisesCount / maxExercises) * 100;

  return (
    <div>
      <ProgressBar>
        <Progress style={{ width: `${progressBarWidth}%` }} />
      </ProgressBar>
      <DetailProgressWrapper>
        <ProgressNumber>0</ProgressNumber>
        <StyledP>Number of trained exercises in current month</StyledP>
        <ProgressNumber>{maxExercises}</ProgressNumber>
      </DetailProgressWrapper>
    </div>
  );
}

export default ExerciseTracker;

const ProgressNumber = styled.div`
  font-size: 0.7rem;
`;

const DetailProgressWrapper = styled.div`
  margin: 0.2rem 0 1rem 0;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const StyledP = styled.div`
  text-align: center;
  font-size: 0.7rem;
`;

const Progress = styled.div`
  height: 90%;
  border-radius: 10px;
  background-color: #a050bf;
  width: 0;
  transition: width 1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProgressBar = styled.div`
  margin-top: 10px;
  width: 90%;
  height: 5px;
  background-color: #f1f1f1;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
`;
