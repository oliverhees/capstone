import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";

export default function ProfileForm({ setFormData, formData }) {
  const [showSubmitBox, setShowSubmitBox] = useState(false);
  //Handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  //Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSubmitBox(true);
    setTimeout(handleCloseBox, 2000);
  };

  const setFormDataCallback = useCallback(setFormData, []);

  useEffect(() => {
    // Function to convert the date to the desired format: 12.12.1981
    const formatDate = (date) => {
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    };

    // Current Date
    const currentDate = new Date();

    // Save date in the desired format
    setFormDataCallback({ ...formData, entryDate: formatDate(currentDate) });
  }, []);

  const SubmitBox = ({ onClose }) => {
    return (
      <Overlay>
        <div className="submit-box">
          <p>Data has been successfully saved!</p>
        </div>
      </Overlay>
    );
  };

  const handleCloseBox = () => {
    setShowSubmitBox(false);
  };

  return (
    <>
      <ProfileFormDiv onSubmit={handleSubmit}>
        <div className="column-left">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="weight">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="column-right">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="bmi">BMI (min. 10 / max. 40)</label>
          <input
            type="number"
            id="bmi"
            name="bmi"
            min="10"
            max="40"
            value={formData.bmi}
            onChange={handleInputChange}
            required
          />
        </div>
        <ProfileFormBodyDiv>
          <BodyDetailDiv>
            <label htmlFor="chest">Chest (cm)</label>
            <input
              type="number"
              id="chest"
              name="chest"
              value={formData.chest}
              onChange={handleInputChange}
              required
            />
          </BodyDetailDiv>
          <BodyDetailDiv>
            <label htmlFor="belly">Belly (cm)</label>
            <input
              type="number"
              id="belly"
              name="belly"
              value={formData.belly}
              onChange={handleInputChange}
              required
            />
          </BodyDetailDiv>
          <BodyDetailDiv>
            <label htmlFor="hip">Hip (cm)</label>
            <input
              type="number"
              id="hip"
              name="hip"
              value={formData.hip}
              onChange={handleInputChange}
              required
            />
          </BodyDetailDiv>
        </ProfileFormBodyDiv>
        <SubmitButton type="submit">Save</SubmitButton>
      </ProfileFormDiv>
      {showSubmitBox && <SubmitBox onClose={handleCloseBox} />}
    </>
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
  width: 95%;
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
  margin: 30px 0;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .submit-box {
    background-color: white;
    padding: 20px;
    margin: 0 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;
