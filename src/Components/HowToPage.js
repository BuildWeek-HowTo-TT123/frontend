import React, { useState } from "react";

import { Link, useParams } from "react-router-dom";

export function HowToPage(){
  const params = useParams();
  return(
    <div>
      How To ID: {params.id}
    </div>
  )
}