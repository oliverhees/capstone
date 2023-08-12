import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import DateDiff from "../components/DateDiff";
import Overview from "../components/Overview";
import BodyDimensions from "../components/BodyDimensions";
import CreateTrainingButton from "../components/CreateTrainingButton";
import Welcome from "../components/Welcome";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

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
          <Heading>Hello {formData.firstName},</Heading>
          <SubHeading>
            Days:{" "}
            <DateDiff
              sDate={formData.entryDate}
              eDate={todayDate.toLocaleDateString()}
            />
          </SubHeading>
          <Overview weight={formData.weight} />
          <BodyDimensions
            chestD={formData.chest}
            bellyD={formData.belly}
            hipD={formData.hip}
          />
          <CreateTrainingButton />
        </>
      ) : (
        <Welcome setFormData={setFormData} formData={formData} />
      )}
    </MainStyled>
  );
}

const MainStyled = styled.main`
  padding: 20px;
  height: 100vh;
  background-color: var(--bg-color);
`;
