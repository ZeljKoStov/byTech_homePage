import React from 'react'
import './homepage.css'

import logo from '../../assets/logopep1 1.svg'
import videofill from '../../assets/video-fill-1.svg'
import ellipse2 from '../../assets/ellipse-2.svg'
import ellipse3 from '../../assets/ellipse-3.svg'
import div1 from '../../assets/group-8-div-1.svg'
import div2 from '../../assets/group-7-div-2.svg'
import circle from '../../assets/circle.svg'
import favorite from '../../assets/favorite.svg'
import videofile from '../../assets/video-file.svg'
import timeprogress from '../../assets/time-progress.svg'
import ellipse4 from '../../assets/ellipse-4.svg'
import man from '../../assets/man.svg'
import menu from '../../assets/menu.svg'

const HomePage = () => {
  return (
    <div className='HomePage_not_loged_in'>
      <div className='section-1'>
        <div className='navbar'>
          <div className='left'>
            <div className='logo'>
              <img src={logo} alt=''></img>
            </div>
            <div className='left-text'>
             <p>PATIENT EDUCATION </p>
             <p>PLATFORM</p>
            </div>
          </div>
          <div className='right'>
            <p className='right-p'>Home</p>
            <p className='right-p'>Lessons</p>
            <p className='right-p'>About Us</p>
            <p className='logIn'>Login</p>
            <div className='signUp'>
              <p>Sign Up</p>
            </div>
          </div>
          <div className='threline'>
            <img src={menu} alt=''></img>
          </div>
        </div>
        <div className='second'>
          <div className='second-left'>
            <div className='second-left-up'>
              <p className='second-left-up-first'>Unlock the secrets of <br/>well-being through <br/>education!</p>
              <p className='second-left-up-second'>With our lessons and advice, learn to cope with chronic diseases.</p>
            </div>
            <div className='second-left-bottom'>
              <div className='second-left-bottom-left'>
                <p className='second-left-bottom-left'>Start Learning &gt;</p>
              </div>
              <div className='second-left-bottom-right'>
                <div className='second-left-bottom-right-img'>
                  <img src={videofill} alt=''></img>
                </div>
                <p>See how we work</p>
              </div>
            </div>
          </div>
          <div className='second-right'>
            <div className='second-right-img'>
              <img src={ellipse2} alt='' className='second-right-img1'></img>
              <img src={ellipse3} alt='' className='second-right-img2'></img>
              <div className='second-right-grid'>
                <div className='second-right-grid-1'>
                  <img src={div1} alt=''></img>
                </div>
                <div className='second-right-grid-2'>
                  <img src={div2} alt=''></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section-2'>
        <div className='sec2-up'>
          <div className='sec2-up-block'>
            <div className='sec2-up-block-image'>
                <img src={circle} alt='' className='sec-up-block-image11'></img>
                <img src={videofile} alt="" className='sec-up-block-image2'/>
            </div>
            <p className='sec2-up-block-p1'>Video education</p>
            <p className='sec2-up-block-p2'>Every day you get up-to-date video lessons to improve your health</p>
          </div>
          <div className='sec2-up-block'>
            <div className='sec2-up-block-image'>
              <img src={circle} alt='' className='sec-up-block-image11'></img>
              <img src={timeprogress} alt="" className='sec-up-block-image2'/>
            </div>
            <p className='sec2-up-block-p1'>Tracking progress</p>
            <p className='sec2-up-block-p2'>Every day you get up-to-date video lessons to improve your health</p>
          </div>
          <div className='sec2-up-block'>
            <div className='sec2-up-block-image'>
              <img src={circle} alt='' className='sec-up-block-image11'></img>
              <img src={favorite} alt="" className='sec-up-block-image2'/>
            </div>
            <p className='sec2-up-block-p1'>Improve health</p>
            <p className='sec2-up-block-p2'>Every day you get up-to-date video lessons to improve your health</p>
          </div>
        </div>
        <div className='sec2-bottom'>
          <div className='sec2-bottom-left'>
            <img src={ellipse4} alt=''></img>
            <img src={man} alt="" className='man-image'/>
          </div>
          <div className='sec2-bottom-right'>
            <p className='sec2-bottom-right-p1'>Our platform </p>
            <p className='sec2-bottom-right-p2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also </p>
            <div className='sec2-bottom-right-button'>
              <p>Learn more &gt;</p>
            </div>
          </div>
        </div>
      </div>
      <div className='section-3'>

      </div>
      <div className='footer'>

      </div>
    </div>
  )
}

export default HomePage