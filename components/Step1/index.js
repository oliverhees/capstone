import styled from "styled-components";
import { TrainingsdataForm } from "../styles/TrainingsdataForm";

export default function Step1({ setFormData, formData, nextStep }) {
  
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
      <h2>Step 1: Personal information</h2>
      <TrainingsdataForm onSubmit={handleSubmit}>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <label htmlFor="gender">What is your gender?</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Please select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <label>
          Do you have any health limitations or injuries that might affect
          training? (Yes/No)
        </label>
        <div className="radio-fields">
          <input
            type="radio"
            id="yes"
            name="health"
            value="yes"
            checked={formData.health === "yes"}
            onChange={handleChange}
          />
          <label htmlFor="male">Yes</label>
          <input
            type="radio"
            id="no"
            name="health"
            value="no"
            checked={formData.health === "no"}
            onChange={handleChange}
          />
          <label htmlFor="female">No</label>
        </div>
        {formData.health === "yes" && (
          <>
            <label htmlFor="age">Please explain briefly</label>
            <input
              type="text"
              name="health_limitations"
              value={formData.health_limitations}
              onChange={handleChange}
            />
          </>
        )}

        <FormbuttonStyled type="submit">
          Next
        </FormbuttonStyled>
      </TrainingsdataForm>
    </>
  );
}

const FormbuttonStyled = styled.button`
    padding: 10px 0px 10px 0px;
    border-radius: 2rem;
    border: solid thin #ccc;

    &:hover{
      background-color: #999;
      color: #fff;
    }
  `;