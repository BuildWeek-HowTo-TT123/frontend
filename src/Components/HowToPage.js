import React, { useState, useEffect } from "react";
import {axiosWithAuth} from './Util/axiosWithAuth';
import { Link, useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
export function HowToPage(props){
  //This data should be replaced with a GET request that gets the data of this how-to based on its ID
  const [data, setData] = useState();
  const params = useParams();
  const history = useHistory(props);
  useEffect(() => {
    axiosWithAuth().get(`/how-to/${params.id}`)
    .then(res => {
      setData(res.data)
      console.log(res);
    })
    .catch(err => console.log(err));
  }, [])
  const deleteHowTo = () => {
    console.log('delet');
    axiosWithAuth().delete(`/how-to/${params.id}`)
    .then(res => {
      console.log(res);
      history.push("/home");
    })
    .catch(err => console.log(err));
  }
  if(!data)
    return <div>LOADING!</div>
  else
    return(
      <div style={{"text-align": "center"}}>
        <h1>{data.title}</h1>
        <p>Author: {data.topic}</p>
        <p>Problem: {data.problem}</p> 
        <p>Solution: {data.solution}</p> 
        {data.user_id === JSON.parse(localStorage.getItem('user')).id &&
          <Button onClick={() => { if (window.confirm('Are you sure you wish to delete this How-To?')) deleteHowTo() } } >
            Delete How-To
          </Button>
        }
      </div>
  )
}

