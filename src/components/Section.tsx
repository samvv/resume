
import styled from "@emotion/styled"
import { IconProp as FontAwesomeIconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {sectionBackgroundColor} from "../theme"

export interface SectionProps {
  title: string;
  children: React.ReactNode;
  icon?: FontAwesomeIconProp
  padded?: boolean;
  style?: React.CSSProperties
}

const SectionTitle = styled.h3`
margin: 0;
color: white;
background-color: #8f858c;
padding: 1em;
`


export const Section = ({ title, children, icon, padded, ...props }: SectionProps) => {
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

export default Section
