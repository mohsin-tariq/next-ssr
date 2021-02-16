import TitleDivider from '../../molecules/TitleDivider';
import ButtonList from '../../molecules/ButtonList';

export interface LeftPanelProps {
  heading: string,
  buttonList: string[]
}

const LeftPanelItem = ({ heading, buttonList }: LeftPanelProps): JSX.Element => (
  <div className="left-panel-item">
    <TitleDivider text={heading} />
    <ButtonList itemList={buttonList} />
  </div>
)
export default LeftPanelItem;