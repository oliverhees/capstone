import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import DateDiff from "../components/DateDiff";
import Overview from "../components/Overview";
import BodyDimensions from "../components/BodyDimensions";
import CreateTrainingButton from "../components/CreateTrainingButton";
import Welcome from "../components/Welcome";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home({ setFormData, formData }) {
  const welcomeWorkflow = formData.welcome;
  const todayDate = new Date();
  const router = useRouter();

  useEffect(() => {
    // This check ensures that the router functions are only used on the client
    if (typeof window !== 'undefined') {
      if (formData.firstFill === false) {
        router.push("/profile");
      }
    }
  }, []);
  
  return (
    <main>
      {welcomeWorkflow === true ? (
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
    </main>
  );
}
