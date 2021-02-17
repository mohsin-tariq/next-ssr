interface ButtonProps {
  className?: string,
  children: React.ReactNode
}

const Button = ({ className, children }: ButtonProps): JSX.Element => <button className={className} type='button'> {children}</button>;
Button.defaultProps = {
  className: 'button'
}
export default Button;