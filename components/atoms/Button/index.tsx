interface ButtonProps {
  text: string
}

const Button = ({ text }: ButtonProps): JSX.Element => <button className="button" type='button'> {text}</button>;

export default Button;