
import "../styles/global.css"

import Layout from "../components/Layout";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const avatarCss = css`
width: 8rem;
border-radius: 50%;
border: 10px solid white;
margin: 1rem;
`

const Row = styled.div`
display: flex;
align-items: center;
margin-bottom: 2rem;
`

const headingCss = css`
flex: 1 1 auto;
`

const Home = () => {
  return (
    <Layout>
      <Row>
        <StaticImage css={avatarCss} src="../images/alien-avatar.jpeg" alt="Avatar of Sam" />
        <h1 css={headingCss}>Hi there!</h1>
      </Row>
      <p>
        I'm Sam Vervaeck, a software developer from Belgium.
        I'm an open-source advocate with a big interest in type systems,
        compilers and how programming languages increase
        security and performance on complex software projects.
      </p>
      <p>
        I use this website to showcase my portfolio and tell you about the latest developments in my open-source work.
        If you are a company who wishes to hire me you should go straight to <Link to="/resume">my resume</Link>.
      </p>
    </Layout>
  );
}

export default Home;
