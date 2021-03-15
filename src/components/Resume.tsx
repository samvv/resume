
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt, faEnvelope, faMobileAlt } from "@fortawesome/free-solid-svg-icons"

import Job from "./Job"
import Link from "./Link"
import Section from "./Section"
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Fullname = styled.h1`
font-weight: bold;
color: #232020;
margin: 0;
text-transform: uppercase;
`

const Title = styled.h2`
font-weight: bold;
font-size: 1.2em;
color: gray;
margin: 0.5em;
`

interface AddressListProps {
  children: React.ReactNode;
}

const AddressList = ({ children }: AddressListProps) => (
  <table>
    <tbody>{children}</tbody>
  </table>
)

const AddressWrapper = styled.tr`
color: #888;
margin: 0.5em 0;
font-size: 0.9em;
`

interface AddressProps {
  icon: IconProp;
  children: React.ReactNode;
}

const Address = ({ icon, children }: AddressProps) => (
  <AddressWrapper>
    <td style={{ textAlign: 'center' }}><FontAwesomeIcon icon={icon} /></td>
    <td>{children}</td>
  </AddressWrapper>
);

const ProfileWrapper = styled.div`
padding: 1em 3em;
background-color: #FFEE88;
border-bottom: 1px solid #232020;
`

const Columns = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
align-items: flex-start;
`

const ProfileFirstColumn = styled.div`
flex: 0 0 50%;
text-align: right;
padding: 1em;
box-sizing: border-box;
`

const FirstColumn = styled.div`
min-height: 10000px;
flex: 0 0 50%;
border-right: 1px solid #232020;
`

const SecondColumn = styled.div`
`

export interface ProfileProps {
  fullName: string;
  title: string;
  address?: string;
  email?: string;
  cellPhone?: string;
}

const Profile = ({
  address,
  fullName,
  email,
  title,
  cellPhone,
}: ProfileProps) => (
  <ProfileWrapper>
  <Columns style={{ alignItems: 'center' }}>
    <ProfileFirstColumn>
      <Fullname>{fullName}</Fullname>
      <Title>{title}</Title>
    </ProfileFirstColumn>
    <div>
      <AddressList>
        <Address icon={faMapMarkerAlt}>{address}</Address>
        <Address icon={faEnvelope}>{email}</Address>
        <Address icon={faMobileAlt}>{cellPhone}</Address>
      </AddressList>
    </div>
  </Columns>
  </ProfileWrapper>
)

const Introduction = styled.div`
padding: 1em;
`

const List = styled.ul`
font-size: 0.9em;
padding: 0;
padding-left: 2em;
`

const SkillList = styled(List)`
`

const ListItem = styled.li`
margin: 0.3em 0;
`

const ProjectWrapper = styled.div`
padding: 1em;
font-size: 0.9em;
`
const ProjectTitle = styled.h4`
margin: 0;
font-size: 1.2em;
font-weight: bold;
`

const ProjectLink = styled(Link)`
display: block;
margin: 0.3em 0;
`

const Footnote = styled.div`
padding: 0.5em;
font-size: 0.8em;
`

interface ProjectProps {
  title: string;
  url?: string;
  children: React.ReactNode;
}

const Project = ({ title, children, url }: ProjectProps) => (
  <ProjectWrapper>
    <ProjectTitle>{title}</ProjectTitle>
    {children}
    {url !== undefined ? <ProjectLink to={url} /> : null}
  </ProjectWrapper>
)

export const Resume = () => (
  <>
    <Profile
        fullName="Sam Vervaeck"
        title="Software developer"
        email="samvv@pm.me"
        address="Mechelen, Belgium"
        cellPhone="+32474054981"
        />
    <Columns>
      <FirstColumn>
        <Introduction>
          I'm a highly motivated computer programmer with a big interest in how
          programming languages contribute to the production of correct and
          efficient software. I have expertise in many different proramming
          languages and environments, including the web and functional
          programming languages.
        </Introduction>
        <Section title="Experience">
          <Job title="Open-source software developer" period="2015-present">
            Creation and maintenance of many different projects that are mainly
            hosted at GitHub. Primary focus on a new programming langugage for
            efficient app development called <Link to="https://github.com/boltlang/Bolt">Bolt</Link>.
          </Job>
          <Job title="Junior software developer" period="August-September 2018">
            Development of a complete web platform in a team of three at
            IdentityBuilding. Recommended the React frontend and helped writing the
            backend using Django in Python. Took up the task of very quickly
            importing and processing large open datasets from the Belgian
            gouvernment into the database. 
          </Job>
          <Job title="Junior software developer" period="June-September 2013">
            Fixing bugs as a student in PointCarré, a digital platform part of the
            Vrije Universiteit Brussel. Code was written in PHP and challanging to
            refactor. 
          </Job>
          <Job title="Administrative assistant" period="June-August 2011">
            Cleaning up a large SharePoint workplace of the Statoil Brussels office
            as a student in collaboration with someone doing the same work in the
            London office. Wrote a few tools in Visual Basic to help administration
            and to speed up the cleaning process. 
          </Job>
        </Section>
        <Section title="Skills">
          <SkillList>
            <ListItem>Profound skills in creating user interfaces with ReactJS, including the new hooks system introduced in v16.8.0</ListItem>
            <ListItem>Web development using NodeJS, MongoDB and Express</ListItem>
            <ListItem>Systems programming and game development in C++ and Rust. Fluent use of template metaprogramming facilities in C++ and type traits in Rust.</ListItem>
            <ListItem>Basic fluency in Haskell: using and defining monads, working with various packages, creating new typeclasses</ListItem> 
            <ListItem>Basic knowledge of Elixir/Erlang: using the Phoenix framework and creating simple RESTful applications using the Maru microframework</ListItem>
            <ListItem>Proficient knowledge of compiler design and lexer/parser generators. Experience with the internals of the TypeScript compiler and some experience with LLVM.</ListItem>
            <ListItem>Fluent use of scripting languages such as Python. Some experience with machine learning frameworks.</ListItem>
          </SkillList>
        </Section>
      </FirstColumn>
      <SecondColumn>
        <Section title="Projects">
          <Project title="The Bolt Programming Language" url="https://github.com/boltlang/Bolt">
            A new programming language in the making which aims to speed up the
            process of creating and maintaining performant web apps.
            Eventually, the project will also support native applications.
          </Project>
          <Project title="Standard Collections Library for TypeScript" url="https://npmjs.com/scl">
            A collection of implementations of various algorithms and data
            structures that are taught during the first years of a computer
            science curriculum.
          </Project>
          <Project title="Templaty" url="https://github.com/samvv/Templaty">
            A code generator written in Python that reads a specification file
            and interprets it according to a specific set of rules. Has been
            tweaked to be very indentation-sensitive and can be used for a variety
            of use-cases.
          </Project>
          <Project title="Zen C++ Libraries" url="https://github.com/ZenLibraries/ZenLibraries">
            An attempt to create an alternative standard library for C++, taking
            ideas from Haskell and Rust and integrating them into version 17 of
            the C++ language. Currently awaiting further maintenance.
          </Project>
        </Section>
        <Section title="Trivia">
          <List>
            <ListItem>
              I don't own a driver's license. I don't like driving and I try to
              keep a low ecological footprint. I'm quite used in taking the
              public transport.
            </ListItem>
            <ListItem>
              Though it has been a while, I create my own music using a digital
              piano connected to a DAW on my computer. I love sountrack music, and 
              using some VSTi plugins I try to create movie-like atmospheres.
            </ListItem>
            <ListItem>
              I love martial arts and have followed several disciplines over the
              years, including Judo and Aikido. Currently, I'm keeping it
              simple and just go jogging.
            </ListItem>
          </List>
        </Section>
        <Footnote>
          This resume was written with React. 
          The source is freely available online at <Link to="https://github.com/samvv/resume" />.
        </Footnote>
      </SecondColumn>
    </Columns>
  </>
);

export default Resume;

