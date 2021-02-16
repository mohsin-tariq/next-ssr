import Head from 'next/head'
import Image from 'next/image'
import { GetServerSideProps, InferGetServerSidePropsType  } from 'next'

import CardItem from '../components/counter/CardItem';
import LeftPanel from '../components/templates/LeftPanel';

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`https://api.spacexdata.com/v3/launches?limit=100`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}


export const Home = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => (
  <div>
    <Head>
      <title>SpaceX</title>
    </Head>
    <main>
      <h1 className="title">
        SpaceX Launch Program
      </h1>
      <div className="container">
        <LeftPanel panelData={[
          {
            heading: 'Launch Year',
            buttonList: ['2005', '2006', '2007', '2008', '2009', '2010', '2011']
          },
          {
            heading: 'Successful Launch',
            buttonList: ['True', 'false']
          },
          {
            heading: 'Successful Landing',
            buttonList: ['True', 'false']
          }
        ]} />
        <div>
            <ul>
          {
            data.map(({flight_number,
              mission_name,
              mission_id,
              launch_year,
              launch_success}) => <CardItem key={flight_number} flight_number={flight_number}
                  mission_name={mission_name}
                  mission_id={mission_id}
                  launch_year={launch_year}
                  launch_success={launch_success}/>)
          }
          </ul>
        </div>
      </div>
      
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
        <Image src="/vercel.svg" alt="Vercel Logo" height={'32'} width={'64'} />
      </span>
    </footer>
  </div>
)

export default Home