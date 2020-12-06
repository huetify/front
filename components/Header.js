import Btn from "./Btn";
import {Add, ExitToApp, Schedule, Settings, StarRate} from "@material-ui/icons";

export default function Header() {
    return (
        <header className="header">
            <a href="/">
                <h1 className="logo">
                    <span>Hue</span>tify
                </h1>
            </a>
            <nav className="header__nav">
                <a href="/add"><Btn rounded={true} icon={true}><Add /></Btn></a>
                <Btn rounded={true} icon={true}><Schedule /></Btn>
                <Btn rounded={true} icon={true}><StarRate /></Btn>
                <Btn rounded={true} icon={true}><Settings /></Btn>
                <Btn type="warning" rounded={true} icon={true}><ExitToApp /></Btn>
            </nav>
        </header>
    )
}