import styled from "styled-components";
import Image from "next/image";
import WeightChart from "../RenderChart";

export default function Overview({ weight, formData }) {
  const weightData = weight ? weight + " kg" : "k.a";

  const dWeight = formData.dWeight;

  // const dWeight = [
  //   {},
  //   { todayWeight: "116", weight_date: "11.8.2023" },
  //   { todayWeight: "114", weight_date: "13.8.2023" },
  //   { todayWeight: "112", weight_date: "18.8.2023" },
  //   { todayWeight: "100", weight_date: "22.8.2023" },
  //   { todayWeight: "98", weight_date: "30.8.2023" },
  //   { todayWeight: "92", weight_date: "31.8.2023" },
  // ];

  return (
    <>
      <OverviewTitleDiv>
        <OverviewTitle>Overview</OverviewTitle>
        <AddWeight href="/weight">Add Body Values</AddWeight>
      </OverviewTitleDiv>
      <WeightFrameDiv>
        <WeightDiv>
          <Image
            src="/../public/scale.png"
            width={40}
            height={40}
            alt="weight"
          />
          <PStyled>{weightData}</PStyled>
        </WeightDiv>
        <ChartDiv>
          <WeightChart dWeight={dWeight} />
        </ChartDiv>
      </WeightFrameDiv>
    </>
  );
}

const AddWeight = styled.a`
  font-size: 0.7rem;
  width: 28%;
  height: 25px;
  text-align: center;
  color: #fff;
  padding-top: 4px;
  padding-bottom: 2px;
  border-radius: 2rem;
  background: rgb(120, 80, 191);
  background: linear-gradient(
    174deg,
    rgba(120, 80, 191, 1) 0%,
    rgba(81, 45, 168, 1) 100%
  );
  border: none;
  text-decoration: none;
`;

const OverviewTitle = styled.h2`
  font-size: 1rem;
  font-weight: 500;
`;

const PStyled = styled.p`
  margin-top: 5px;
  margin-left: 10px;
  font-size: 1.8rem;
`;

const WeightDiv = styled.div`
  width: 40%;
  font-size: 1rem;
  display: flex;
  justify-content: left;
  padding-top: 10px;
`;
const ChartDiv = styled.div`
  width: 60%;
  font-size: 1rem;
  display: flex;
  justify-content: right;
  padding-top: 10px;
`;

const WeightFrameDiv = styled.div`
  border: solid thin var(--b-color-grey);
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--box-shadow);
`;

const OverviewTitleDiv = styled.div`
  margin: 2rem 0 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
