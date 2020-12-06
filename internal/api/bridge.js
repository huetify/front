import axios from "axios";

export function discoverBridges() {
    return axios.get(process.env.api + '/bridges/discover')
}

export function getInstanceBridges() {
    return axios.get(process.env.api + '/bridges/instance')
}