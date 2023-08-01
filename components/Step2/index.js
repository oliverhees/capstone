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
      <h2>Step 2: Training goal and frequency</h2>
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
  padding: 10px 0px 10px 0px;
  border-radius: 2rem;
  border: solid thin #ccc;

  &:hover {
    background-color: #999;
    color: #fff;
  }
`;
