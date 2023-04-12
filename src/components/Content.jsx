import React from 'react'
import './style.css'
const Content = ({item}) => {
  return (
      <section className='section'>
          <div className="imgSection">
              <img src={item.img} className='img'/>
          </div>
          <div className="detailSection">
            <div className='country'>
              <small>{item.location}</small>
              <a href='' className='link'>View On Google Map</a>
            </div>
              <h3 className='name'>{item.name}</h3>
              <p className='time'>{item.time}</p>
              <p>{item.about}</p>
          </div>
    </section>
  )
}

export default Content