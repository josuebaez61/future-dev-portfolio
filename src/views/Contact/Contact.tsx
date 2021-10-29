import React, { useState, useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import RandomCode from '../../components/RandomCode/RandomCode'

const Contact = () => {
    const [textAreaLenght, setTextAreaLenght] = useState(0);

    const [formValue, handleChange] = useForm({
        email: '',
        message: ''
    });

    useEffect(() => {
        setTextAreaLenght(formValue.message.length)
    }, [formValue.message])

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formValue);
    }

    return (
        <main className="container pb-3 pt-3">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <section className="card animate__animated animate__zoomIn animate__faster">
                        <header className="card-header">
                            CONTACT
                        </header>
                        <div className="card-body">
                            <h4 className="text-center card-title">FORMULARIO DE CONTACTO</h4>
                            <form onSubmit={ onSubmit }>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Tu correo electrónico</label>
                                    <input 
                                        value={ formValue.email }
                                        onChange={ handleChange }
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Dejá tu correo electrónico 📧"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="message">Mensaje</label>
                                    <textarea 
                                        value={ formValue.message }
                                        onChange={ handleChange }
                                        name="message"
                                        className="form-control"
                                        placeholder="Dejá tu mensaje acá 😉" 
                                        id="message"
                                        required
                                        rows={8}
                                        maxLength={500}
                                        style={{
                                            resize: 'none'
                                        }}
                                    ></textarea>
                                    <small>{textAreaLenght}/500</small>
                                </div>
                                <div className="mb-3 d-flex justify-content-between">
                                    <div>
                                        <RandomCode length={20} uppercase/>
                                        <RandomCode length={15} uppercase/>
                                        <RandomCode length={10} uppercase/>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn-cyber btn-cyber-skyblue">
                                        SEND_MESSAGE
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Contact
