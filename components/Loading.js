export default function Loading(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
                margin: "auto",
                background: "0 0",
            }}
            width={30}
            height={30}
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            display="block"
            {...props}
        >
            <circle cx={84} cy={50} r={10} fill="#b81e21">
                <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="0.25s"
                    calcMode="spline"
                    keyTimes="0;1"
                    values="10;0"
                    keySplines="0 0.5 0.5 1"
                    begin="0s"
                />
                <animate
                    attributeName="fill"
                    repeatCount="indefinite"
                    dur="1s"
                    calcMode="discrete"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="#b81e21;#9fbb11;#e5b000;#eb8109;#b81e21"
                    begin="0s"
                />
            </circle>
            <circle cx={16} cy={50} r={10} fill="#b81e21">
                <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="1s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="0;0;10;10;10"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="0s"
                />
                <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="1s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="16;16;16;50;84"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="0s"
                />
            </circle>
            <circle cx={50} cy={50} r={10} fill="#eb8109">
                <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="1s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="0;0;10;10;10"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-0.25s"
                />
                <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="1s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="16;16;16;50;84"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-0.25s"
                />
            </circle>
            <circle cx={84} cy={50} r={10} fill="#e5b000">
                <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="1s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="0;0;10;10;10"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-0.5s"
                />
                <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="1s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="16;16;16;50;84"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-0.5s"
                />
            </circle>
            <circle cx={16} cy={50} r={10} fill="#9fbb11">
                <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="1s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="0;0;10;10;10"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-0.75s"
                />
                <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="1s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="16;16;16;50;84"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-0.75s"
                />
            </circle>
        </svg>
    )
}