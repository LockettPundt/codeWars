// You decide to create a simple list of your favourite Easter eggs in React.



const React = require('react');

const EggList = (props) => {
  const { eggs } = props;
  const list = eggs.map((item, index) => 
    { return <EasterEgg name={item} key={index}></EasterEgg> }); 
  return (
    <ul>
      {list}
    </ul>
  )
};

const EasterEgg = (props) => {
   const { name, key } = props;
   return (
     <li name={name} key={key}>{name}</li>
   )
};