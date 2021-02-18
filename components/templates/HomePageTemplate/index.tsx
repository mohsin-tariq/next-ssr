import LeftPanel from "../LeftPanel";
import CardList from '../CardList';
import { actionTypes, selectors } from '../../../features/filter'
import { useSelector } from 'react-redux'

interface Props {
  data: any,
}

const HomePageTemplate = ({ data }: Props): JSX.Element => {
  const launchYear = useSelector(selectors.getLaunchYear)
  const successfulLaunch = useSelector(selectors.getSuccessfulLaunch)
  const successLand = useSelector(selectors.getSuccessfulLand)
  return (
    <>
      <h1 className="title">
        SpaceX Launch Program
      </h1>
      <div className="container">
        <LeftPanel panelData={[
          {
            heading: 'Launch Year',
            buttonList: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
            queryParam: actionTypes.LAUNCH_YEAR,
            selectedVal: launchYear
          },
          {
            heading: 'Successful Launch',
            buttonList: ['true', 'false'],
            queryParam: actionTypes.SUCCESSFUL_LAUNCH,
            selectedVal: successfulLaunch
          },
          {
            heading: 'Successful Landing',
            buttonList: ['true', 'false'],
            queryParam: actionTypes.SUCCESSFUL_LAND,
            selectedVal: successLand
          }
        ]} />
        <CardList cardList={data} />
      </div>
  </>
  )
}
export default HomePageTemplate;