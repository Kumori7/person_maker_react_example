import "./PersonDate.css";

const PersonDate = (props) => {
  //const month = "January";
  //const day = 7;
  //const year =1999;

  const month = props.date.toLocaleString("en-US", { month: "long" });
  // need to fix this
  // const day = props.date.toLocaleString('en-US', { day: '2-digits' });
  const day = props.date.getDate();

  const year = props.date.getFullYear();

  console.log(props.date.toLocaleString("en-US", { month: "long" }));
  // console.log(props.date.toLocaleString('en-US', { day: 'number' }))

  return (
    <div className="person-date">
      <div className="person-date__month">{month}</div>
      <div className="person-date__year">{year}</div>
      <div className="person-date__day">{day}</div>
    </div>
  );
};

export default PersonDate;
