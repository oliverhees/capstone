import styled from "styled-components";
import { TrainingsdataForm } from "../styles/TrainingsdataForm";
// import trainingsData from "../../lib/mock.js";

export default function Step3({ setFormData, formData, nextStep }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormData({ ...formData, tData: trainingsData });
    nextStep();
  };

  return (
    <>
      <h2>Step 3: Training preferences and requirements</h2>
      <TrainingsdataForm onSubmit={handleSubmit}>
        <label>Do you have access to a gym or do you work out at home?</label>
        <div className="radio-fields">
          <input
            type="radio"
            id="home"
            name="gym"
            value="at-home"
            checked={formData.gym === "at-home"}
            onChange={handleChange}
          />
          <label htmlFor="home">at home</label>
          <input
            type="radio"
            id="gym"
            name="gym"
            value="in-gym"
            checked={formData.gym === "in-gym"}
            onChange={handleChange}
          />
          <label htmlFor="gym">in gym</label>
        </div>
        <label htmlFor="muscle_groups">
          What muscle groups do you want to target in particular?
        </label>
        <select
          id="muscle_groups"
          name="muscle_groups"
          value={formData.muscle_groups}
          onChange={handleChange}
        >
          <option value="">Please select</option>
          <option value="legs">Legs</option>
          <option value="trunk">Trunk</option>
          <option value="arms">Arms</option>
          <option value="shoulders_and_back">Shoulders and back</option>
        </select>
        <label>
          Are you willing to participate in rigorous or intense workouts?
          (Yes/No)
        </label>
        <div className="radio-fields">
          <input
            type="radio"
            id="yes"
            name="intense_workouts"
            value="yes"
            checked={formData.intense_workouts === "yes"}
            onChange={handleChange}
          />
          <label htmlFor="yes">yes</label>
          <input
            type="radio"
            id="no"
            name="intense_workouts"
            value="no"
            checked={formData.intense_workouts === "no"}
            onChange={handleChange}
          />
          <label htmlFor="no">no</label>
        </div>
        <label>
          Do you have experience training with free weights? (Yes/No)
        </label>
        <div className="radio-fields">
          <input
            type="radio"
            id="free_weights_yes"
            name="free_weights"
            value="yes"
            checked={formData.free_weights === "yes"}
            onChange={handleChange}
          />
          <label htmlFor="free_weights_yes">yes</label>
          <input
            type="radio"
            id="free_weights_no"
            name="free_weights"
            value="no"
            checked={formData.free_weights === "no"}
            onChange={handleChange}
          />
          <label htmlFor="free_weights_no">no</label>
        </div>

        <label htmlFor="spend_time">
          How much time can you spend per training session? (min)
        </label>
        <input
          type="text"
          name="spend_time"
          value={formData.spend_time}
          onChange={handleChange}
        />

        <label>
          Are you willing to participate in cardio exercises as well? (Yes/No)
        </label>
        <div className="radio-fields">
          <input
            type="radio"
            id="cardio_yes"
            name="cardio"
            value="yes"
            checked={formData.cardio === "yes"}
            onChange={handleChange}
          />
          <label htmlFor="cardio_yes">yes</label>
          <input
            type="radio"
            id="cardio_no"
            name="cardio"
            value="no"
            checked={formData.cardio === "no"}
            onChange={handleChange}
          />
          <label htmlFor="cardio_no">no</label>
        </div>

        <label htmlFor="rest_time">
          How much rest time can you allow between training days? (Days)
        </label>
        <input
          type="text"
          name="rest_time"
          value={formData.rest_time}
          onChange={handleChange}
        />
        <FormbuttonStyled type="submit">Create Plan</FormbuttonStyled>
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
