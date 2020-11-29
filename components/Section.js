export default function Section({ children, className }) {
    return (
        <div className={`section ${className || ''}`}>
            { children }
        </div>
    )
}