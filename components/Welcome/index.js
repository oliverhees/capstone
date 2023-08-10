import styled from "styled-components";
import LottieAnimation from "../LottieAnimation";
import animationDataAi from "../../public/ai_bot_workout.json";

export default function Welcome({ formData, setFormData }) {
  const handleWelcome = (e) => {
    e.preventDefault();
    setFormData({ ...formData, welcome: true });
  };
  return (
    <MainStyled>
      <LottieAnimation
        className="animation"
        animationData={animationDataAi}
        loop={true}
      />
      <BottomSliderStyled>
        <H1Styled>Welcome</H1Styled>
        <H2Styled>to your AI Personal Trainer</H2Styled>
        <p>Future is here! Create your own ai personal workout plan.</p>
        <ButtonStyled onClick={handleWelcome}>Get Started</ButtonStyled>
      </BottomSliderStyled>
    </MainStyled>
  );
}

const ButtonStyled = styled.button`
  width: 90%;
  margin-top: 40px;
  text-align: center;
  color: #fff;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 2rem;
  background: rgb(120, 80, 191);
  background: linear-gradient(
    174deg,
    rgba(120, 80, 191, 1) 0%,
    rgba(81, 45, 168, 1) 100%
  );
  border: none;
`;

const H1Styled = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 2rem;
`;

const H2Styled = styled.h2`
  font-size: 1.3rem;
  padding: 0;
  margin: 0;
`;

const BottomSliderStyled = styled.div`
  width: 100%;
  height: 45%;
  bottom: 0px;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  position: fixed;
  background-color: #fff;
  box-shadow: 1px 1px 20px 1px #000;
  z-index: 2;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  p {
    text-align: center;
    margin: 20px 40px;
  }
`;

const MainStyled = styled.main`
  z-index: 1;
  margin: 0;
  padding: 80px 0px;
  width: 100vw;
  height: 100vh;
  background: rgb(120, 108, 255);
  background: linear-gradient(
    174deg,
    rgba(120, 108, 255, 1) 0%,
    rgba(90, 200, 250, 1) 100%
  );

  .bgWelcome {
    z-index: -1;
  }
`;
