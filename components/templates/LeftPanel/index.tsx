import LeftPanelItem, { LeftPanelProps }  from '../../organisms/LeftPanelItem';
import H3 from '../../atoms/Heading/H3';

interface Props {
  panelData: LeftPanelProps[],
}

const LeftPanel = ({ panelData }: Props): JSX.Element => (
  <div className="left-panel">
    <H3>Filter</H3>
    {
      panelData.map(({ heading, buttonList, queryParam}) => <LeftPanelItem key={heading} heading={heading} buttonList={buttonList} queryParam={queryParam}/>)
    }
  </div>
)
export default LeftPanel;