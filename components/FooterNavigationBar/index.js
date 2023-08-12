import styled from "styled-components";

export default function FooterNavigationBar() {
  return (
    <FooterWrapper>
      <NavigationList>
        <NavigationElement>1</NavigationElement>
        <NavigationElement>2</NavigationElement>
        <NavigationElement>3</NavigationElement>
        <NavigationElement>4</NavigationElement>
      </NavigationList>
    </FooterWrapper>
  );
}

const NavigationElement = styled.li`
  padding: 10px;
`;

const NavigationList = styled.ul`
  width: 100vw;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #fff;
  position: fixed;
  bottom: 0;
`;
