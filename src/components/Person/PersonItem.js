import PersonDate from "./PersonDate";
import Card from "../UI/Card";
import './PersonItem.css';

const PersonItem = (props) => {
  return (
    <Card className="person-item">
      <PersonDate date={props.date}/>
      <div className="person-item__description">
        <h2>{props.name}</h2>
        <div className="person-item__age">Age:{props.age}</div>
      </div>
    </Card>
  );
};

export default PersonItem;
