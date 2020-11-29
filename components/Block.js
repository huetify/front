export default function Block({ className, children }) {
    return (
        <div className={`block ${className || ''}`}>
            { children }
        </div>
    )
}