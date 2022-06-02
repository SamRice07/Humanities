import React from 'react'
import './Gatsby.scss'
import Dropdown from '../Addons/Dropdown/Dropdown'
import CharCard from '../Addons/CharCards/CharCard'

export default function Gatsby() {
  return (
    <>
        <div className='dropdown'>
            <Dropdown title='Gatsby' subtitle='Charecters and Motives'/>
        </div>
        
        
        <div className='gatsbyWrapper'>
            <div className='gatsbyCard'>

            <figure class="swing">
                <img src="https://render.fineartamerica.com/images/rendered/default/flat/blanket/images/artworkimages/medium/3/the-eyes-of-dr-tj-eckleburg-oculist-the-great-gatsby-fscott-fitzgerald-blue-04-studio-grafiikka.jpg?&targetx=-12&targety=-45&imagewidth=989&imageheight=831&modelwidth=977&modelheight=740&backgroundcolor=06090B&orientation=1&producttype=blanket-coral-60-80" width="400" />
            </figure>  

            <figure class="swang">
                <img src="https://149645218.v2.pressablecdn.com/wp-content/uploads/2020/10/Untitled-design-51-scaled.jpg" width="500" />
            </figure>  
            <CharCard />

            </div>
        </div>
  </>
  )
}
