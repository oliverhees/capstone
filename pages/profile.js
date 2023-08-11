import styled from "styled-components";
import EntryDate from "../components/EntryDate";
import ProfileForm from "../components/ProfileForm";
import Router from "next/router";
import MessageBox from "../components/MessageBox";

export default function Profile({ setFormData, formData }) {
  return (
    <MainWrapperStyled>
      <ProfileDiv>
        <H1TitleStyled>Profil</H1TitleStyled>
        <EntryDate formData={formData} />
        {!formData.firstFill && <MessageBox />}
        <PStyled>(*All Fields required)</PStyled>
        <ProfileForm setFormData={setFormData} formData={formData} />
      </ProfileDiv>
    </MainWrapperStyled>
  );
}

const H1TitleStyled = styled.h1`
  font-size: 1.5rem;
`;

const PStyled = styled.p`
  padding-top: 10px;
  font-size: 0.7rem;
`;

const MainWrapperStyled = styled.main`
  z-index: 1;
  margin: 0;
  padding: 20px;
  width: 100vw;
  height: 100vh;
  background-color: var(--bg-color);
`;
const ProfileDiv = styled.div`
  /* background-color: #fff; */
`;
