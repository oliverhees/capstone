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
      <H2Title>Step 1: Personal information</H2Title>
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
