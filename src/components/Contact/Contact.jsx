import React, { useState } from "react";

import "./Contact.css";

function Contact(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    function validarForm() {
        const form = document.querySelector('form');
        const inputs = form.querySelectorAll('input');
    
        let isValid = true;
    
        inputs.forEach(input => {
            if (!input.checkValidity()) {
                input.classList.add('invalid');
                isValid = false;
            } else {
                input.classList.remove('invalid');
            }
        });
    
        return isValid;
    }
    
    function enviarForm() {
        if (validarForm()) {
            enviarWhatsApp();
        }
    }

    function mascararTelefone(telefone) {
        const texto = telefone.value;
        const textoApenasNumeros = texto.replace(/\D/g, '').substring(0, 11);
    
        let telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    
        if (textoApenasNumeros.length < 11) {
            telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        }
    
        setPhone(telefoneFormatado);
    }
    
    const campoTelefone = document.getElementById('input-phone');
        campoTelefone.addEventListener('input', function () {
        mascararTelefone(this);
    });

    function enviarWhatsApp() {
        const name = document.getElementById('input-name').value;
        const email = document.getElementById('input-email').value;
        const phone = document.getElementById('input-phone').value;
        const message = document.getElementById('input-message').value;

        const text = `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`;
        const encodedText = encodeURIComponent(text);
        const phoneWithoutMask = phone.replace(/[-()\s]/g,'');
        const url = `https://wa.me/55${phoneWithoutMask}?text=${encodedText}`;

        window.open(url, '_blank');
    }

    return (
        <>
            <form onSubmit={enviarForm}>
                
                <fieldset>
                    <label htmlFor="input-name">Nome</label>
                    <input 
                        type="text" 
                        name="input-name" 
                        id="input-name" 
                        required 
                        minLength="2" 
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </fieldset>
                
                <fieldset>
                    <label htmlFor="input-email">E-mail</label>
                    <input 
                        type="email" 
                        name="input-email" 
                        id="input-email" 
                        required 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </fieldset>
                
                <fieldset>
                    <label htmlFor="input-phone">Telefone</label>
                    <input 
                        type="phone" 
                        name="input-phone" 
                        id="input-phone" 
                        placeholder="(99) 99999-9999" 
                        required pattern="^\(\d{2}\) \d{5}-\d{4}$" 
                        maxLength="15" 
                        value={phone}
                        onChange={mascararTelefone}
                    />
                </fieldset>
                
                <fieldset>
                    <label htmlFor="input-message">Mensagem</label>
                    <textarea 
                        name="input-message" 
                        id="input-message" 
                        cols="30" 
                        rows="10"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                    >    
                    </textarea>
                </fieldset>
                
                <center>
                    <input type="submit" value="Enviar" className="button" />  
                </center>
            
            </form>
        </>
    )
}

export default Contact;