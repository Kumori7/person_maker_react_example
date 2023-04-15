import "./PersonFilter.css";

const PersonFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    const value = event.target.value;

    console.log("the year:" + value);

    props.onChangeFilter(value);
  };

  return (
    <div className="person-filter">
      <div className="person-filter__control">
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="1990">1990</option>
          <option value="1991">1991</option>
          <option value="1992">1992</option>
          <option value="1993">1993</option>
          <option value="1994">1994</option>
          <option value="1995">1995</option>
          <option value="1996">1996</option>
          <option value="1997">1997</option>
          <option value="1998">1998</option>
          <option value="1999">1999</option>
          <option value="2000">2000</option>
          <option value="2001">2001</option>
          <option value="2002">2002</option>
          <option value="2003">2003</option>
          <option value="2004">2004</option>
          <option value="2005">2005</option>
        </select>
      </div>
    </div>
  );
};

export default PersonFilter;
