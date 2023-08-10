import { useEffect, useState } from "react";
import LottieAnimation from "../LottieAnimation";
import animationDataTinkingAi from "../../public/animation_thinking_ai.json";
import styled from "styled-components";

const phrases = [
  "Questionnaire is analyzed...",
  "The AI monster is being tamed...",
  "Training data is compiled...",
  "Exercises are lumped...",
  "Response patterns are generated...",
  "Semantic matrix tuning...",
  "Metadata is linked...",
  "Creative algorithms are activated...",
  "Hyperconnected thought processes are initialized...",
  "Neural loops are optimized...",
  "Quantum bits are balanced...",
  "Causal probabilities are balanced...",
  "Algorithmic magic is cast...",
  "Intergalactic connections are made...",
  "We're almost done...but there's still something coming in...",
  "Inquiry is being transformed into linguistic building blocks...",
  "Answers from collective knowledge are extracted...",
  "Symbiotic AI strands are intertwined...",
  "A pinch of neural synchronicity is added...",
  "Final check of response integrity...",
  "Loading process is nearing completion.",
  "Response is translated into intelligible language...",
  "Semantic variability is being applied...",
  "Response is being finalized and formatted...",
  "Response submitted!",
  "Loading process completed. Your training plan is ready!",
];

const LoadingComponent = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    if (currentPhraseIndex < phrases.length - 1) {
      const setTime = Math.round(85000 / phrases.length);
      console.log(setTime);
      const timeout = setTimeout(() => {
        setCurrentPhraseIndex(currentPhraseIndex + 1);
      }, setTime);

      return () => clearTimeout(timeout);
    }
  }, [currentPhraseIndex]);

  return (
    <div>
      <PhraseTitleH2Styled>
        The AI is creating your <br />
        training plan now!
      </PhraseTitleH2Styled>
      <LottieAnimation animationData={animationDataTinkingAi} loop={true} />
      <PhraseStyled>{phrases[currentPhraseIndex]}</PhraseStyled>
    </div>
  );
};

export default LoadingComponent;

const PhraseStyled = styled.p`
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
`;

const PhraseTitleH2Styled = styled.h2`
  text-align: center;
`;
