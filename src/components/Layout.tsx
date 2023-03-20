
import styled from "@emotion/styled";
import { Link } from "gatsby";

export interface LayoutProps {
  children: React.ReactNode;
}

const Main = styled.main`
max-width: 800px;
margin: auto;
`

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
min-height: 100vh;
`

const SidebarWrapper = styled.div`
background-color: #8f858c;
min-width: 200px;
`

const SidebarLink = styled(Link)`
display: block;
font-weight: bold;
color: inherit;
text-decoration: none;
padding: 1rem;
transition: 0.2s background-color;
border-radius: 1rem;
margin: 0.5rem;
&:hover {
  box-shadow: 2px 2px 2px #564f54;
  background-color: #6b6369;
}
`

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarLink to="/projects">My Projects</SidebarLink>
      <SidebarLink to="/resume">My Resume</SidebarLink>
    </SidebarWrapper>
  );
}

export const Layout = ({ children }: LayoutProps) => {
  return (
  <Wrapper>
    <Sidebar />
    <Main>{children}</Main>
  </Wrapper>
  );
}

export default Layout;
