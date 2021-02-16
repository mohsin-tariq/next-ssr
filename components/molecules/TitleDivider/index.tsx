import Paragraph from '../../atoms/Paragraph';

interface Props {
  text: string
}

const TitleDivider = ({ text }: Props): JSX.Element => (
  <div className="title-divider">
    <Paragraph text={text} />
  </div>
)
export default TitleDivider;