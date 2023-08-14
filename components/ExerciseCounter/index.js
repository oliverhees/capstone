import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CountdownTimer = () => {
  const initialTime = 30;
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [timerRunning, setTimerRunning] = useState(false);

  const audioPath = '../../public/clock-alarm.mp3'; // Pfad zur Audiodatei anpassen

  useEffect(() => {
    let timerInterval;

    if (timerRunning && timeLeft > 0) {
      timerInterval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      const audio = new Audio(audioPath);
      audio.play();

      setTimeout(() => {
        resetTimer();
      }, 1000); // Nach 1 Sekunde den Timer zurücksetzen
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [timerRunning, timeLeft]);

  const startTimer = () => {
    setTimeLeft(initialTime);
    setTimerRunning(true);
  };

  const stopTimer = () => {
    resetTimer();
    setTimerRunning(false);
  };

  const pauseTimer = () => {
    setTimerRunning(false);
  };

  const resetTimer = () => {
    setTimeLeft(initialTime);
  };

  return (
    <CounterWrapper>
      <Counter>
        {timeLeft > 0 && (
          <p>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</p>
        )}
        {timeLeft === 0 && <p>Zeit abgelaufen</p>}
      </Counter>
      {timerRunning ? (
        <>
          <ButtonStyled onClick={pauseTimer}>Pause</ButtonStyled>
          <ButtonStyled onClick={stopTimer}>Stop</ButtonStyled>
        </>
      ) : (
        <ButtonStyled onClick={startTimer}>Start Timer</ButtonStyled>
      )}
    </CounterWrapper>
  );
};

export default CountdownTimer;

const Counter = styled.div`
font-size: 2rem;
`;

const CounterWrapper = styled.div`
margin-top: -70px;
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
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
