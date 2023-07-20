import styled from "styled-components";

export default function ProfileForm() {
  return (
    <ProfileFormDiv onSubmit={formHandler}>
      <div className="column-left">
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" name="first-name" />
        <label htmlFor="weight">Weight</label>
        <input type="text" id="weight" name="weight" />
      </div>
      <div className="column-right">
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" name="last-name" />
        <label htmlFor="bmi">BMI</label>
        <input type="text" id="bmi" name="bmi" />
      </div>
      <ProfileFormBodyDiv>
        <BodyDetailDiv>
          <label htmlFor="chest">Chest</label>
          <input type="text" id="chest" name="chest" />
        </BodyDetailDiv>
        <BodyDetailDiv>
          <label htmlFor="belly">Belly</label>
          <input type="text" id="belly" name="belly" />
        </BodyDetailDiv>
        <BodyDetailDiv>
          <label htmlFor="hip">Hip</label>
          <input type="text" id="hip" name="hip" />
        </BodyDetailDiv>
      </ProfileFormBodyDiv>
      <SubmitButton type="submit">Save</SubmitButton>
    </ProfileFormDiv>
  );
}

/* Component Stylings */
//Form
const ProfileFormDiv = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  input {
    margin-bottom: 20px;
    width: 100%;
  }

  label {
    margin-bottom: 10px;
  }

  .column-left {
    display: flex;
    flex-direction: column;
    width: 40%;
  }

  .column-right {
    display: flex;
    flex-direction: column;
    width: 40%;
  }
`;

const ProfileFormBodyDiv = styled.div`
  grid-area: c;
  display: flex;
  gap: 10%;
  justify-content: space-between;
  width: 90%;
  margin-top: 20px;
`;

const BodyDetailDiv = styled.div`
  border: solid thin #ccc;
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  border-radius: 15px;

  input {
    width: 80%;
  }
`;

//Submit Button
const SubmitButton = styled.button`
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: 10px;
`;
