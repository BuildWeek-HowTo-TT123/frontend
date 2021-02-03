import React, { useState } from "react";
<<<<<<< HEAD
import HomeToPage from '../HowToComponent/HowToPage';

export function HowTo(props){
  return(
    <div>
    <HowToPage />
    </div>
  )
=======
import { UserHome } from "UserHome";

export function HowTo(props){
  return <div>{props.data.title}</div>;
>>>>>>> 18766d865c4cbdd9f4c9291a1cae5787c3e29e3e
}