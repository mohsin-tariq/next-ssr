import TitleDivider from '../../molecules/TitleDivider';
import ButtonList from '../../molecules/ButtonList';

export interface LeftPanelProps {
  heading: string
  buttonList: string[]
  queryParam: string
  selectedVal: string
}

const LeftPanelItem = ({ heading, buttonList, queryParam, selectedVal }: LeftPanelProps): JSX.Element => (
  <div className="left-panel-item">
    <TitleDivider text={heading} />
    <ButtonList itemList={buttonList} queryParam={queryParam} selectedVal={selectedVal} />
  </div>
)
export default LeftPanelItem;