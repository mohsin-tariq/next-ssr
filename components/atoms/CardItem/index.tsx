import Para from '../Paragraph'
import List from '../ListItem'
import Image from '../ImageItem';

interface Props {
  flightNumber: string,
  missionName: string,
  imageUrl: string,
  missionIds: string[],
  launchYear: string,
  successfulLaunch: boolean,
  successfullLanding: boolean,
}

const CardItem = ({ flightNumber, missionName, imageUrl, missionIds, launchYear, successfulLaunch, successfullLanding }: Props): JSX.Element => (
  <div className="card">
    <div className="image-container">
      <Image url={imageUrl} altText={missionName} />
    </div>
    <div className="card-container">
      <Para className="title bold">{`${missionName} #${flightNumber}`}</Para> 
      <Para className="bold">Mission Ids </Para> 
      <List listItem={missionIds} /> 
      <Para><span className="bold">Launch Year:</span>{launchYear}</Para>
      <Para><span className="bold">Successful Launch:</span>{successfulLaunch.toString()}</Para>
      <Para><span className="bold">Successful landing:</span>{successfullLanding.toString()}</Para>
    </div>
  </div>
)

export default CardItem