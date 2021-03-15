
import styled from "@emotion/styled"

const JobWrapper = styled.div`
margin: 1em;
`

const JobTitle = styled.h4`
margin-bottom: 0;
`

const JobPeriod = styled.div`
text-transform: uppercase;
color: #AAA;
font-size: 0.8em;
`

const JobDescription = styled.div`
font-size: 0.8em;
`

export interface JobProps {
  title: string;
  period: string;
  children: React.ReactNode;
}

export const Job = ({ title, period, children }: JobProps) => (
  <JobWrapper>
    <JobTitle>{title}</JobTitle>
    <JobPeriod>{period}</JobPeriod>
    <JobDescription>{children}</JobDescription>
  </JobWrapper>
)

export default Job;