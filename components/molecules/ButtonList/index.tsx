import Button from '../../atoms/Button';

export interface Props {
  itemList: string[],
  queryParam: string
}

const ButtonList = ({ itemList, queryParam }: Props): JSX.Element => (
  <div className="button-container">
    {
      itemList.map((item) => <Button key={item} text={item} queryParam={queryParam} />)
    }
  </div>
)
export default ButtonList