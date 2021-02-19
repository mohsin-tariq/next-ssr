import { useRouter } from 'next/router'
import useSWR from 'swr'
import Head from 'next/head'
import Footer from '../components/templates/Footer'
import getQueryParam from '../features/filter/util'
import LeftPanel from "../components/templates/LeftPanel"
import CardList from '../components/templates/CardList'
import { actionTypes, selectors } from '../features/filter'
import { useSelector } from 'react-redux'
import Fallback from '../components/templates/Fallback';
import Header from '../components/templates/Header';

export const FilteredResult = (): JSX.Element => {
  const router = useRouter()
  const { land_success, launch_success, launch_year } = router.query 
  let url =  `https://api.spacexdata.com/v3/launches?limit=100`
  
  url = url.concat(getQueryParam(land_success, launch_success, launch_year))
  const fetcher = url => fetch(url).then(res => res.json());
  const {data, error} = useSWR(url, fetcher)  
  const launchYear = useSelector(selectors.getLaunchYear)
  const successfulLaunch = useSelector(selectors.getSuccessfulLaunch)
  const successLand = useSelector(selectors.getSuccessfulLand)
  return (
    <div>
      <Head>
        <title>SpaceX</title>
      </Head>
      <main>
        <Header />
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
          {
            data ? <CardList cardList={data} /> : (error ? <Fallback isLoading={false} /> :  <Fallback isLoading={true}/>)
          }
          </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default FilteredResult