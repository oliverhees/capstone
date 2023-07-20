import styled from "styled-components";
import EntryDate from "../components/EntryDate";
import ProfileForm from "../components/ProfileForm";
import Router from "next/router";

export default function Profile() {
  return (
    <main>
      <ProfileDiv>
        <h1>Profil</h1>
        <EntryDate />
        <ProfileForm />
      </ProfileDiv>
    </main>
  );
}

const ProfileDiv = styled.div``;
