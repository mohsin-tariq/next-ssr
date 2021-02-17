import CardItem from "../../atoms/CardItem";

interface Props {
  cardList: any[]
}

const ListItem = ({ cardList }: Props): JSX.Element => (
  <div className="d-flex">
    <div className="card-list">
      {
        cardList.map(({flight_number,
          mission_name,
          mission_id,
          launch_year,
          launch_success,
          links
        }) => <CardItem key={flight_number} flightNumber={flight_number}
              missionName={mission_name}
              missionIds={mission_id}
              launchYear={launch_year}
              successfulLaunch={launch_success}
              imageUrl={links.mission_patch_small}
              successfullLanding={false}
              />)
      }
    </div>
  </div>
);

export default ListItem;


