import './Input.scss';

function Input({label, name, type, className, onChange}) {
    return (
        <div className="input-field">
            <label htmlFor={name} className="input-field__label">{label}</label>
            <input type={type} placeholder={label} id={name} name={name} className={className} onChange={onChange}/>
        </div>
    )
}

export default Input;