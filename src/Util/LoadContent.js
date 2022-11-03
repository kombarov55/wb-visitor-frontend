import axios from "axios";
import Links from "./Links";
import {set} from "../Redux/ContentSlice"

export default function() {
    axios.get(Links.getContent)
        .then(rs => window.store.dispatch(set(rs.data)))
}