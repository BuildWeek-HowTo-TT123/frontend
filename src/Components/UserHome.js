import React, { useState } from "react";

import { Link } from "react-router-dom";

export function UserHome(){
  return(
    <div>
      User Home
      <Link to="/create">Create How-To</Link>
      <Link to="/howto/5">How To #5</Link>
    </div>
  )
}