import styled from "styled-components";
import ExerciseDisplay from "../components/ExerciseDisplay";

export default function Exercise({ setFormData, formData }) {
  const exercisesData = formData.tData || [];
  const todayDate = new Date();
  return (
    <StyledMain>
      {exercisesData.length > 0 ? (
        <ExerciseDisplay
          exercises={exercisesData}
          setFormData={setFormData}
          formData={formData}
        />
      ) : (
        <p>No Data.</p>
      )}
    </StyledMain>
  );
}

const StyledMain = styled.main`
padding-top: 40px;
`;

const OverviewTitleDiv = styled.h3`
  text-align: left;
  margin: 2rem 0 0.5rem 0;
`;
