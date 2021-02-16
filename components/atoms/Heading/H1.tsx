interface H1Props {
  text: string
}

const H1 = ({ text }: H1Props): JSX.Element => <h1> {text}</h1>;

export default H1;