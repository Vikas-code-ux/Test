import React, { useEffect, useState } from 'react';

export default function App(){
  const [userData , setUserData]= useState({});
  const [userName , setUserName]= useState('');

  function setDetails(){
    console.log(userData);
    setUserName(userData?.name?.title + " " + userData?.name?.first + " " + userData?.name?.last);
  }
  async function fetchUser(){
    let response = await fetch('https://randomuser.me/api/');
    let data = await response.json();
    console.log(data);
    return data;
  }

  useEffect(() => {
    async function fetchData() {
      let tempUserData = await fetchUser();
      setUserData(tempUserData);
    }
    fetchData();
  }, []);
  useEffect(setDetails, [userData]);
  return(
    <div>
      <h1>{userName}</h1>
    </div>
  );
}