import styled from "styled-components";
import Image from "next/image";

export default function Overview({ weight }) {
  const weightData = weight ? weight + " kg" : "k.a";
  return (
    <>
      <OverviewTitleDiv>
        <OverviewTitle>Overview</OverviewTitle>
        <AddWeight href="/weight">Add Weight</AddWeight>
      </OverviewTitleDiv>
      <WeightFrameDiv>
        <WeightDiv>
          <Image
            src="/../public/target.png"
            width={25}
            height={25}
            alt="weight"
          />
          <PStyled>{weightData}</PStyled>
        </WeightDiv>
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
`;

const WeightDiv = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: left;
  padding-top: 10px;
`;

const WeightFrameDiv = styled.div`
  border: solid thin var(--b-color-grey);
  padding: 1rem;
  border-radius: 0.5rem;
`;

const OverviewTitleDiv = styled.div`
  margin: 2rem 0 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
