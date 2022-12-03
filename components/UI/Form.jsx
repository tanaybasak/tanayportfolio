import React, { useState } from "react";
import classes from "../../styles/form.module.css";

const Form = () => {
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const submitHandler = () => {
    e.preventDefault();
    setEmail('');
    setSubject('');
    setMessage('');
  };
  return (
    <form className={`${classes.form}`} onSubmit={submitHandler}>
      <div className={`${classes.form__group}`}>
        <input type="email" placeholder="Email Address" onChange={e => setEmail(e.target.value)} required />
      </div>
      <div className={`${classes.form__group}`}>
        <input type="text" placeholder="Subject" onChange={e => setSubject(e.target.value)} required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea type="text" rows={5} placeholder="Message" onChange={e => setMessage(e.target.value)} required />
      </div>

      <button className="primary__btn" type="submit" onClick={submitHandler}>
        <a href={`mailto:${email}?subject=${subject}&body=${message}`}> Send</a>
    </button>
    </form >
  );
};

export default Form;
