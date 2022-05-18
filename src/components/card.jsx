import React from 'react'
import "./card.css"


export const Card = ({date,heading,subheading ,type ,devices ,logo , arrow}) => {
    return (
        <div className={subheading==="Apple Gift"?"main-apple-div":"main-div"}>
            <div className='flex-div'>
                <div className='margin-div'>
                    <div><h3>{date}</h3></div>
                    <div className='border-div'><h3 className='h3'>{heading}</h3></div>
                    <div><h3>{subheading}</h3></div>
                    <div><h3>{type}</h3></div>
                    <div><h4>{devices}</h4></div>
                </div>

                <div className=''>
                   <div className='a'>{logo}</div>
                   <div className='right-side-div'>{arrow}</div>
                </div>
            </div>

        </div>
    )
}
