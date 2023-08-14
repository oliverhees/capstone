import MultiStepForm from "../components/MultiStepForm";
import styled from "styled-components";

const MyPage = ({ setFormData, formData }) => {
  return (
    <TrainingsdataWrapperDiv>
      <MultiStepForm setFormData={setFormData} formData={formData} />
    </TrainingsdataWrapperDiv>
  );
};

export default MyPage;

const TrainingsdataWrapperDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;
