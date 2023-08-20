import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Finder = () => {

    const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);
   
   
   const handselSerach=(e)=>{
    setUsername(e.target.value)
   }

   const handelSubmit=async (e)=>{
    e.preventDefault();

    const profile =await  fetch(`https://api.github.com/users/${username}`);
    const profileJson =await profile.json()
    // console.log(profileJson);

    const repositories =await  fetch(profileJson.repos_url);
    const repoJson =await  repositories.json();
    // console.log(repoJson);

    if (profileJson) {
      setData(profileJson);
      setRepositories(repoJson);
    }
 console.log(data);
   }
     
    
    return (
        <div className='container'>
            <form class="d-flex" onSubmit={handelSubmit}>
        <input class="form-control me-2" onChange={handselSerach} type="search" placeholder="Search" aria-label="Search"/>
      <button>Search</button>
      </form>
           <div className='row p-1'>
            <div className='col-md-4'> 
            <div className='card shadow rounded p-1'>
            <img src={data?.avatar_url} className='img-fluid card-img-top'alt='user_avater'/>
            <h6>Name: {data?.name}</h6>
            <small>Company: {data?.company}</small>
          <small>Followers: {data?.followers}</small>
     
          <small>Public Repo: {data?.public_repos}</small>
          <small>Location: {data?.location}</small>
          <small> Protfolio: : <a href={data?.html_url}>{data?.blog}</a> </small>
          <small>Visit Profile: <a href={data?.html_url}>{data?.html_url}</a> </small>
         
            </div>
              
          
             </div>
            </div>
        </div>
    );
};

export default Finder;
{/* (data.category ? data.category.toLowerCase().includes(serach.toLowerCase()):"") */}