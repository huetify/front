import Btn from "./Btn";
import {ReportProblem} from "@material-ui/icons";

export default function Form({ children, className, method, action, error, submitText }) {
    return (
        <form className={`form ${className || ''}`} method={method} action={action}>
            { error && (
                <div className="form__error">
                    <ReportProblem />
                    { error } !
                </div>
            ) }
            <div className="form__body">
                { children }
            </div>
            <div className="form__submit">
                <Btn type="success" className="btn--all margin-top--large">{submitText || 'Submit'}</Btn>
            </div>
        </form>
    )
}