import LeftPanel from "../LeftPanel";
import CardList from '../CardList';

interface Props {
  data: any,
}

const HomePageTemplate = ({ data }: Props): JSX.Element => (
  <>
    <h1 className="title">
      SpaceX Launch Program
    </h1>
    <div className="container">
      <LeftPanel panelData={[
        {
          heading: 'Launch Year',
          buttonList: ['2005', '2006', '2007', '2008', '2009', '2010', '2011'],
          queryParam: 'launch_year'
        },
        {
          heading: 'Successful Launch',
          buttonList: ['True', 'false'],
          queryParam: 'launch_success'
        },
        {
          heading: 'Successful Landing',
          buttonList: ['True', 'false'],
          queryParam: 'land_success'
        }
      ]} />
      <CardList cardList={data} />
    </div>
</>
)
export default HomePageTemplate;