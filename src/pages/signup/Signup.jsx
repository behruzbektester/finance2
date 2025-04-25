import style from "./Signup.module.scss";

import { FormInput } from "../../components";
import { isPending } from "@reduxjs/toolkit";

function Signup() {
  const { data, isPending, register } = useRegister();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    register(name, email, password);
  };

  return (
    <section className={style["register-section"]}>
      <div className={style["regestration-illustration"]}></div>
      <div className={style["regestration-form-wrapper"]}>
        <form onSubmit={handleSubmit} className={style.form}>
          <h1 className={style.title}>Signup</h1>
          <div>
            <FormInput label="Name" name="name" type="text" />
            <FormInput label="Email" name="email" type="email" />
            <FormInput label="Password" name="password" type="password" />
            {!isPending && (
              <button className={`${style.register_btn} btn`}>Signup</button>
            )}
            {isPending && (
              <button className={`${style.register_btn} loading btn`} disabled>
                Loading...
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Signup;
