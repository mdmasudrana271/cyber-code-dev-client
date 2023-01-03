import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Member from "./Member";

const Team = () => {
  const [team, setTeam] = useState([])


  useEffect(()=>{
    fetch('https://cybercodedev12.vercel.app/team')
    .then(res=> res.json())
    .then(data=> {
      setTeam(data)
    })
  },[])
  console.log(team ,'hello')

  return (
    <div className="mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {
          team.map(man=> <Member key={man._id} man={man}></Member>)
        }
    </div>
  );
};

export default Team;
