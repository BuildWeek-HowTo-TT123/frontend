import React, { useState } from "react";

import { Link, useParams } from "react-router-dom";

export function HowToPage(){
  //This data should be replaced with a GET request that gets the data of this how-to based on its ID
  const [data, setData] = useState([
    {title: "How to brush your teeth", author: "Anonymous", content: "So basically you get a toothbrush", id:0},
    {title: "10 crazy cooking tips!", author: "Epic Youtube Vidz", content: "Click the link to view the video!", id:1},
    {title: "Other uses for toothpicks", author: "testuser", content: "They aren't just for cleaning your teeth.", id:2},
  ])
  const params = useParams();
  return(
    <div>
      <p>Title: {data[params.id].title}</p>
      <p>Author: {data[params.id].author}</p>
      <p>Content: {data[params.id].content}</p> 
    </div>
  )
}

