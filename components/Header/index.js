import Image from "next/image";
import styled from "styled-components";
import DateDiff from "../DateDiff";

export default function Header({ formData, setFormData }) {
  const todayDate = new Date();
  return (
    <HeaderWrapper>
      <WrapperColumnLeft>
        <H1TitleStyled>Hello {formData.firstName},</H1TitleStyled>
        <SubHeading>
          Days after entry:{" "}
          <DateDiff
            sDate={formData.entryDate}
            eDate={todayDate.toLocaleDateString()}
          />
        </SubHeading>
      </WrapperColumnLeft>
      <WrapperColumnRight>
        {formData.imageUrl ? (
          <Image
            src={formData.imageUrl}
            alt="profile"
            width={40}
            height={40}
            style={imageStyle}
          />
        ) : (
          ""
        )}
      </WrapperColumnRight>
    </HeaderWrapper>
  );
}

const imageStyle = {
  borderRadius: "50%",
  border: "1px solid #ccc",
};

const WrapperColumnLeft = styled.div`
  width: 50%;
`;
const WrapperColumnRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 10px;
  padding-top: 10px;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  border-bottom: solid thin var(--b-color-grey);
  position: fixed;
  background-color: #fff;
`;

const H1TitleStyled = styled.h1`
  font-size: 1.5rem;
  line-height: 1rem;
`;

const SubHeading = styled.h2`
  text-align: left;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 0;
`;
