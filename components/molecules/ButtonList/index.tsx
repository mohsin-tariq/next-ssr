import Button from '../../atoms/Button';

export interface Props {
  itemList: string[],
  queryParam: string,
  selectedVal: string
}

const ButtonList = ({ itemList, queryParam, selectedVal }: Props): JSX.Element => (
  <div className="button-container">
    {
      itemList.map((item) => <Button key={item} text={item} className={`button ${selectedVal == item ? 'active': ''}`} queryParam={queryParam} />)
    }
  </div>
)
export default ButtonList