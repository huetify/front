export default function Body({ children, className }) {
    return (
        <div className="body">
            <div className={`body__wrapper ${className || ''}`}>
                { children }
            </div>
        </div>
    )
}