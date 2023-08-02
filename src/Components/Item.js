export default function Item(props) {
    const { data } = props;
    return (
      <div>
        <h3>{data.name}</h3>
        <h4>Price: {data.price}</h4>
        <h4>Condition: {data.condition}</h4>
        <h4>Location: {data.location}</h4>
      </div>
    )
  }