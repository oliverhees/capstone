import MultiStepForm from "../components/MultiStepForm";
import styled from "styled-components";

const MyPage = ({ setFormData, formData }) => {
  return (
    <TrainingsdataWrapperDiv>
      <TrainingsdataTitleH1>Trainingsdata</TrainingsdataTitleH1>
      <MultiStepForm setFormData={setFormData} formData={formData} />
    </TrainingsdataWrapperDiv>
  );
};

export default MyPage;

const TrainingsdataTitleH1 = styled.h1`
  font-weight: bold;
  font-size: 2rem;
`;

const TrainingsdataWrapperDiv = styled.div`
  padding: 1rem;
`;
