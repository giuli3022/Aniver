import React  from 'react';
import contact from "../Images/contact.jpg";
import whatsapp from "../Images/icons/whatsapp.svg";

const showSendInfo = () => {
    var id_si = document.getElementById("send-info");
    id_si.style.display = "block";
}

const Contact = () => {
    return (
        <section id="contact">
            <h2 className="contact-title">Contáctanos</h2>

            <div className="box">
                <div className="form-container">
                    <div className="wsp-box">
                        <h3>Contactate a través de nuestro Whatsapp</h3>
                        <a href="https://api.whatsapp.com/send?phone=+5491153428020&text=Hola, tengo una consulta" target="_blank" rel="noreferrer">
                            <button className="wsp-button">
                                <img className="whatsapp-contact" src={whatsapp} alt="" />
                            </button>
                        </a>
                    </div>

                    <h3>o a través de nuestro email</h3>
                    <form method="post" action="/Contact/Send" id="contact-form">
                        <ul className="form-list">
                            <li>
                                <label htmlFor="name">Nombre:</label>
                                <input type="text" id="name" name="user_name" required />
                            </li>
                            <li>
                                <label htmlFor="mail">Correo electrónico:</label>
                                <input type="email" id="email" name="user_mail" required />
                            </li>
                            <li id="li-msg">
                                <label htmlFor="msg">Mensaje:</label>
                                <textarea id="message" name="user_message" onFocus={showSendInfo} required/>
                            </li>
                            <li id="send-info">Luego de enviar la consulta, revise su bandeja de entrada y/o el correo no deseado</li>
                            <li>
                                <button type="submit" className="form-button">Enviar</button>
                            </li>
                        </ul>
                    </form>
                </div>

                <div>
                    <img className="contact-img" src={contact} alt="" />
                </div>
            </div>
        </section>
    )
};

export default Contact;