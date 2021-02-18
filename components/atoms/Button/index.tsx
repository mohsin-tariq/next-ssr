import Link from 'next/link';
export interface ButtonProps {
  text: string,
  queryParam: string,
  className?: string,
}

const Button = ({ className, queryParam, text }: ButtonProps): JSX.Element => {
  const queryP = {};
  queryP[queryParam] = text;

  // <Link href={{ pathname: '/search', query: { keyword: 'this way' } }}><a>path</a></Link>

  return (
    <Link href={{ pathname: '/filter', query: queryP }}><a className={className}>{text}</a></Link>
  )
}

Button.defaultProps = {
  className: 'button'
}
export default Button;