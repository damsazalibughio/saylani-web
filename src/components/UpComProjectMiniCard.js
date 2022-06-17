import React from 'react'

function UpComProjectMiniCard(props) {
    let title = props.title;
    let imgLink = props.imgLink;
    let alt = props.alt
    let animateCard = props.animateCard
    return (
      
        <div class="col-lg-5 col-md-5 my-3 me-3 saylani-mini-card" data-aos={animateCard}>                 
            <img src={imgLink} alt={alt} />
            <span className='mx-4 text-primary fw-bold'>{title}</span>                             
        </div>
     
    )
}

export default UpComProjectMiniCard
