
import "../styles/global.css"

import styled from "@emotion/styled";
import { Global, css, keyframes } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarkerAlt,
  faEnvelope,
  faMobileAlt,
  faGlasses,
  faBriefcase,
  faWrench,
  faStamp,
  faComments,
  faGraduationCap,
  faMapPin
} from "@fortawesome/free-solid-svg-icons"
import { IconProp as FontAwesomeIconProp } from "@fortawesome/fontawesome-svg-core";

const dateColor = '#777';
const fullNameColor = '#EEE';
const defaultHeaderColor = '#DDD';
const sectionBackgroundColor = 'rgba(255,255,255,0.9)'

const linkCss = css`
color: inherit;
text-decoration: underline;
`

interface LinkProps {
  to: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Link = ({ to, children, ...props }: LinkProps) => (
  <a css={linkCss} {...props} href={to}>
    {children === undefined ? to : children}
  </a>
)

const ItemWrapper = styled.div`
margin: 1em;
`

const ItemTitle = styled.h4`
margin-bottom: 0;
`

const ItemPeriod = styled.div`
text-transform: uppercase;
color: ${dateColor};
font-size: 0.8em;
`

const ItemDescription = styled.div`
font-size: 0.9em;
`

const ItemLocation = styled.div`
font-size: 0.8em;
`

const ItemUrl = styled(Link)`
color: black;
display: block;
margin: 0.3em 0;
`

interface ItemProps {
  title: string;
  period?: string;
  children?: React.ReactNode;
  location?: string;
  url?: string;
}

function Item({ title, period, children, location, url }: ItemProps) {
  return (
    <ItemWrapper>
      <ItemTitle>{title}</ItemTitle>
      {location && <ItemLocation><FontAwesomeIcon icon={faMapPin} /> {location}</ItemLocation>}
      {period && <ItemPeriod>{period}</ItemPeriod>}
      {children && <ItemDescription>{children}</ItemDescription>}
      {url && <ItemUrl to={url}>{url}</ItemUrl>}
    </ItemWrapper>
  );
}

const FullName = styled.h1`
font-weight: bold;
color: ${fullNameColor};
margin: 0;
text-transform: uppercase;
`

const Activity = styled.h2`
font-weight: bold;
font-size: 1.2em;
color: ${defaultHeaderColor};
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
color: ${defaultHeaderColor};
margin: 0.5em 0;
font-size: 0.9em;
`

interface AddressProps {
  icon: FontAwesomeIconProp;
  children: React.ReactNode;
}

const Address = ({ icon, children }: AddressProps) => (
  <AddressWrapper>
    <td style={{ textAlign: 'center' }}><FontAwesomeIcon icon={icon} /></td>
    <td>{children}</td>
  </AddressWrapper>
);

const HeaderWrapper = styled.div`

position: relative;
padding: 1em 3em;
z-index: 0;
background-color: rgba(0,0,0,0.3);

&:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-position: center;
  filter: brightness(70%);
}
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

const Header = ({
  address,
  fullName,
  email,
  title,
  cellPhone,
}: ProfileProps) => (
  <HeaderWrapper>
    <Columns style={{ alignItems: 'center' }}>
      <ProfileFirstColumn>
        <FullName>{fullName}</FullName>
        <Activity>{title}</Activity>
      </ProfileFirstColumn>
      <div>
        <AddressList>
          <Address icon={faMapMarkerAlt}>{address}</Address>
          <Address icon={faEnvelope}>{email}</Address>
          <Address icon={faMobileAlt}>{cellPhone}</Address>
        </AddressList>
      </div>
    </Columns>
  </HeaderWrapper>
)

const Introduction = styled.div`
padding: 1em;
`

interface SectionProps {
  title: string;
  children: React.ReactNode;
  icon?: FontAwesomeIconProp;
  padded?: boolean;
  style?: React.CSSProperties
}

const SectionTitle = styled.h3`
margin: 0;
color: white;{
}
background-color: #8f858c;
padding: 0.9em;
`

const Section = ({ title, children, icon, padded, ...props }: SectionProps) => {
  const innerStyle: React.CSSProperties = {}
  if (padded) {
    innerStyle.padding = '1em';
  }
  return (
    <div {...props}>
      <SectionTitle>
        {icon ? <FontAwesomeIcon icon={icon} style={{ marginRight: '0.5em' }} /> : null}
        {title}
      </SectionTitle>
      <div style={innerStyle}>
        {children}
      </div>
    </div>
  );
}

type JobProps = Pick<ItemProps, 'title' | 'children' | 'period'>;

function Job(props: JobProps) {
  return <Item {...props} />
}

type DegreeProps = Pick<ItemProps, 'title' | 'children' | 'period' | 'location'>;

function Degree(props: DegreeProps) {
  return <Item {...props} />;
}

const List = styled.ul`
padding: 0;
`

const ListItem = styled.li`
margin: 0.3em 0 0.3em 2em;
`

const ProjectWrapper = styled.div`
padding: 0.5em;
`

const Subtitle = styled.h4`
margin: 0;
font-size: 1.2em;
font-weight: bold;
`

const Footnote = styled.div`
position: absolute;
transform: translateY(-50%);
bottom: 0;
padding: 0 0.5em;
font-size: 0.85em;
`

const DateOrPeriod = styled.div`
font-style: italic;
display: block;
color: ${dateColor};
`

type ProjectProps = Pick<ItemProps, 'title' | 'children' | 'url'>;

function Project(props: ProjectProps) {
  return <Item {...props} />
}

const Wrapper = styled.div`
position: relative;
width: 21cm;
height: 29.7cm;
margin: auto;
background-color: white;
overflow: hidden;
background-image: url('/mountain-landscape.jpg');
background-position: bottom;
`

const globalStyles = css`
@page {
  size: A4;
  margin: 0;
}

body {
  background-color: #DDD;
  font-size: 13px;
}
`

export const Resume = () => (
  <Wrapper>
    <Global styles={globalStyles} />
    <Header
        fullName="Sam Vervaeck"
        title="Software developer"
        email="samvv@pm.me"
        address="Mechelen, Belgium"
        cellPhone="+32474054981"
        />
    <Columns style={{ backgroundColor: sectionBackgroundColor }}>
      <FirstColumn>
        <Introduction>
          I'm a highly motivated computer programmer with a big interest in how
          programming languages contribute to the production of correct and
          efficient software. I have expertise in many different programming
          languages and environments, including the web and functional
          programming languages.
        </Introduction>
        <Section icon={faBriefcase} title="Experience">
          <Job title="Founder" period="January 2024 - September 2024">
            Founder of Accelera, a freelancing firm specialising in
            software development.
          </Job>
          <Job title="Open-source software developer" period="2015-2024">
            Creation and maintenance of many different projects that are mainly
            hosted at GitHub. Primary focus on a new programming language for
            efficient app development called Bolt.
          </Job>
          <Job title="Junior software developer" period="August-September 2018">
            Development of a complete web platform in a total team of three at
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
        <Section icon={faGraduationCap} title="Education">
          <Degree title="ASO Latin-Mathematics" period="September 2005 - June 2014" location="KA Pitzemburg">
          </Degree>
          <Degree title="Bachelor of Science in Computer Science" period="September 2011 - December 2014" location="Vrije Universiteit Brussel">
            Degree <b>not</b> obtained due to illness.
          </Degree>
        </Section>
        <Section icon={faComments} title="Buzzwords" padded>
          Rust ● TypeScript ● Python ● C/C++ ● Haskell ● Erlang/Elixir
          ● Asynchronous Programming ● Functional Programming ● Protocols/Standards ● Compiler Design ● GameDev
          ● React WebDev ● NextJS ● FastAPI ● NodeJS ● MongoDB ● PostgreSQL ● Linux ● Neovim ● Open Source
        </Section>
      </FirstColumn>
      <SecondColumn>
        <Section icon={faWrench} title="Projects">
          <Project title="The Bolt Programming Language" url="https://github.com/boltlang/Bolt">
            A new programming language in the making which aims to speed up the
            process of creating and maintaining performant web apps.
          </Project>
          <Project title="Mage" url="https://github.com/samvv/mage">
            An experimental AST/CST/lexer/parser generator that uses minimal information 
            to generate the bulk of a compiler frontend.
          </Project>
          <Project title="SwiftSync">
            Commercial application to carefully synchronize many files across disks and the cloud.
          </Project>
          <Project title="Standard Collections Library for TypeScript" url="https://npmjs.com/scl">
            A collection of implementations of various algorithms and data
            structures that are taught during the first year of a computer
            science curriculum.
          </Project>
          <Project title="Templaty" url="https://github.com/samvv/Templaty">
            A code generator written in Python that reads a specification file
            and interprets it according to a specific set of rules.
          </Project>
          <Project title="Zen C++ Libraries" url="https://github.com/samvv/zen">
            An attempt to fill in some blanks in the C++ standard library, taking
            ideas from Haskell and Rust and integrating them into version 17 of
            the C++ language.
          </Project>
        </Section>
        <Section icon={faStamp} title="Certificates" padded>
          <Subtitle>Enterpreneurial YouthStart Training</Subtitle>
          Empowering young adults to pursue their dreams.
          <DateOrPeriod>Obtained May 28, 2021</DateOrPeriod>
        </Section>
        <Section icon={faComments} title="Trivia">
          <List>
            <ListItem>
              I don't own a driver's license. I don't feel comfortable driving
              and I try to keep a low ecological footprint. I'm used to taking the
              public transport.
            </ListItem>
            <ListItem>
              I create my own music using a digital piano connected to a DAW on
              my computer. I love sountrack music, and using some VSTi plugins I try to
              create movie-like atmospheres.
            </ListItem>
            <ListItem>
              I love martial arts and have followed several disciplines over the
              years, including Judo and Aikido.
            </ListItem>
            <ListItem>
              My favorite editor is Neovim, a fork of Vim. For debugging I tend
              to use Visual Studio Code.
            </ListItem>
          </List>
        </Section>
        <Footnote>
          This resume was written with React and TypeScript. 
          The sources are freely available online at <Link to="https://github.com/samvv/resume" />.
        </Footnote>
      </SecondColumn>
    </Columns>
  </Wrapper>
);

export default Resume;

