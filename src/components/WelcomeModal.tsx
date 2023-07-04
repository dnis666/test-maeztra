import { useState, useEffect } from 'react';

import "./WelcomeModal.css"
import NewsletterMailIcon from "../assets/newsletter-mail-icon.svg"
import ModalIcon from "../assets/modal-icon.svg"

const WelcomeModal = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const firstVisit = localStorage.getItem('firstVisit');

        if (!firstVisit) {
            setShowModal(true);
            localStorage.setItem('firstVisit', 'true');
        }
    }, []);

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    useEffect(() => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        if (email && !emailRegex.test(email)) {
            setEmailError('Por favor, insira um endereço de e-mail válido.');
        } else {
            setEmailError('');
        }
    }, [email]);

    function handleEmailSubmission(email: string) {
        console.log(`E-mail cadastrado: ${email}`);
        alert(`o e-mail ${email} foi cadastrado com sucesso!`)
        setShowModal(false);
    }
    

    return showModal ? (
        <div>
            <div className="overlay">
                <button className='close-button-modal' onClick={() => setShowModal(false)}>Fechar</button>
                <div className="modal">
                    <img src={NewsletterMailIcon} alt="Newsletter Mail Icon" />
                    <h1>Bem Vindo à MAEZTRA</h1>
                    <span>Receba em Primeira mão <br /><strong>desconto e ofertas exclusivas</strong></span>
                    <div>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Digite seu e-mail"
                        />
                        {emailError && <p>{emailError}</p>}
                     </div>
                    <button type="button" disabled={!!emailError || !email} onClick={() => handleEmailSubmission(email)}>ENVIAR <img src={ModalIcon} alt='modal-icon'></img></button>
                </div>
            </div>

        </div>

    ) : null;
};

export default WelcomeModal;
