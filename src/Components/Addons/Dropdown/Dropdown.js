import React, { useState } from 'react'
import * as AIcons from 'react-icons/ai'
import './Dropdown.scss'

export default function Dropdown(props) {

  const [clicked, setClicked] = useState(false)


  function toggleActive(){
    setClicked(!clicked)
  }



  return (
  <>
  
  <div  className={clicked ? "card card__active" : 'card'} onClick={toggleActive}>
    <div  className="card__content">
      <div  className="card__imageBox">
        <img  className="card__image" src="https://www.clio.com/wp-content/uploads/2020/12/Graphic_Blog_Marketing_Clio_2020_Approved-for-Distribution_Lawyer-Goals-750x376.jpg" alt="woman" />
      </div>
      <h2  className="card__title">{props.title}
        <br />
        <span  className="card__subtitle">{props.subtitle}</span>
      </h2>
    </div>
    <ul  className="card__navigation">
      <li  className="card__list">
        <a  className="card__link" href="/">
          Theme Statement
        </a>
      </li>
      <li  className="card__list">
        <a  className="card__link" href="/gatsby">
        Gatsby
        </a>
      </li>
      <li  className="card__list">
        <a  className="card__link" href="/hitler">
          Hitler
        </a>
      </li>
      <li  className="card__list">
        <a  className="card__link" href="/connection">
          Connection
        </a>
      </li>
    </ul>
    <div  className="card__toggle" >
      <div className='arrow'>
        <AIcons.AiOutlineArrowDown /> 
      </div>
    </div>


  </div>
  </>
  
  )
}


