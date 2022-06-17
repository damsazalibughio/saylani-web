import React from 'react'

function SaylaniCard(props) {
    let title =props.title;
    let animateCard = props.animateCard;
    let imageLink = props.imgLink;
    let alt = props.alt;
    
    return (
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4" data-aos={animateCard}>
            <div class="card card-margin">
                <div class="card-header no-border">                   
                </div>
                <div class="card-body pt-0 text-center">               
                    <img src={imageLink} alt={alt} className='our-objectives-img'/>
                    <h5 className="mt-3 text-primary">{title}</h5>              
                </div>
            </div>
        </div>
                  
    )
}

export default SaylaniCard
