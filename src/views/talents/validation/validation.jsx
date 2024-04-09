const validate = (state, name, error, setError) => {
  const lettersRegex = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
  const pdfExtensionRegex = /\.pdf$/i; // Expresión regular para validar la extensión PDF
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const numberRegex = /^[0-9]+$/;
  if (name === "name" || name === "lastname" || name === "category") {
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
    // } else if (name === "companyName") {
    //   if (state.companyName.trim() === "") {
    //     setError({ ...error, companyName: "Campo requerido" });
    //   } else if (state.companyName.trim().length < 2) {
    //     setError({ ...error, companyName: "Debe tener al menos 2 caracteres." });
    //   } else if (state.companyName.trim().length > 30) {
    //     setError({ ...error, companyName: "Debe ser menor a 30 caracteres." });
    //   } else {
    //     setError({ ...error, companyName: "" });
    //   }
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
  } else if (name === "position") {
    if (state.position.trim() === "") {
      setError({ ...error, position: "Campo requerido" });
    } else if (!lettersRegex.test(state.position)) {
      setError({
        ...error,
        position: "Este campo solo puede contener letras",
      });
    } else if (state.position.trim().length < 4) {
      setError({ ...error, position: "Debe tener al menos 4 caracteres" });
    } else if (state.position.trim().length > 30) {
      setError({ ...error, position: "Debe ser menor a 30 caracteres." });
    } else {
      setError({ ...error, position: "" });
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
  } else if (name === "cvFile" || name === "languageFile") {
    const file = state[name];
    // if (!file) {
    //   setError({ ...error, [name]: "Campo requerido." });
    // } else {
    const fileName = file.name;
    if (!pdfExtensionRegex.test(fileName)) {
      setError({ ...error, [name]: "El archivo debe ser un PDF." });
    } else {
      setError({ ...error, [name]: "" });
      // }
    }
  }
};

export default validate;
