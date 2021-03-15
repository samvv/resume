
import { css } from "@emotion/react"

export const linkCss = css`
color: inherit;
text-decoration: underline;
`

export interface LinkProps {
  to: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Link = ({ to, children, ...props }: LinkProps) => (
  <a css={linkCss} {...props} href={to}>
    {children === undefined ? to : children}
  </a>
)

export default Link;
