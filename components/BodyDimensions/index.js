import styled from "styled-components";

export default function BodyDimensions({ chestD, bellyD, hipD }) {

  const chest = chestD ? chestD : 0;
  const belly = bellyD ? bellyD : 0;
  const hip = hipD ? hipD : 0;

  return (
    <BodyDimensionsWrapperDiv>
      <DimensionWrapperDiv>
        <DimensionTitleDiv>Chest</DimensionTitleDiv>
        <DimensionDiv>{chest} cm</DimensionDiv>
      </DimensionWrapperDiv>
      <DimensionWrapperDiv>
        <DimensionTitleDiv>Belly</DimensionTitleDiv>
        <DimensionDiv>{belly} cm</DimensionDiv>
      </DimensionWrapperDiv>
      <DimensionWrapperDiv>
        <DimensionTitleDiv>Hip</DimensionTitleDiv>
        <DimensionDiv>{hip} cm</DimensionDiv>
      </DimensionWrapperDiv>
    </BodyDimensionsWrapperDiv>
  );
}

const DimensionDiv = styled.p`
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
`;

const DimensionTitleDiv = styled.h4`
  text-align: center;
  font-size: 1rem;
`;
const DimensionWrapperDiv = styled.div`
  border: solid thin #ccc;
  border-radius: 1rem;
  padding: 0 1.5rem 1rem 1.5rem;
`;

const BodyDimensionsWrapperDiv = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
`;
