import React, { useState } from "react";

import { Link } from "react-router-dom";

import {HowTo} from './HowTo'

export function UserHome(){
  //This data should be fetched from the server using an axios get request in a useEffect hook that runs on first render
  const [howtoData, setHowToData] = useState([
    {title: "How to brush your teeth", author: "Anonymous", content: "So basically you get a toothbrush", id:0},
    {title: "10 crazy cooking tips!", author: "Epic Youtube Vidz", content: "Click the link to view the video!", id:1},
    {title: "Other uses for toothpicks", author: "testuser", content: "They aren't just for cleaning your teeth.", id:2},
  ])
  //Will probably need a page system to account for multiple pages of how-tos, could be done server side (ideally) or I could come up with a local solution
  return(
    <div>
      User Home
      <Link to="/create">Create How-To</Link>
      {
        howtoData.map(howto => (
          <Link key={howto.id} to={`/howto/${howto.id}`}>
            <HowTo data={howto} />
          </Link>
        ))
      }
    </div>
  )
}

