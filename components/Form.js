import Btn from "./Btn";

export default function Form({ children, className }) {
    return (
        <form className={`form ${className || ''}`}>
            <div className="form__body">
                { children }
            </div>
            <div className="form__submit">
                <Btn type="success" className="btn--all margin-top--large">Submit</Btn>
            </div>
        </form>
    )
}