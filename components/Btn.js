export default function Btn(props) {
    return  (
        <button
            className={
                `btn ${props.rounded ? 'btn--rounded' : ''} ${props.icon ? 'btn--icon' : ''} btn__${props.type || 'default'} ${props.className || ''}`
            }
        >
            { props.children }
        </button>
    )
}