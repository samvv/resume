
import styled from "@emotion/styled"

export interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const SectionTitle = styled.h3`
margin: 0;
color: white;
background-color: #232020;
padding: 1em;
`

export const Section = ({ title, children }: SectionProps) => (
  <div>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </div>
)

export default Section