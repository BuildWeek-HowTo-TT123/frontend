import React, { useState } from "react";

import { Link } from "react-router-dom";

export function MainPage(){
  return(
    <div>
      Main Page
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
    
  )
}