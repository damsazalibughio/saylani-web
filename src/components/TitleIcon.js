import React from 'react'

function TitleIcon(props) {
    let titleOne =props.titleOne
    let titleTwo =props.titleTwo
    let imgLink = props.imgLink
    return (
        <div className="container mt-5 mb-3">
            <h2 className='text-center'>
            <span className='text-primary'>{titleOne}</span>
            <span className='text-success'>{titleTwo} </span>          
            </h2>
            <div className='d-flex justify-content-center'>
                <span className='text-success'>_____ </span>
                <img src={imgLink} alt="logo" />
                <span className='text-success'> _____</span>
            </div>
        </div>
    )
}

export default TitleIcon
