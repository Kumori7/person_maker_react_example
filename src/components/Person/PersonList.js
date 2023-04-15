import PersonItem from "./PersonItem";

const PersonList = (props) => {
  return (
    <ul className="person-list">
      {props.item.map((item) => (
        <PersonItem
          key={item.id}
          name={item.name}
          age={item.age}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default PersonList;
