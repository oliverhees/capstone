import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import DateDiff from "../components/DateDiff";
import styled from "styled-components";
import ExerciseDisplay from "../components/ExerciseDisplay";

export default function Exercise({ setFormData, formData }) {
  //const exercisesData = JSON.parse(formData.getItem("tData"));
  const exercisesData = formData.tData || [];
  const todayDate = new Date();
  return (
    <main>
      <Heading>Hello {formData.firstName},</Heading>
      <SubHeading>
        Days:{" "}
        <DateDiff
          sDate={formData.entryDate}
          eDate={todayDate.toLocaleDateString()}
        />
      </SubHeading>
      <OverviewTitleDiv>Your training plan</OverviewTitleDiv>
      {exercisesData.length > 0 ? (
        <ExerciseDisplay
          exercises={exercisesData}
          setFormData={setFormData}
          formData={formData}
        />
      ) : (
        <p>No Data.</p>
      )}
    </main>
  );

  // <>
  //   <h2>On This page you see all Data saved in localstorage for check!</h2>
  //   {Object.entries(formData).map(([key, value]) => (
  //     <p key={key}>
  //       {key}: {JSON.stringify(value)}
  //     </p>
  //   ))}
  // </>
}

const OverviewTitleDiv = styled.h3`
  text-align: left;
  margin: 2rem 0 0.5rem 0;
`;
