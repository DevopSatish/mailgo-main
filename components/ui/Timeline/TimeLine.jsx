import React from 'react'

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import {
    faDisplay,
    faGear,
    faMicrochip,
    faStar
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const workIcon = {
    icon: <FontAwesomeIcon icon={faGear} />,
    iconStyle: { background: 'rgb(0, 0, 0)', color: '#fff' },
}
const schoolIcon = {
    icon: <FontAwesomeIcon icon={faMicrochip} />,
    iconStyle: { background: 'rgb(0, 0, 0)', color: '#fff' },
}
const TrainIcon = {
    icon: <FontAwesomeIcon icon={faDisplay} />,
    iconStyle: { background: 'rgb(0, 0, 0)', color: '#fff' },
}
const starIcon = {
    icon: <FontAwesomeIcon icon={faStar} />,
    iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
}

function App() {
    const timeline = [

        {
            icon: workIcon,
            img: '/connect.svg',
            title: 'Connect Data Source',
            subtitle: '',
            desc: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
        },

        {
            icon: TrainIcon,
            img: 'https://images.pexels.com/photos/2950499/pexels-photo-2950499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Start Training',
            subtitle: '',
            desc: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',

        },

        {
            icon: schoolIcon,
            img: 'https://images.pexels.com/photos/2950499/pexels-photo-2950499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Talk to your Data',
            subtitle: '',
            desc: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',

        },
        { icon: starIcon },
    ]

    return (
        <div className="App">

            <VerticalTimeline>
                {timeline.map((t, i) => {
                    const contentStyle =
                        i === 0
                            ? { background: 'grey', color: '#fff' }
                            : undefined
                    const arrowStyle =
                        i === 0
                            ? { borderRight: '8px solid  rgb(168 85 247)' }
                            : undefined

                    return (
                        <VerticalTimelineElement
                            key={i}
                            className="vertical-timeline-element--work"
                            contentStyle={contentStyle}
                            contentArrowStyle={arrowStyle}
                            date={t.date}
                            {...t.icon}
                        >
                            {t.title ? (
                                <React.Fragment>
                                    <h3 className="vertical-timeline-element-title text-2xl font-semibold text-slate-400">{t.title}</h3>
                                    {t.subtitle && (
                                        <h4 className="vertical-timeline-element-subtitle text-slate-300">
                                            {t.subtitle}
                                        </h4>
                                    )}
                                    {t.desc && <p className='text-black'>{t.desc}</p>}
                                    <img src={t.img} alt="Image" className='my-2 h-[300px] w-full' />
                                </React.Fragment>
                            ) : undefined}
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </div>
    )
}

export default App
