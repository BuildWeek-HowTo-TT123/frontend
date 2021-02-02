import React, { useState, useEffect } from "react";
import {axiosWithAuth} from './Util/axiosWithAuth';
import { Link, useParams } from "react-router-dom";

export function HowToPage(){
  //This data should be replaced with a GET request that gets the data of this how-to based on its ID
  const [data, setData] = useState();
  const params = useParams();
  useEffect(() => {
    axiosWithAuth().get(`/how-to/${params.id}`)
    .then(res => {
      setData(res.data)
      console.log(res);
    })
    .catch(err => console.log(err));
  }, [])
  if(!data)
    return <div>LOADING!</div>
  else
    return(
      <div>
        <p>Title: {data.title}</p>
        <p>Author: {data.user_id}</p>
        <p>Problem: {data.problem}</p> 
        <p>Solution: {data.solution}</p> 
      </div>
  )
}

