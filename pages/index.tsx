import Head from 'next/head'
import { GetServerSideProps, InferGetServerSidePropsType  } from 'next'

import HomePageTemplate from '../components/templates/HomePageTemplate';
import Footer from '../components/templates/Footer';
import Fallback from '../components/templates/Fallback';

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`https://api.spacexdata.com/v3/launches?limit=100`)
  const data = await res.json()
  if (!data) {
    return {
      props: {
        notFound: true
      }
    }
  }
  // Pass data to the page via props
  return { props: { data } }
}


const Home = ({ data, notFound }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => (
  <div>
    <Head>
      <title>SpaceX</title>
    </Head>
    <main>
      {
        data && <HomePageTemplate data={data} />
      }
      {
        notFound && <Fallback isLoading={false} />
      }
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
)

export default Home