interface ParagraphProps {
  className?: string,
  children: React.ReactNode
}


const Paragraph = (props : ParagraphProps): JSX.Element => <p className={props.className}> {props.children}</p>;

Paragraph.defaultProps = {
  className: ''
}
export default Paragraph;