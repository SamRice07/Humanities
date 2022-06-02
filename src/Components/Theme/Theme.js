import './Theme.scss';
import Dropdown from '../Addons/Dropdown/Dropdown';

function Theme() {
  



  return (
    <>
        <div className='dropdown'>
          <Dropdown title='Theme Statement' subtitle='Goals'/>
        </div>

          
        <div className='themeWrapper'>
          <div className='themeCard'>
            <img src='https://i.imgur.com/47CO6sQ.jpg' className='gitler'></img>
            <h1 class="home-title">
              <span>The human need for improvement has and will always cause one to strive for greater and greater achievements.</span>
            </h1>
          </div>
        </div>
    </>
  );
}

export default Theme;
  