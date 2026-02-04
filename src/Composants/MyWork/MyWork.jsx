import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'

function MyWork() {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>Mes projets</h1>
        </div>
        <div className="mywork-intro">
            <p>Voici des projets personnels, des applications qui m'ont donné de l'expérience et des projets académiques</p>
        </div>
        <div className="mywork-container">
            {mywork_data.map((work, index) => {
                return (
                    <div key={index} className="work-item">
                        <img src={work.w_img} alt={work.w_name || `Projet ${index + 1}`} />
                        {work.w_name && <h3>{work.w_name}</h3>}
                        {work.w_description && <p>{work.w_description}</p>}
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default MyWork