interface H3Props {
  children: React.ReactNode
}

const H3 = ({ children }: H3Props): JSX.Element => <h3 className="heading3"> {children}</h3>;

export default H3;