import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm = ({ onRegister }) => {
  const [canSave, setCanSave] = React.useState(false);

  const { register, errors, handleSubmit } = useForm();

  const validateDate = (e) => {
    const helperText = document.querySelector(".date-helper");
    //selected date
    const value = e.target.value;
    const year = parseInt(value.split("-")[0]);

    //currentDate
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    if (currentYear - year < 18) {
      helperText.innerText = "No eres mayor de edad";
      setCanSave(false);
    } else {
      helperText.innerText = "";
      setCanSave(true);
    }
  };

  const save = (data) => {
    onRegister(data);
  };

  return (
    <section className="center-align">
      <div className="row">
        <form className="col s12 card-panel" onSubmit={handleSubmit(save)}>
          <h5>Registrar nuevo candidato</h5>
          <div className="row">
            <div className="input-field col s6">
              <input
                name="first_name"
                id="first_name"
                type="text"
                className="validate"
                ref={register({
                  required: { value: true, message: "Campo requerido" },
                  min: { value: 3, message: "minimo 3 caracteres" },
                })}
              />
              <label htmlFor="first_name">Nombres</label>
              <span className="helper-text red-text">
                {errors?.first_name?.message}
              </span>
            </div>

            <div className="input-field col s6">
              <input
                name="last_name"
                id="last_name"
                type="text"
                className="validate"
                ref={register({
                  required: { value: true, message: "Campo requerido" },
                  min: { value: 4, message: "minimo 4 caracteres" },
                })}
              />
              <label htmlFor="last_name">Apellidos</label>
              <span className="helper-text red-text">
                {errors?.last_name?.message}
              </span>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input
                name="cc"
                id="cc"
                type="number"
                className="validate"
                ref={register({
                  required: { value: true, message: "Campo requerido" },
                  min: { value: 9, message: "minimo 9 caracteres" },
                })}
              />
              <label htmlFor="cc">Cédula</label>
              <span className="helper-text red-text">
                {errors?.cc?.message}
              </span>
            </div>

            <div className="input-field col s6">
              <input
                name="birthday"
                id="birthday"
                type="date"
                className="validate"
                ref={register({
                  required: { value: true, message: "Campo requerido" },
                })}
                onChange={validateDate}
              />
              <label htmlFor="birthday">Fecha de nacimiento</label>
              <span className="helper-text red-text date-helper">
                {errors?.birthday?.message}
              </span>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input
                name="email"
                id="email"
                type="email"
                className="validate"
                ref={register({
                  required: { value: true, message: "Campo requerido" },
                })}
              />
              <label htmlFor="email">Correo electrónico</label>
              <span className="helper-text red-text">
                {errors?.email?.message}
              </span>
            </div>

            <div className="input-field col s6">
              <input
                name="github_user"
                id="github_user"
                type="text"
                className="validate"
                ref={register({
                  required: { value: true, message: "Campo requerido" },
                })}
              />
              <label htmlFor="github_user">Usuario de GitHub</label>
              <span className="helper-text red-text">
                {errors?.github_user?.message}
              </span>
            </div>
          </div>

          <button
            className={`btn orange accent-4 z-depth-1 ${
              !canSave && "disabled"
            }`}
          >
            Registrar
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;
