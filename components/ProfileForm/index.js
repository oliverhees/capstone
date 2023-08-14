import styled from "styled-components";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ImageUpload from "../../components/ImageUpload";

export default function ProfileForm({ setFormData, formData }) {
  const [showSubmitBox, setShowSubmitBox] = useState(false);
  const [image, setImage] = useState(null);
  const router = useRouter();
  //Handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  //Handle form submit
  const HandleSubmit = (event) => {
    event.preventDefault();

    setShowSubmitBox(true);
    setTimeout(handleCloseBox, 2000);

    if (!formData.entryDate === true) {
      const currentDate = new Date();
      const today = currentDate.toLocaleDateString();
      setFormData({
        ...formData,
        entryDate: today,
        firstFill: true,
      });
    }

    if (image) {
      setFormData({ ...formData, imageUrl: image.url });
    }

    if (!formData.firstFill) {
      router.push("/");
      return;
    }
  };

  const SubmitBox = ({ onClose }) => {
    return (
      <Overlay>
        <div className="submit-box">
          <p>Data has been successfully saved! </p>
        </div>
      </Overlay>
    );
  };

  const handleCloseBox = () => {
    setShowSubmitBox(false);
  };
  return (
    <>
      <ImageUpload image={image} setImage={setImage} />
      <ProfileFormDiv onSubmit={HandleSubmit}>
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
  height: auto;

  input {
    margin-bottom: 20px;
    width: 100%;
    background-color: #fff;
    padding: 10px;
    border-radius: 2rem;
    border: solid thin #f1f4f8;
  }

  label {
    margin-bottom: 10px;
    font-size: 0.8rem;
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
  display: flex;
  gap: 10%;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const BodyDetailDiv = styled.div`
  border: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  align-items: left;
  border-radius: 15px;

  input {
    width: 100%;
  }
`;

//Submit Button

const SubmitButton = styled.button`
  width: 100%;
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

  :hover {
    background: linear-gradient(
      174deg,
      rgba(160, 80, 191, 1) 0%,
      rgba(121, 45, 168, 1) 100%
    );
  }
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
