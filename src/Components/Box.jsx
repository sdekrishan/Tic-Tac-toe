import React from 'react'

const Box = ({value,onclick,cn}) => {
    
  return (
    <div className= {cn ? `box OStyle` : `box XStyle`}
    onClick={onclick}>
        <h2>{value}</h2>
    </div>
  )
}

export default Box