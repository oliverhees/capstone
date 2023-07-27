import styled from "styled-components";

export default function Overview({ weight }) {

  const weightData = weight ? weight + ' kg' : 'k.a';
  return (
    <>
      <OverviewTitleDiv>Overview</OverviewTitleDiv>
      <WeightFrameDiv>
        <WeightDiv>{weightData}</WeightDiv>
      </WeightFrameDiv>
    </>
  );
}

const WeightDiv = styled.div`
  font-size: 1.5rem;
`;

const WeightFrameDiv = styled.div`
  border: solid thin #ccc;
  padding: 2rem;
  border-radius: 1rem;
`;

const OverviewTitleDiv = styled.h3`
  text-align: left;
  margin: 2rem 0 0.5rem 0;
`;
