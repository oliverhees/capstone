import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import DateDiff from "../components/DateDiff";
import Overview from "../components/Overview";
import BodyDimensions from "../components/BodyDimensions";

export default function Home({ setFormData, formData }) {
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
      <Overview weight={formData.weight} />
      <BodyDimensions
        chestD={formData.chest}
        bellyD={formData.belly}
        hipD={formData.hip}
      />
    </main>
  );
}
