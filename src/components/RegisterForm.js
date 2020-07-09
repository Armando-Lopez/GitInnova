import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const { register, errors, handleSubmit } = useForm();
  const save = (data) => {
    console.log(data);
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
                })}
              />
              <label htmlFor="last_name">Apellidos</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input
                name="cc"
                id="cc"
                type="number"
                className="validate"
                ref={register({
                  required: { value: true, message: "Campo requerido" },
                })}
              />
              <label htmlFor="cc">Cédula</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input
                name="birthday"
                id="birthday"
                type="date"
                className="validate"
                ref={register({
                  required: { value: true, message: "Campo requerido" },
                })}
              />
              <label htmlFor="birthday">Fecha de nacimiento</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
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
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input
                name="github-user"
                id="github-user"
                type="text"
                className="validate"
                ref={register({
                  required: { value: true, message: "Campo requerido" },
                })}
              />
              <label htmlFor="github-user">Usuario de GitHub</label>
            </div>
          </div>

          <button className="btn orange accent-4 z-depth-1">Registrar</button>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;
