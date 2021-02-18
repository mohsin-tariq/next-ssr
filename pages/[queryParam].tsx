import { useRouter } from 'next/router'
import useSWR from 'swr'
import Head from 'next/head'
import HomePageTemplate from '../components/templates/HomePageTemplate';
import Footer from '../components/templates/Footer';
import getQueryParam from '../features/filter/util';

export const FilteredResult = (): JSX.Element => {
  const router = useRouter()
  const { land_success, launch_success, launch_year } = router.query 
  let url =  `https://api.spacexdata.com/v3/launches?limit=100`
  
  url = url.concat(getQueryParam(land_success, launch_success, launch_year))
  const fetcher = url => fetch(url).then(res => res.json());
  const {data, error} = useSWR(url, fetcher)  
  return (
    <div>
      <Head>
        <title>SpaceX</title>
      </Head>
      <main>
        <HomePageTemplate data={data}/>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default FilteredResult