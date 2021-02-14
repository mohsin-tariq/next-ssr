import Head from 'next/head'
import Image from 'next/image'
import { GetServerSideProps, InferGetServerSidePropsType  } from 'next'

import Counter from '../components/counter/Counter';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`https://api.spacexdata.com/v3/launches?limit=100`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}


export const Home = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => (
  <div className="container">
    <Head>
      <title>SpaceX</title>
    </Head>
    <main>
      <h1 className="title">
        SpaceX Launch Program
        {JSON.stringify(data)}
      </h1>

      <Counter/>

    </main>

    <footer>
      <span>
        Developed By:
        <a
          href="https://www.linkedin.com/in/mohsin-tariq--reactjs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mohsin Tariq
        </a>
      </span>
    </footer>
  </div>
)

export default Home