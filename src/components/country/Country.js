import React from 'react';

const Country = (props) => {
    const {name, population, flag} = props.country;
    const flagStyle = {height:'55px' };
    const divStyle = {marginTop:'10px', border:'1px solid gray'};
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={divStyle}>
            <img style={flagStyle} src={flag} alt=""/>
            <h4>This Country name is - {name}</h4>
            <p>Here is {population} people are living now! </p>
            <button onClick={() =>handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;