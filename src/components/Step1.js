import React, {useState} from 'react'

export const Step1 = ({data, setData}) => {

    const [item, setItem] = useState(null)
    const [input, setInput] = useState(null)

    let inputClass = input ? " active" : ""

    const clearClass = () => {
        let active = document.querySelector(".step1__item.active")
        if(active) document.querySelector(".step1__item.active").classList.remove("active")
    }

    const onClickHandler = (e) => {
        let parent = e.target.closest(".step1__item")
        let isClass = parent.classList.contains("active")
        let value = parent.querySelector(".step1__item-title").textContent
        setInput("")
        if(isClass) {
            clearClass()
            parent.classList.remove("active")
            setItem("")
        } else {
            clearClass()
            parent.classList.add("active")
            setItem(value)
        }
    }

    return <section className="step1">
        <div className="step1__container _container">
            <div className="step1__content">
                <div className="step1__title title-2">
                    Какой тип грунта на вашем участке?
                </div>
                <div className="step1__text text">
                    От типа грунта зависит технология монтажа септика
                </div>

                <div className="step1__list">

                    <div className="step1__item" onClick={e => onClickHandler(e)}>
                        <div className="step1__img">
                            <picture>
                                <source srcset="./img/items/pesok.webp" type="image/webp"/>
                                <img src="./img/items/pesok.jpg"/>
                            </picture>
                        </div>
                        <div className="step1__checkbox"></div>
                        <div className="step1__item-title">Песок</div>
                    </div>

                    <div className="step1__item" onClick={e => onClickHandler(e)}>
                        <div className="step1__img">
                            <picture>
                                <source srcset="img/items/suglinok.webp" type="image/webp"/>
                                <img src="img/items/suglinok.jpg"/>
                            </picture>
                        </div>
                        <div className="step1__checkbox"></div>
                        <div className="step1__item-title">Суглинок</div>
                    </div>

                    <div className="step1__item" onClick={e => onClickHandler(e)}>
                        <div className="step1__img">
                            <picture>
                                <source srcset="img/items/torf.webp" type="image/webp"/>
                                <img src="img/items/torf.jpg"/>
                            </picture>
                        </div>
                        <div className="step1__checkbox"></div>
                        <div className="step1__item-title">Торф</div>
                    </div>

                    <div className="step1__item" onClick={e => onClickHandler(e)}>
                        <div className="step1__img">
                            <picture>
                                <source srcset="img/items/glina.webp" type="image/webp"/>
                                <img src="img/items/glina.jpg"/>
                            </picture>
                        </div>
                        <div className="step1__checkbox"></div>
                        <div className="step1__item-title">Глина</div>
                    </div>
                </div>

                <input 
                    className={"step1__input" + inputClass} placeholder="Введите Ваш вариант ответа..." 
                    type="text"
                    value={input}
                    onChange={e => {
                        clearClass()
                        setItem("")
                        setInput(e.target.value)
                    }}
                />

                <button 
                    onClick={() => setData(d => {
                        const value = input || item
                        return {
                            ...d,
                            stepNum: d.stepNum + 1,
                            value
                        }
                    })}
                    className="step1__button"
                    disabled={!input && !item}
                >
                    Дальше&nbsp;&nbsp;&nbsp;
                    <span className="_icon-arrow"></span> 
                </button>
            </div>
            
        </div>
    </section>
}