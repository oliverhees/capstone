import styled from "styled-components";
import { TrainingsdataForm } from "../styles/TrainingsdataForm";

export default function Step2({ setFormData, formData, nextStep }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <>
      <H2Title>Step 2: Training goal and frequency</H2Title>
      <TrainingsdataForm onSubmit={handleSubmit}>
        <label htmlFor="training_goal">What is your training goal?</label>
        <select
          id="training_goal"
          name="training_goal"
          value={formData.training_goal}
          onChange={handleChange}
        >
          <option value="">Please select</option>
          <option value="muscle_building">Muscle building</option>
          <option value="endurance">Endurance</option>
          <option value="weight_loss">Weight loss</option>
          <option value="general_fitness">General fitness</option>
        </select>
        <label htmlFor="work_per_week">
          How often do you currently work out per week? (Days)
        </label>
        <input
          type="number"
          name="work_per_week"
          value={formData.work_per_week}
          onChange={handleChange}
        />
        <label htmlFor="training_usually">
          What type of training do you usually do?
        </label>
        <select
          id="training_usually"
          name="training_usually"
          value={formData.training_usually}
          onChange={handleChange}
        >
          <option value="">Please select</option>
          <option value="strength_training">Strength training</option>
          <option value="cardio">Cardio</option>
          <option value="crossfit">CrossFit</option>
        </select>

        <label htmlFor="current_training">
          What level have you reached in your current training?
        </label>
        <select
          id="current_training"
          name="current_training"
          value={formData.current_training}
          onChange={handleChange}
        >
          <option value="">Please select</option>
          <option value="beginner">Beginner</option>
          <option value="advanced">Advanced</option>
          <option value="expert">Expert</option>
        </select>

        <label htmlFor="exercises">What type of exercises do you prefer?</label>
        <select
          id="exercises"
          name="exercises"
          value={formData.exercises}
          onChange={handleChange}
        >
          <option value="">Please select</option>
          <option value="weight_lifting">Weight lifting</option>
          <option value="running">Running</option>
          <option value="yoga">Yoga</option>
        </select>

        <FormbuttonStyled type="submit">Next</FormbuttonStyled>
      </TrainingsdataForm>
    </>
  );
}

const FormbuttonStyled = styled.button`
  font-size: 1rem;
  margin-top: 20px;
  width: 100%;
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

const H2Title = styled.h2`
font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
