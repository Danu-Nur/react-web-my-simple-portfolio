import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const data = [
  {
    id: 1,
    skils: 'Frontend Development',
    part: [
      ['HTML', 'Advance Beginner'],
      ['JavaScript', 'Advance Beginner'],
      ['React.JS', 'Advance Beginner'],
      ['CSS', 'Advance Beginner'],
      ['XML', 'Advance Beginner']
    ]
  },
  {
    id: 2,
    skils: 'Backend Development',
    part: [
      ['PHP', 'Competent'],
      ['JAVA', 'Competent'],
      ['C++', 'Advance Beginner'],
      ['MySQL', 'Competent'],
      ['MongoDB', 'Novice'],
      ['REST APIs', 'Advance Beginner']
    ]
  },
  {
    id: 3,
    skils: 'Framework',
    part: [
      ['Codeigniter', 'Competent']
    ]
  },
  {
    id: 4,
    skils: 'Development',
    part: [
      ['Android Full Stack Development', 'Advance Beginner'],
      ['WEB Full Stack Development', 'Advance Beginner']
    ]
  },
  {
    id: 5,
    skils: 'Software',
    part: [
      ['Android Studio', 'Competent'],
      ['Visual Studio Code', 'Competent'],
      ['Adobe XD', 'Competent'],
      ['Adobe Illustrator', 'Competent'],
      ['Adobe Photoshop', 'Competent'],
      ['MS. Word', 'Competent'],
      ['MS. Excel', 'Competent'],
      ['MS. PowerPoint', 'Competent'],
    ]
  },
]

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        {
          data.map(({ id, skils, part }) => {
            return (
              <div key={id} className="experience">
                <h3>{skils}</h3>
                <div className="experience__content">

                  {
                    part.map((item) => {
                      return (
                        <>
                          <article className="experience__details">
                            <div><BsPatchCheckFill className="experience__details-icon" />
                              <h4>{item[0]}</h4><small className='text-light'>{item[1]}</small>
                            </div>
                          </article>
                        </>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }

        {/* <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"  />
            <div> 
              <h4>MySQL</h4>
            <small className='text-light'>Experience</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"  />
            <div> 
              <h4>MongoDB</h4>
            <small className='text-light'>Experience</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"  />
            <div> 
              <h4>PHP</h4>
            <small className='text-light'>Experience</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"  />
            <div> 
              <h4>Node js</h4>
            <small className='text-light'>Experience</small>
            </div>
            </article>

          </div>
        </div>
         */}
      </div>
    </section >
  )
}

export default Experience