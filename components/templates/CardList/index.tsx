import CardItem from "../../atoms/CardItem";
import Fallback from "../Fallback";

interface Props {
  cardList: any[]
}

const ListItem = ({ cardList }: Props): JSX.Element => (
  <div className="d-flex">
    <div className="card-list">
      {
        cardList && cardList.length > 0 ? cardList.map(({flight_number,
          mission_name,
          mission_id,
          launch_year,
          launch_success,
          links,
          rocket
        }) => <CardItem key={flight_number} flightNumber={flight_number}
              missionName={mission_name}
              missionIds={mission_id}
              launchYear={launch_year}
              successfulLaunch={launch_success}
              imageUrl={links.mission_patch_small}
              successfullLanding={rocket.first_stage.cores[0].land_success || 'false'}
              />) : <Fallback isLoading={false} text="No Data found!!" />
      }
    </div>
  </div>
);

export default ListItem;


