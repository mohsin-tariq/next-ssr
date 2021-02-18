import { useRouter } from 'next/router'
import useSWR from 'swr'
import Head from 'next/head'
import HomePageTemplate from '../components/templates/HomePageTemplate';
import Footer from '../components/templates/Footer';

export const FilteredResult = (): JSX.Element => {
  const router = useRouter()
  const { land_success, launch_success, launch_year } = router.query 
  let url =  `https://api.spacexdata.com/v3/launches?limit=100`
  let queryParam = '';
  if (launch_success) {
    queryParam = queryParam.concat('&launch_success=', launch_success.toString());
  }
  if (land_success) {
    queryParam = queryParam.concat('&land_success=', land_success.toString());
  }
  if (launch_year) {
    queryParam = queryParam.concat('&launch_year=', launch_year.toString());
  }
  url = url.concat(queryParam)
  const fetcher = url => fetch(url).then(res => res.json());
  const {data, error} = useSWR(url, fetcher)
  if (error) return <div>Request failed</div>
  if (!data) return <div>Fetching data, please wait...</div>
  
  return (
    <div>
      <Head>
        <title>SpaceX</title>
      </Head>
      <main>
        <HomePageTemplate data={data} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default FilteredResult