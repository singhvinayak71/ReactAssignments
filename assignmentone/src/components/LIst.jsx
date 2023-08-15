import React from 'react'

const LIst = (props) => {

    const listItems = props.items.map((item) =>
    <li key={item}>{item}</li>
  );
  
  return <ul>{listItems}</ul>;

}

export default LIst