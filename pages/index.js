import Overview from "../components/Overview";
import BodyDimensions from "../components/BodyDimensions";
import CreateTrainingButton from "../components/CreateTrainingButton";
import NewTrainingButton from "../components/NewTrainingButton";
import Welcome from "../components/Welcome";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";
import DisplayWorkoutPlan from "../components/DisplayWorkoutPlan";

export default function Home({ setFormData, formData }) {
  const todayDate = new Date();
  const router = useRouter();

  useEffect(() => {
    // This check ensures that the router functions are only used on the client
    if (typeof window !== "undefined") {
      if (formData.welcome === true) {
        if (!formData.firstName && !formData.lastName && !formData.firstFill) {
          router.push("/profile");
        }
      }
    }
  }, [formData.welcome]);

  return (
    <MainStyled>
      {formData.welcome === true ? (
        <>
          <Overview weight={formData.weight} formData={formData} />
          <BodyDimensions
            chestD={formData.chest}
            bellyD={formData.belly}
            hipD={formData.hip}
            formData={formData}
          />
          {!formData.tData ? "" : <DisplayWorkoutPlan formData={formData} />}
          {!formData.tData ? <CreateTrainingButton /> : <NewTrainingButton />}
        </>
      ) : (
        <Welcome setFormData={setFormData} formData={formData} />
      )}
    </MainStyled>
  );
}

const MainStyled = styled.main`
  padding: 50px 20px;
  height: 100vh;
  background-color: var(--bg-color);
`;
