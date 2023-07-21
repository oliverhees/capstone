import styled from "styled-components";
import EntryDate from "../components/EntryDate";
import ProfileForm from "../components/ProfileForm";
import Router from "next/router";

export default function Profile({ setFormData, formData }) {
  return (
    <main>
      <ProfileDiv>
        <h1>Profil</h1>
        <EntryDate formData={formData} />
        <ProfileForm setFormData={setFormData} formData={formData} />
      </ProfileDiv>
    </main>
  );
}

const ProfileDiv = styled.div`
  background-color: #fff;
`;
