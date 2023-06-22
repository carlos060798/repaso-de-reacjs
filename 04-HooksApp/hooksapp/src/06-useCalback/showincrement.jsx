import React from "react";

export const Show=React.memo(({ incrementUno })=>{
  console.log("me volvi a generar :(");

  return (
    <>
      <button
        className="btn btn-primary "
        onClick={() => {
          incrementUno();
        }}
      >
        Increment
      </button>
    </>
  );
    })


