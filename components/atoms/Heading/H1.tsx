interface H1Props {
  children: React.ReactNode,
  className?: string
}

const H1 = ({ children, className }: H1Props): JSX.Element => <h1 className={className}> {children}</h1>;
H1.defaultProps = {
  className: 'heading1'
}
export default H1;