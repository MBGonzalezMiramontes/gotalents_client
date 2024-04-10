const validate = (state, name, error, setError) => {
  const lettersRegex = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const numberRegex = /^[0-9]+$/;
  if (name === "name" || name === "lastname" || name === "position") {
    if (state[name].trim() === "") {
      setError({ ...error, [name]: "Campo requerido." });
    } else if (!lettersRegex.test(state[name])) {
      setError({ ...error, [name]: "Este campo solo puede contener letras." });
    } else if (state[name].trim().length < 2) {
      setError({ ...error, [name]: "Debe tener al menos 2 caracteres." });
    } else if (state[name].trim().length > 30) {
      setError({ ...error, [name]: "Debe ser menor a 30 caracteres." });
    } else {
      setError({ ...error, [name]: "" });
    }
  } else if (name === "email") {
    if (state.email.trim() === "") {
      setError({ ...error, email: "Campo requerido" });
    } else if (!emailRegex.test(state.email)) {
      setError({ ...error, email: "Formato de email requerido." });
    } else if (state.email.trim().length < 2) {
      setError({ ...error, email: "Debe tener al menos 2 caracteres." });
    } else if (state.email.trim().length > 30) {
      setError({ ...error, email: "Debe ser menor a 30 caracteres." });
    } else {
      setError({ ...error, email: "" });
    }
  } else if (name === "phone") {
    if (state.phone.trim() === "") {
      setError({ ...error, phone: "Campo requerido." });
    } else if (state.phone.trim().length < 6) {
      setError({ ...error, phone: "Número de teléfono demasiado corto." });
    } else if (state.phone.trim().length > 30) {
      setError({ ...error, phone: "Debe ser menor a 30 caracteres." });
    } else if (!numberRegex.test(state.phone)) {
      setError({ ...error, phone: "Este campo solo puede contener números." });
    } else {
      setError({ ...error, phone: "" });
    }
  }
};

export default validate;
