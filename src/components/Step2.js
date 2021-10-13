import React, {useState} from 'react'
import MaskedInput from "react-text-mask"
import { ProgressBar } from './ProgressBar'
import axios from 'axios'
import { Modal, Button } from 'react-bootstrap'


export const Step2 = ({data, setData}) => {

    let [phone, setPhone] = useState("")
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    let inputStatus = !phone.includes("_") && !!phone.length

    const onClickHandler = (e) => {
        e.preventDefault()
        setShow(true)
        axios.post("https://test.vilok.net/mail.php", {
            grunt: data.value,
            phone: phone,
            email: "zmanz@yandex.ru"
        })
        .then(r => {
            console.log("response",r)
            setData(data => ({
                ...data,
                message: "Ваше сообщение успешно отправлено. Мы свяжемся с вами в течении 5 минут. Спасибо!"
            })
        )})
        .catch(e => {
            setData(data => ({
                ...data,
                message: "Ваше сообщение не отправлено. Попробуйте еще раз!"
            })
        )})

    }

    return (
    <>
        <section className="step2">
            <div className="step2__container _container">
                <div className="step2__content">
                    <div className="step2__title title-1">
                        Расчет стоимости <span className="c-green">сформирован</span>
                    </div>
                    <ProgressBar />
                    <div className="step2__text title-2">
                        Он откроется на этой странице сразу после ввода вашего номера телефона
                    </div>

                    <form className="step2__form">
                        <MaskedInput 
                            className="step2__input" 
                            type="text" 
                            placeholder="Введите ваш номер телефона" 
                            mask={['+7','','(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                            onChange={e => setPhone(e.target.value)}
                            value={phone}
                        />
                        <button className="step2__button" disabled={!inputStatus}onClick={onClickHandler}>Получить расчет и мини-курс</button>
                    </form>

                </div>
                
            </div>
        </section>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header></Modal.Header>
            <Modal.Body>
                {data.message}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    </>
    )
}

