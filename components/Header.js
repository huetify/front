import Btn from "./Btn";
import {ExitToApp, Home, Schedule, Settings, StarRate} from "@material-ui/icons";

export default function Header() {
    return (
        <header className="header">
            <h1 className="logo">
                <span>Hue</span>tify
            </h1>
            <nav className="header__nav">
                <Btn rounded={true} icon={true}><Home /></Btn>
                <Btn rounded={true} icon={true}><Schedule /></Btn>
                <Btn rounded={true} icon={true}><StarRate /></Btn>
                <Btn rounded={true} icon={true}><Settings /></Btn>
                <Btn type="warning" rounded={true} icon={true}><ExitToApp /></Btn>
            </nav>
        </header>
    )
}