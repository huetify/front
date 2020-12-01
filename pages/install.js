import Input from "../components/Input";
import {useState} from "react";
import Form from "../components/Form";
import Select from "../components/Select";
import Head from "next/head";
import getRawBody from "raw-body";
import axios from "axios";
import cookieCutter from 'cookie-cutter';

export default function Install(props) {
    const [title, setTitle] = useState(props.post["title"]);
    const [username, setUsername] = useState(props.post["username"]);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [language, setLanguage] = useState(props.post["language"]);
    const [analytics, setAnalytics] = useState(props.post["analytics"]);

    return (
        <div className="install">
            <Head>
                <title>Installation - Huetify</title>
            </Head>
            <h1 className="logo logo--large bounce"><span>Hue</span>tify</h1>
            <div className="block install-content bounce">
                <h2 className="title">Welcome</h2>
                <div className="seperator margin-top--little" />
                <p className="install__desc">
                    Welcome to the Huetify installation process. Just fill in the information below and it's done..
                    You just have to take advantage of the features of Huetify. 🥳🎉
                </p>
                <h2 className="title">Information needed</h2>
                <div className="seperator margin-top--little" />
                <Form method="POST" action="" error={props.error}>
                    <div className="form__content">
                        <Input
                            id="username"
                            placeholder="Username"
                            name="username"
                            type="text"
                            value={username}
                            minLength={3}
                            maxLength={45}
                            onChange={e => setUsername(e.target.value)}
                        />
                        <Input
                            id="password"
                            placeholder="Password"
                            name="password"
                            type="password"
                            value={password}
                            minLength={6}
                            maxLength={32}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Input
                            id="cpassword"
                            placeholder="Confirm password"
                            name="cpassword"
                            type="password"
                            value={confirmPassword}
                            minLength={6}
                            maxLength={32}
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
                            minLength={3}
                            maxLength={32}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Select
                            id="language"
                            placeholder="Language"
                            name="language"
                            value={language}
                            onChange={e => setLanguage(e.target.value)}
                        >
                            <option value="en">English</option>
                            {/*<option value="fr">Français</option>*/}
                        </Select>
                        <Select
                            id="analytics"
                            placeholder="Analytics (only internal errors are send)"
                            name="analytics"
                            value={analytics}
                            onChange={e => setAnalytics(e.target.value)}
                        >
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </Select>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export async function getServerSideProps({req}) {
    let props = {
        props: {
            error: "",
            post: {
                username: "admin",
                password: "",
                title: "",
                language: "en",
                analytics: true,
            },
            data: [],
        }
    }

    const isAvailable = await axios.get(process.env.api + "/install")
        .then(() => { return true })
        .catch(() => { return false });

    if(!isAvailable) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    if (req.method === "POST") {
        const body = await getRawBody(req);
        const queries = body.toString("utf-8").split("&");
        for(let i = 0; i < queries.length; i++) {
            const v = queries[i].split("=");
            props.props.post[v[0]] = v[1];
        }
        if(props.props.post["password"] !== props.props.post["cpassword"]) {
            props.props.error = "passwords are not the same";
            return props;
        }

        if(
            props.props.post["username"] === "" ||
            props.props.post["password"] === "" ||
            props.props.post["title"] === "" ||
            props.props.post["language"] === "" ||
            props.props.post["analytics"] === ""
        ) {
            props.props.error = "all fields need to be filled";
            return props;
        }

        return await axios
            .post(process.env.api + '/install', {
                username: props.props.post["username"],
                password: props.props.post["password"],
                title: props.props.post["title"],
                language: props.props.post["language"],
                analytics: props.props.post["analytics"],
                }
            )
            .then(() => {
                return {
                    redirect: {
                        destination: '/',
                        permanent: false,
                    },
                }
            })
            .catch(err => {
                props.props.error = err.body.message;
                return props;
            });
    }

    return props;
}