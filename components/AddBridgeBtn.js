import Block from "./Block";
import Loading from "./Loading";
import {useState} from "react";

export default function AddBridgeBtn({ onClick, loading, children }) {
    return (
        <Block className="page-add page-add__bridge-add">
            <h3 className="bridge-add__ip">{ children }</h3>
            <button className="bridge-add__btn" onClick={onClick} disabled={loading}>
                {loading ? <Loading/> : 'Add'}
            </button>
        </Block>
    )
}