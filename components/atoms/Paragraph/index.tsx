interface ParagraphProps {
  text: string,
  className?: string
}

const Paragraph = ({ text, className }: ParagraphProps): JSX.Element => <p className={className}> {text}</p>;

Paragraph.defaultProps = {
  className: ''
}
export default Paragraph;