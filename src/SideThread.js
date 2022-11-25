import React from 'react'
import Image from './Image/pfp.png'
import Image1 from './Image/Image1.jpg'
import Image2 from './Image/Image2.jpg'
import close from './Image/close.svg'

export default function SideThread({onClose}) {
  return (
    <div className='SideThread'>
        <div className='close-btn' onClick={onClose}>
            <img src={close} alt='two lines laying diagonally on one another to represent the letter X'/>
        </div>
        <div className='message' style={{borderBottom: '1px solid #646363'}}>
            <div className='details'>
            <div>
                <img src={Image} alt='profile' className='user-image'/>
            </div>
            <h2>HOB</h2>
            </div>
            <p>Hey guys</p>
            <p>If you're a designer, please comment under this thread</p>
        </div>
        <div className='message'>
            <div className='details'>
            <div>
                <img src={Image1} alt='profile' className='user-image'/>
            </div>
            <h2>AngryDev</h2>
            </div>
            <p>Does this include Zurichat design?</p>
        </div>
        <div className='message'>
            <div className='details'>
            <div>
                <img src={Image} alt='profile' className='user-image'/>
            </div>
            <h2>HOB</h2>
            </div>
            <p>No</p>
        </div>
        <div className='message'>
            <div className='details'>
            <div>
                <img src={Image2} alt='profile' className='user-image'/>
            </div>
            <h2>AngrierDev</h2>
            </div>
            <p>E choke!</p>
        </div>
    </div>
  )
}
