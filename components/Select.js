export default function Select({ id, type, placeholder, value, onChange, name, className, children }) {

    return (
        <div className={`input ${className || ''}`}>
            <label className="input__label" for={id}>
                <select
                    className="input__field input__field--select"
                    id={id}
                    name={name}
                    placeholder=""
                    value={value}
                    onChange={onChange}
                >
                    { children }
                </select>
                <div className="input__placeholder input__placeholder--select"><span>{ placeholder }</span></div>
            </label>

        </div>
    )
}