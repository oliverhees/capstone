import styled from "styled-components";

export const TrainingsdataForm = styled.form`
  width: 80%;
  display: flex;
  justify-content: left;
  flex-direction: column;

  label {
    margin-bottom: 0.5rem;
  }

  input,
  select {
    margin-bottom: 1rem;
    border-radius: 1rem;
    border: solid thin #ccc;
    padding: 5px 10px;
  }
`;
