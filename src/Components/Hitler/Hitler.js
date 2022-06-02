import React from 'react'
import Dropdown from '../Addons/Dropdown/Dropdown';

import './Hitler.scss'
import Flag from '../Addons/Flags/Flag';
import Timeline from '../Addons/Timeline/Timeline';
import $ from 'jquery'
import { useEffect } from 'react';

export default function Hitler() {

  useEffect(() => {
    $('.hitlerImg').addClass('trigger');

  }, [])

  return (
    <>
        <div className='dropdown'>
          <Dropdown title='Hitler' subtitle='Rise and Goals'/>
        </div>

          
        <div className='hitlerWrapper'>
          <div className='hitlerCard'>
            
            <div className='hitlerHolder'>
              <div className='hitlerImg'>
                <img src='https://images.immediate.co.uk/production/volatile/sites/7/2021/02/GettyImages-119505258-20a15e9.jpg?quality=90&resize=980,654' className='hittyImg'></img>
              </div>
            </div>



            <div className='flag1'>
              <Flag leftAmount='-800px'/>
            </div>
            
            <div className='flag2'>
              <Flag leftAmount='800px'/>
            </div>

            <div className='timeywimey'>
              <Timeline />
            </div>
          </div>
        </div>
    </>
  );
}
