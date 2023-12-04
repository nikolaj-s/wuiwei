import React from 'react'

import "./Form.css";

export const Form = () => {

    const [sent, setSent] = React.useState(false)
 
    const [name, setName] = React.useState("")
 
    const [email, setEmail] = React.useState("")
 
    const [message, setMessage] = React.useState("")

    const sentAnim = () => {
        setSent(true)
        setTimeout(() => {
            document.getElementsByClassName('sent-alert')[0].style.opacity = 1;
            setTimeout(() => {
                document.getElementsByClassName('sent-alert')[0].style.opacity = 0;
                setTimeout(() => {
                    setSent(false)
                }, 1100)
            }, 400)
        }, 90)
    }

    const encode = (data) => {
        return Object.keys(data)
          .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
    };

    const handleSubmit = (e) => {
        e.preventDefault()
 
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({"form-name": "contact-form", "name": name, "email": email, "message": message})
        }).then(() => {
            sentAnim()
            setName("")
            setEmail("")
            setMessage("")
        }).catch(error => {
            sentAnim()
            setName("")
            setEmail("")
            setMessage("")
        })
    }


    return (
        <form action="/" data-netlify="true" id="contact" name="contact-form" onSubmit={handleSubmit} >
            {sent ? <div className="sent-alert"><h2>Sent</h2><p>Thank You I Will Be In Contact With You Shortly</p></div> : null}
            <input name="email" required onChange={(e) => {setEmail(e.target.value)}} value={email} placeholder="Email" type="text" />
            <input name="name" required onChange={(e) => {setName(e.target.value)}} value={name} placeholder="Name" type="text" />
            <textarea name="message" required onChange={(e) => {setMessage(e.target.value)}} value={message} placeholder="Message" />
            <button type='submit'>SEND</button>
        </form>
    )
}
