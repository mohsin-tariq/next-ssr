import LeftPanelItem, { LeftPanelProps }  from '../../organisms/LeftPanelItem';
import H3 from '../../atoms/Heading/H3';

interface Props {
  panelData: LeftPanelProps[]
}

const LeftPanel = ({ panelData }: Props): JSX.Element => (
  <div className="left-panel">
    <H3 text="Filter"/>
    {
      panelData.map(({ heading, buttonList}) => <LeftPanelItem key={heading} heading={heading} buttonList={buttonList} />)
    }
  </div>
)
export default LeftPanel;