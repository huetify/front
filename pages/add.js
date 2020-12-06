import App from "../components/App";
import {getToken, goToLogin, isAuth} from "../internal/auth";
import Block from "../components/Block";
import {DevicesBridgesV2, SettingsDevices} from "hue-icon";
import {toast} from "react-toastify";
import axios from "axios";
import {useState} from "react";
import AddBridgeBtn from "../components/AddBridgeBtn";

export default function Add(props) {
    const [aBridges, setABridges] = useState(props.bridges)
    const [bridges, setBridges] = useState([])
    const [page, setPage] = useState(0)

    const handleDiscoverBridge = () => {
        axios.get(process.env.api + '/bridges/discover', {
            headers: {"Authorization" : `Bearer ${props.JWT}`}
        })
            .then(resp => {
                setBridges(resp.data)
                setPage(1)
            })
            .catch(err => {
                toast.error(err.response.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
    }

    const setLoadingBridge = (id, bool) => {
        return setBridges(bridges.map((data, key) => {
            if (key === id) return {...data, loading: bool}
            return data
        }));
    }

    const addBridge = (key, data) => {
        toast.dark("waiting for access, please click on the bridge button", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setLoadingBridge(key, true)
        axios.post(process.env.api + '/bridges', {
            "ip_addr": data.internalipaddress,
        }, {
            headers: {"Authorization" : `Bearer ${props.JWT}`},
        })
            .then(resp => {
                setABridges([...aBridges, resp.data])
                setPage(0)
                setLoadingBridge(key, false)
            })
            .catch(err => {
                console.log(err)
                // toast.error(err.response.data.message, {
                //     position: "top-right",
                //     autoClose: 5000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                // });
                setLoadingBridge(key, false)
            })
    }

    return (
        <App className="page-add__wrapper">
            { page === 0 && (
                <Block className="page-add">
                    <div className="page-add__bridge" onClick={handleDiscoverBridge}>
                        <DevicesBridgesV2 />
                        <p className="page-add__bridge-search">
                            <span>discover</span> new bridges
                        </p>
                    </div>
                    <div className="page-add__product">
                        Bridges List
                        <div className="seperator margin-top--little" />
                        { aBridges.length > 0 && aBridges.map((data, key) => (
                            <div key={key} className="page-add__product-list">
                                <div className="page-add__product-item">
                                    <SettingsDevices />
                                    discover new products <span>on <b>{data.name}</b>'s Bridge</span>
                                </div>
                            </div>
                        ) ) }
                        { aBridges.length <= 0 && (
                            <div className="page-add__product-list">
                                <div className="page-add__product-item" onClick={handleDiscoverBridge}>
                                    <SettingsDevices />
                                    Add your first bridge
                                </div>
                            </div>
                        ) }
                    </div>
                </Block>
            )}
            { page === 1 && (
                <div className="page-add page-add--list">
                    <h2 className="page-add__title">{ bridges.length } Bridge(s) discover</h2>
                    { bridges.map((data, key) => (
                        <AddBridgeBtn
                            key={key}
                            onClick={() => addBridge(key, data)}
                            loading={data.loading || false}
                        >
                            { data.internalipaddress } {data.loading || false ? "(please click on the bridge button)" : ""}
                        </AddBridgeBtn>
                    ))}
                </div>
            )}
        </App>
    )
}

export async function getServerSideProps({req, res}) {
    let props = {
        props: {
            bridges: [],
            JWT: getToken(req, res),
        }
    }

    if(!isAuth(req, res)) {
        return goToLogin()
    }


    await axios
        .get(process.env.api + '/bridges/instance', {
        headers: {"Authorization" : `Bearer ${props.props.JWT}`},
        })
        .then(resp => props.props.bridges = resp.data)
        .catch(err => props.props.error = err.response.data.message)

    return props;
}