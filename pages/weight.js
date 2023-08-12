import styled from "styled-components";
import Heading from "../components/Heading";
import { BsArrowLeft } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Weight({ formData, setFormData }) {
  const todayDate = new Date();
  const [todayWeight, setTodayWeight] = useState("");
  const [showSubmitBox, setShowSubmitBox] = useState(false);
  const updatedWeight = formData.dWeight || [];
  const router = useRouter();

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

  const handleOnChange = (event) => {
    setTodayWeight(event.target.value);
  };

  //Handle input change
  const handleSubmit = (event) => {
    event.preventDefault();

    setShowSubmitBox(true);
    setTimeout(handleCloseBox, 2000);

    updatedWeight.push({
      todayWeight,
      weight_date: todayDate.toLocaleDateString(),
    });

    setFormData({
      ...formData,
      dWeight: updatedWeight,
    });

    if (todayWeight) {
      router.push("/");
      return;
    }
  };

  return (
    <MainStyled>
      <>
        <Heading>
          <StyledArrowIcon />
          Back
        </Heading>
        <H1WeightTitle>Add your weight!</H1WeightTitle>
        <WeightFormStyled onSubmit={handleSubmit}>
          <FormWrapper>
            <input
              type="number"
              id="weight"
              onChange={handleOnChange}
              name="weight"
              value={todayWeight}
            />
            <label htmlFor="weight">kg</label>
          </FormWrapper>
          <SubmitButton>Add Weight</SubmitButton>
          {showSubmitBox && <SubmitBox onClose={handleCloseBox} />}
        </WeightFormStyled>
      </>
    </MainStyled>
  );
}

const StyledArrowIcon = styled(BsArrowLeft)`
  font-size: 1.8rem;
  padding-top: 10px;
`;

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

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

const H1WeightTitle = styled.h1`
  margin-top: 100px;
  font-size: var(--fs-h1);
  text-align: center;
  margin-bottom: 40px;
`;

const WeightFormStyled = styled.form`
  flex-direction: column;
  display: flex;
  align-items: center;

  input {
    margin-bottom: 20px;
    width: 30%;
    background-color: #fff;
    padding: 10px;
    border-radius: 2rem;
    border: solid thin #f1f4f8;
    text-align: center;
    font-weight: 600;
    font-size: 2rem;
  }

  label {
    font-size: 1rem;
    margin: -20px 0 0 10px;
    font-size: 1.2rem;
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

const MainStyled = styled.main`
  background-color: var(--bg-color);
  padding: 20px;
  height: 100vh;
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
