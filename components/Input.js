export default function Input({
                                  id, type, placeholder,
                                  value, onChange, name,
                                  className, minLength, maxLength
}) {

    return (
        <div className={`input ${className || ''}`}>
            <label className="input__label" for={id}>
                <input
                    className="input__field"
                    id={id}
                    type={type}
                    name={name}
                    placeholder=""
                    value={value}
                    onChange={onChange}
                    minLength={minLength}
                    maxLength={maxLength}
                />
                <div className="input__placeholder"><span>{ placeholder }</span></div>
            </label>

        </div>
    )
}