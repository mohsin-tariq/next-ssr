import Button from '../../atoms/Button';

interface Props {
  itemList: string[]
}

const ButtonList = ({ itemList }: Props): JSX.Element => (
  <div className="button-container">
    {
      itemList.map((item) => <Button key={item} className="button">{item}</Button>)
    }
  </div>
)
export default ButtonList;