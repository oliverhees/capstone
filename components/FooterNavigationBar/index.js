import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router"; // Importiere den useRouter-Hook

export default function FooterNavigationBar() {
  const [activeNavItem, setActiveNavItem] = useState(null);
  const router = useRouter(); // Initialisiere den useRouter-Hook

  useEffect(() => {
    // Durchlaufe die Navigationselemente und finde den Index des aktuellen Pfads
    const index = navigationElements.findIndex(
      (element) => element.link === router.pathname
    );
    if (index !== -1) {
      setActiveNavItem(index);
    }
  }, [router.pathname]); // Überwache Änderungen des Pfads

  const handleIconClick = (index) => {
    if (activeNavItem === index) {
      setActiveNavItem(null); // Setze den aktiven Zustand zurück
    } else {
      setActiveNavItem(index);
    }
  };

  const navigationElements = [
    { text: "Home", icon: "home-st.png", activeIcon: "home.png", link: "/" },
    {
      text: "Trainings",
      icon: "workout-st.png",
      activeIcon: "workout.png",
      link: "/exercise",
    },
    {
      text: "Activity",
      icon: "checklist-st.png",
      activeIcon: "checklist.png",
      link: "/activity",
    },
    {
      text: "Profile",
      icon: "profile-st.png",
      activeIcon: "profile.png",
      link: "/profile",
    },
  ];

  return (
    <FooterWrapper>
      <NavigationList>
        {navigationElements.map((element, index) => (
          <Link href={element.link} key={index}>
            <NavigationElement
              className={activeNavItem === index ? "active" : ""}
            >
              <NavElementIcon onClick={() => handleIconClick(index)}>
                <Image
                  src={`/../public/${
                    activeNavItem === index ? element.activeIcon : element.icon
                  }`}
                  width={25}
                  height={25}
                  alt={element.text}
                />
              </NavElementIcon>
              <NavElementText isActive={activeNavItem === index}>
                {element.text}
              </NavElementText>
            </NavigationElement>
          </Link>
        ))}
      </NavigationList>
    </FooterWrapper>
  );
}

const NavElementIcon = styled.div`
  font-size: 1rem;
`;

const NavElementText = styled.span`
  font-size: 0.8rem;
  color: ${(props) => (props.isActive ? "#461B93" : "#999fa8")};
`;

const NavigationElement = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavigationList = styled.ul`
  width: 100vw;
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
`;

const FooterWrapper = styled.footer`
  border-top: solid thin var(--b-color-grey);
  width: 100vw;
  background-color: #fff;
  position: fixed;
  bottom: 0;

  a {
    text-decoration: none;
  }
`;
