import TitleDivider from '../../molecules/TitleDivider';
import ButtonList from '../../molecules/ButtonList';

export interface LeftPanelProps {
  heading: string,
  buttonList: string[],
  queryParam: string
}

const LeftPanelItem = ({ heading, buttonList, queryParam }: LeftPanelProps): JSX.Element => (
  <div className="left-panel-item">
    <TitleDivider text={heading} />
    <ButtonList itemList={buttonList} queryParam={queryParam} />
  </div>
)
export default LeftPanelItem;