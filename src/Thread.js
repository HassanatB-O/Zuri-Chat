import React from 'react'
import Image from './Image/pfp.png'
import Image1 from './Image/Image1.jpg'
import Image2 from './Image/Image2.jpg'
import SideThread from './SideThread'

export default function Thread() {
  const[showText, setShowText] = React.useState(false)
  const[showThread, setShowThread] = React.useState(false)

  const handleHover = () =>{
    setShowText(true)
  }

  const handleClick = () =>{
    setShowThread(true)
  }

  return (
    <div className='Thread'>
      <section className='message thread--message'>
        <div className='details'>
          <div>
            <img src={Image} alt='profile' className='user-image'/>
          </div>
          <h2>HOB</h2>
        </div>
        <p>Hey guys</p>
        <p>If you're a designer, please comment under this thread</p>
        <section className='thread--view' onMouseOver={handleHover} onMouseLeave={() => setShowText(false)} onClick={handleClick}>
            <div>
              <img src={Image} alt='profile' className='user-image'/>
              <img src={Image1} alt='profile' className='user-image'/>
              <img src={Image2} alt='profile' className='user-image'/>
            </div>
            <p className='reply-number'>3 replies</p>
            {showText ? '':<p>Last reply 1 day ago</p>}
            {showText && <p className='view-reply'>View Thread &rsaquo;</p>}
        </section>
        <div className='message'>
            <div className='details'>
            <div>
                <img src={Image1} alt='profile' className='user-image'/>
            </div>
            <h2>AngryDev</h2>
            </div>
            <p>Good morning Powerdrillers!</p>
        </div>
        <div className='message'>
            <div className='details'>
            <div>
                <img src={Image2} alt='profile' className='user-image'/>
            </div>
            <h2>AngrierDev</h2>
            </div>
            <p>Check <span className='span'>#announcement-gen</span> for giveaway</p>
        </div>
      </section>
      {showThread && <SideThread onClose={() => setShowThread(false)}/>}
    </div>
  )
}
