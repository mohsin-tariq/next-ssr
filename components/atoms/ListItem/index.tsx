interface Props {
  listItem: string[]
}

const ListItem = ({ listItem }: Props): JSX.Element => (
  <ul>
  {
    listItem.map((item)=> <li key={item}>{item}</li>)
  }
  </ul>
);

export default ListItem;