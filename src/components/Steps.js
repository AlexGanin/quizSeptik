import React from 'react'

export const Steps = ({data}) => {

    return <header className="steps">
        <div className="steps _container">
            <div className="steps__container">
                {
                    new Array(data.steps).fill("").map((_, key) => {
                        let stepClass = key + 1 === data.stepNum ? " current" : ""
                        let stepClass2 = key + 1 < data.stepNum ? " active" : ""
                        return <div className={"steps__step" + stepClass + stepClass2}></div>
                    }
                        
                    )
                }
                
            </div>
            <div className="steps__num-question">Вопрос <span>{data.stepNum}</span> из 2</div>
        </div>
    </header>
}