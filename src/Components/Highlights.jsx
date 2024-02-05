import React from 'react'

const Highlights = () => {
  return (
    <div className='highlights-container'>
        <p className='highlights-tagline'>✦WHY CHOOSE US✦</p>
        <h3 className='highlights-strength'>Our Strength</h3>
    
        <div className='strength-cards' >
        <div className='strength-card' id='str-food' >
            <div className='strength-icon'>
            
            </div>
            <h6 className='strength-item' >Hygienic food</h6>
            <p className='description'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
        </div>
        <div className='strength-card' id='str-environment'>
            <div className='strength-icon'>
                
            </div>
            <h6 className='strength-item' >Fresh Environment</h6>
            <p className='description'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
        </div>
        <div className='strength-card' id='str-chefs'>
            <div className='strength-icon'>
                
            </div>
            <h6 className='strength-item' >Skilled chefs</h6>
            <p className='description'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
        </div>
        <div className='strength-card' id='str-events'>
            <div className='strength-icon'>
                
            </div>
            <h6 className='strength-item' >Event & Party</h6>
            <p className='description'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
        </div>
        
        </div>
    </div>
  )
}

export default Highlights