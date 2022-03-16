import React, { useEffect, useState } from 'react';
var moment = require('moment');

export default () => {
    const [person, setPerson] = useState(null);

    useEffect(async () => {
        const response =await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const [item] =data.results;
        setPerson(item);
    }, []);

    let x = (moment(person && person.dob.date).format('DD MMM YYYY'));
    let url = person && person.picture.thumbnail;

    return (
        <div>
            <img src={url}/> {person && <h1>{person.name.title + " " + person.name.first + " " + person.name.last}</h1>}
            Update your photo and personal details <br></br>
            Username : {person && <div id='username'>{person.login.username}</div>}
            Gender : {person && <div id='gender'>{person.gender}</div>}
            Date of Birth : {x} <br></br>
            Phone Number : {person && <div id='phone'>{person.phone}</div>}
            Address : {person && <div id='address'>{person.location.city} , {person.location.state} , {person.location.country}</div>}
            Job title : <div id='jobtitle'>Product Designer</div>
            Alternative Contact Email : {person && <div id='email'>{person.email}</div>}
        </div>
    );
};