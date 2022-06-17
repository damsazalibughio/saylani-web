import React from 'react'

function MonthlyWorkCard(props) {
    let title = props.title;
    let imgLink= props.imgLink;
    let animateCard = props.animateCard
    let monthlyData = props.monthlyData
    return (
       
           <div className="my-3 col-xs-12 col-sm-6 col-md-4 col-lg-3">
           <div className='m-5 text-center' data-aos={animateCard}>
              <img src={imgLink} alt="food" className="montly-work-img" />
              <h3 className='fw-bold text-white'>{monthlyData}</h3>
              <p className='text-white'>{title}
              <div className='text-success fw-bold'>(MONTHLY)</div>
              </p>
            </div>
           </div>
           
      
    )
}

export default MonthlyWorkCard
