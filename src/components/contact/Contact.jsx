import React, { useState } from "react";
import "./contact.css";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { Button, TextField } from "@mui/material";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

const styles = {
  text: {
    width: "100%",
    height: "50px",
    margin: "15px 0px 15px 0px",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "14px"
  }
};

const Contact = () => {
  const [message, setMessage] = useState({
    name: "",
    case: "",
    email: "",
    message: ""
  });
  const [messageSubmit, setMessageSubmit] = useState(false);
  const [validation, setValidation] = useState({
    name: false,
    case: false,
    email: false,
    message: false
  });
  const [validationMessage, setValidationMessage] = useState({
    name: "",
    case: "",
    email: "",
    message: ""
  });

  const addMessage = async (message) => {
    await addDoc(collection(db, "messages"), message);
    /*try {
      await addDoc(collection(db, "messages"), message);
      alert("Funcionando 1");
    } catch (error) {
      console.log(error);
    }*/
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation.name === true || validation.case === true || validation.email === true || validation.message === true) {
      alert("Por favor verifique los campos del formulario");
    } else {
      if (message.name === "" || message.case === "" || message.email === "" || message.message === "") {
        alert("Algunos campos son nulos");
      } else {
        addMessage(message);
        setMessageSubmit(true);
        setTimeout(() => {
          setMessageSubmit(false);
        }, 1500);
      }
    }
    /*if (message.name || message.case || message.email || message.message === "") {
      alert("Algunos campos son nulos");
    } else {
      if (validation.name || validation.case || validation.email || validation.message === false) {
        addMessage(message);
        setMessageSubmit(true);
        setTimeout(() => {
          setMessageSubmit(false);
        }, 1500);
      } else {
        alert("Por favor verifique los campos del formulario");
      }
    }*/
  };

  const validationChange = (e) => {
    const {name, value} = e.target;
    if (name === "name") {
      //console.log("Buenas");
      if (!value) {
        setValidation({ ...validation, [name]: true });
        setValidationMessage({ ...validationMessage, [name]: "El nomre no puede ser nulo" });
      } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value)) {
        setValidation({ ...validation, [name]: true });
        setValidationMessage({ ...validationMessage, [name]: "El nombre solo puede tener letras y espacios" });
      } else {
        setMessage({ ...message, [name]: value });
        setValidation({ ...validation, [name]: false });
      }
    }
    if (name === "case") {
      //console.log("Buenas");
      if (!value) {
        setValidation({ ...validation, [name]: true });
        setValidationMessage({ ...validationMessage, [name]: "El asunto no puede ser nulo" });
      } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value)) {
        setValidation({ ...validation, [name]: true });
        setValidationMessage({ ...validationMessage, [name]: "El asunto solo puede tener letras y espacios" });
      } else {
        setMessage({ ...message, [name]: value });
        setValidation({ ...validation, [name]: false });
      }
    }
    if (name === "email") {
      //console.log("Buenas");
      if (!value) {
        setValidation({ ...validation, [name]: true });
        setValidationMessage({ ...validationMessage, [name]: "El email no puede ser nulo" });
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        setValidation({ ...validation, [name]: true });
        setValidationMessage({ ...validationMessage, [name]: "Ingrese un correo válido" });
      } else {
        setMessage({ ...message, [name]: value });
        setValidation({ ...validation, [name]: false });
      }
    }
    if (name === "message") {
      //console.log("Buenas");
      if (!value) {
        setValidation({ ...validation, [name]: true });
        setValidationMessage({ ...validationMessage, [name]: "El mesaje no puede ser nulo" });
      } else if (value.length > 5000) {
        setValidation({ ...validation, [name]: true });
        setValidationMessage({ ...validationMessage, [name]: "El mensaje no puede tener más de 2.000 caracteres" });
      } else {
        setMessage({ ...message, [name]: value });
        setValidation({ ...validation, [name]: false });
      }
    }
  };

  /*const handleInputChange = (e) => {
    const {name, value} = e.target;
    setMessage({ ...message, [name]: value });
  };*/

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contactos</h1>
          <div className="c-info">
            <div className="c-info-item">
              <EmailRoundedIcon sx={{ width: "30px", height: "30px", marginRight: "15px" }} />
              josedanielpmj2@gmail.com
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-description">
            <b>¿Cuál es tu requerimiento?</b> Comenta como podriamos ayudarte en tu proyecto
          </p>
          <form onSubmit={handleSubmit}>
            <div className="input">
              <TextField
                id="name"
                label="Nombre"
                name="name"
                error={validation.name}
                helperText={validation.name && validationMessage.name}
                onChange={validationChange}
                variant="outlined"
                sx={validation.name ? { ...styles.text, margin: "15px 0px 25px 0px" } : styles.text }
                InputProps={{sx: {fontFamily: "'Poppins', sans-serif", fontWeight: "14px"}}}
                InputLabelProps={{sx: {fontFamily: "'Poppins', sans-serif", fontWeight: "14px"}}}
              />
              <TextField
                id="case"
                label="Asunto"
                name="case"
                error={validation.case}
                helperText={validation.case && validationMessage.case}
                onChange={validationChange}
                variant="outlined"
                sx={validation.case ? { ...styles.text, margin: "15px 0px 25px 0px" } : styles.text }
                InputProps={{sx: {fontFamily: "'Poppins', sans-serif", fontWeight: "14px"}}}
                InputLabelProps={{sx: {fontFamily: "'Poppins', sans-serif", fontWeight: "14px"}}}
              />
              <TextField
                id="email"
                label="Email"
                name="email"
                error={validation.email}
                helperText={validation.email && validationMessage.email}
                onChange={validationChange}
                variant="outlined"
                sx={validation.email ? { ...styles.text, margin: "15px 0px 25px 0px" } : styles.text }
                InputProps={{sx: {fontFamily: "'Poppins', sans-serif", fontWeight: "14px"}}}
                InputLabelProps={{sx: {fontFamily: "'Poppins', sans-serif", fontWeight: "14px"}}}
              />
            </div>
            <div style={{width: "100%"}}>
              <TextField
                id="messaje"
                label="Descripción"
                name="message"
                error={validation.message}
                helperText={validation.message && validationMessage.message}
                onChange={validationChange}
                variant="outlined"
                multiline rows={5}
                sx={validation.message ? { ...styles.text, margin: "15px 0px 25px 0px" } : styles.text }
                InputProps={{sx: {fontFamily: "'Poppins', sans-serif", fontWeight: "14px"}}}
                InputLabelProps={{sx: {fontFamily: "'Poppins', sans-serif", fontWeight: "14px"}}}
              />
            </div>
            <div className="m-button">
              <div className="button">
                {
                  !messageSubmit ?
                  <Button variant="contained" type="submit" sx={{...styles.text, marginTop: "110px"}}>Enviar</Button> :
                  <Button variant="contained" type="submit" color="success" sx={{...styles.text, marginTop: "110px"}}>Enviando</Button>
                }
              </div>
            </div>
            {/*<input type="text" placeholder="Name" name="userName" />
            <input type="text" placeholder="Case" name="userCase" />
            <input type="text" placeholder="Email" name="userEmail" />
            <textarea rows="5" placeholder="Menssaje" name="userMessaje" />
            <button>Submit</button>*/}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;