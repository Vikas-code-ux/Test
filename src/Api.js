import React, { useEffect, useState } from 'react';
import './index.css';
var moment = require('moment');


export default () => {
    const [person, setPerson] = useState(null);

    useEffect(async () => {
        const response =await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const [item] =data.results;
        setPerson(item);
    }, []);
        
    let url = person && person.picture.thumbnail;

    return (
        <div id='profile'>
            <div id='namedivision'>
            <img src={url} width="100" height="100"/> 
            {person && <h1>{person.name.title + " " + person.name.first + " " + person.name.last}</h1>}
            Update your photo and personal details
            </div>
            <div id='username'><b>Username</b> {person && <div id='name'>{person.login.username}</div>} </div>
            <div id='gender'><b>Gender</b> {person && <div id='genderdiv'>{person.gender}</div>} </div>
            <div id='dob'><b>Date of Birth</b> <div id='dobdiv'>{moment(person && person.dob.date).format('DD MMM YYYY')}</div></div>
            <div id='phone'><b>Phone Number</b> {person && <div id='phonediv'>{person.phone}</div>} </div>
            <div id='address'><b>Address</b> {person && <div id='addressdiv'>{person.location.city} , {person.location.state} , {person.location.country}</div>} </div>
            <div  id='jobtitle'><b>Job title</b> <div id='jobdiv'>Product Designer</div> </div>
            <div id='email'><b>Alternative Contact Email</b> {person && <div id='emaildiv'>{person.email}</div>} </div>
        </div>
    );
};