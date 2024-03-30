const validate = (state, name, error, setError) => {
  const lettersRegex = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
  //   const validExtensions = ["pdf"];
  // Lista de extensiones válidas
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const numberRegex = /^[1-9]\d{9}$/;
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
  } else if (name === "companyName") {
    if (state.companyName.trim() === "") {
      setError({ ...error, companyName: "Campo requerido" });
    } else if (state.companyName.trim().length < 2) {
      setError({ ...error, companyName: "Debe tener al menos 2 caracteres." });
    } else if (state.companyName.trim().length > 30) {
      setError({ ...error, companyName: "Debe ser menor a 30 caracteres." });
    } else {
      setError({ ...error, companyName: "" });
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
  } else if (name === "category") {
    if (state.category.trim() === "") {
      setError({ ...error, category: "Campo requerido" });
    } else if (!lettersRegex.test(state.category)) {
      setError({
        ...error,
        category: "Este campo solo puede contener letras",
      });
    } else if (state.category.trim().length < 4) {
      setError({ ...error, category: "Debe tener al menos 4 caracteres" });
    } else if (state.category.trim().length > 30) {
      setError({ ...error, category: "Debe ser menor a 30 caracteres." });
    } else {
      setError({ ...error, category: "" });
    }
  } else if (name === "phone") {
    if (state.phone.trim() === "") {
      setError({ ...error, phone: "Campo requerido." });
    } else if (!numberRegex.test(state.phone)) {
      setError({ ...error, phone: "Este campo solo puede contener letras." });
    } else if (state.phone.trim().length < 6) {
      setError({ ...error, phone: "Número de teléfono demasiado corto." });
    } else if (state.phone.trim().length > 30) {
      setError({ ...error, phone: "Debe ser menor a 30 caracteres." });
    } else {
      setError({ ...error, phone: "" });
    }
  }
};

export default validate;
