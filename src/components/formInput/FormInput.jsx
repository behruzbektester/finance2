import style from "./FormInput.module.scss";

function FormInput({ label, name, placeholder, type }) {
  return (
    <label className={style.label}>
      <span className={style.label_text}>{label}</span>
      <input
        className={style.input}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </label>
  );
}

export default FormInput;
