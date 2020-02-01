import React from 'react'

const ProgressBar = props => {
    return (
        <>
            <div className="progressbar" style={{ width: `${props.percentRange}%` }} /> 
        </>
    )
}

export default ProgressBar;
