import Input from "../components/Input";
import {useState} from "react";
import Form from "../components/Form";
import Head from "next/head";
import getRawBody from "raw-body";
import axios from "axios";
import Cookies from 'cookies'
import {goToHome, goToLogin, isAuth, setJWT} from "../internal/auth";

export default function Login(props) {
    const [username, setUsername] = useState(props.post["username"]);
    const [password, setPassword] = useState("");

    return (
        <div className="login">
            <Head>
                <title>Login - Huetify</title>
            </Head>
            <h1 className="logo logo--large bounce"><span>Hue</span>tify</h1>
            <div className="block login-content bounce">
                <h2 className="title">Login</h2>
                <div className="seperator margin-top--little" />
                <Form method="POST" action="" error={props.error} submitText="Sign in">
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

                    </div>
                </Form>
            </div>
        </div>
    )
}

export async function getServerSideProps({req, res}) {
    let props = {
        props: {
            error: "",
            post: {
                username: "",
                password: "",
            },
            data: [],
        }
    }

    if(isAuth(req, res)) {
        return goToHome()
    }

    if(req.method === "POST") {
        const body = await getRawBody(req);
        const queries = body.toString("utf-8").split("&");
        for(let i = 0; i < queries.length; i++) {
            const v = queries[i].split("=");
            props.props.post[v[0]] = v[1];
        }
        return await axios
            .post(process.env.api + '/credentials', {
                    username: props.props.post["username"],
                    password: props.props.post["password"],
                }
            )
            .then(r => {
                setJWT(req, res, r.data['access_token'])
                return {
                    redirect: {
                        destination: '/',
                        permanent: false,
                    },
                }
            })
            .catch(err => {
                props.props.error = err.response.data.message;
                return props;
            });
    }

    return props;
}