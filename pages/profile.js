import styled from "styled-components";
import EntryDate from "../components/EntryDate";
import ProfileForm from "../components/ProfileForm";
import MessageBox from "../components/MessageBox";
import Image from "next/image";

export default function Profile({ setFormData, formData }) {
  return (
    <MainWrapperStyled>
      <ProfileDiv>
        {!formData.firstFill && <MessageBox />}
        <PStyled>(*All Fields required)</PStyled>
        <ProfileForm setFormData={setFormData} formData={formData} />
      </ProfileDiv>
    </MainWrapperStyled>
  );
}

const PStyled = styled.p`
  padding-top: 10px;
  font-size: 0.7rem;
`;

const MainWrapperStyled = styled.main`
  z-index: 1;
  margin: 0 0 5rem 0;
  padding: 20px;
  width: 100vw;
  height: 100vh;
  background-color: var(--bg-color);
`;
const ProfileDiv = styled.div`
padding: 80px 0;
`;
