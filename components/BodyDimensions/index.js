import styled from "styled-components";
import Image from "next/image";

export default function BodyDimensions({ chestD, bellyD, hipD }) {
  const chest = chestD ? chestD : 0;
  const belly = bellyD ? bellyD : 0;
  const hip = hipD ? hipD : 0;

  return (
    <BodyDimensionsWrapperDiv>
      <DimensionWrapperDiv>
      <Image
            src="/../public/torso.png"
            width={25}
            height={25}
            alt="weight"
          />
        <DimensionDiv>{chest} cm</DimensionDiv>
        <DimensionTitleDiv>Chest</DimensionTitleDiv>
      </DimensionWrapperDiv>
      <DimensionWrapperDiv>
      <Image
            src="/../public/fat.png"
            width={25}
            height={25}
            alt="weight"
          />
        <DimensionDiv>{belly} cm</DimensionDiv>
        <DimensionTitleDiv>Belly</DimensionTitleDiv>
      </DimensionWrapperDiv>
      <DimensionWrapperDiv>
      <Image
            src="/../public/waist (1).png"
            width={25}
            height={25}
            alt="weight"
          />
        <DimensionDiv>{hip} cm</DimensionDiv>
        <DimensionTitleDiv>Hip</DimensionTitleDiv>
      </DimensionWrapperDiv>
    </BodyDimensionsWrapperDiv>
  );
}

const DimensionDiv = styled.p`
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  margin: 0.4rem 0;
`;

const DimensionTitleDiv = styled.h4`
  text-align: center;
  font-size: 0.8rem;
  font-weight: 400;
  padding: 0;
  margin: 0;
`;
const DimensionWrapperDiv = styled.div`
  border: solid thin var(--b-color-grey);
  border-radius: 1rem;
  padding: 1rem 1.5rem 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BodyDimensionsWrapperDiv = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
