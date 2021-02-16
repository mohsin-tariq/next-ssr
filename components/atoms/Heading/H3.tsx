interface H3Props {
  text: string
}

const H3 = ({ text }: H3Props): JSX.Element => <h3 className="heading3"> {text}</h3>;

export default H3;