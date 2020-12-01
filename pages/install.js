import Input from "../components/Input";
import {useState} from "react";
import Form from "../components/Form";

export default function Install() {
    const [title, setTitle] = useState("");
    const [username, setUsername] = useState("admin");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [language, setLanguage] = useState("English");
    const [timezone, setTimezone] = useState("America/Los_Angeles");

    return (
        <div className="install">
            <h1 className="logo logo--large logo--bounce"><span>Hue</span>tify</h1>
            <div className="block install-content">
                <h2 className="title">Welcome</h2>
                <div className="seperator margin-top--little" />
                <p className="install__desc">
                    Welcome to the Huetify installation process. Just fill in the information below and it's done..
                    You just have to take advantage of the features of Huetify. 🥳🎉
                </p>
                <h2 className="title">Information needed</h2>
                <div className="seperator margin-top--little" />
                <Form>
                    <div className="form__content">
                        <Input
                            id="username"
                            placeholder="Username"
                            name="username"
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                        <Input
                            id="password"
                            placeholder="Password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Input
                            id="cpassword"
                            placeholder="Confirm password"
                            name="cpassword"
                            type="password"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className="form__content">
                        <Input
                            id="title"
                            placeholder="Application name"
                            name="title"
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input
                            id="language"
                            placeholder="Language"
                            name="language"
                            type="text"
                            value={language}
                            onChange={e => setLanguage(e.target.value)}
                        />
                        <Input
                            id="timezone"
                            placeholder="Timezone"
                            name="timezone"
                            type="text"
                            value={timezone}
                            onChange={e => setTimezone(e.target.value)}
                        />
                    </div>
                </Form>
            </div>
        </div>
    )
}