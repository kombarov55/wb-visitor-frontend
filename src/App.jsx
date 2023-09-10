import React from "react";
import {HashRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import MainManuScreen from "./components/Screens/MainManuScreen";
import Profile from "./components/Screens/Profile";
import PageFooter from "./components/UI/Page/PageFooter";
import ProfileScreen from "./components/Screens/Profile/ProfileScreen";

export default ({}) => {
    // const navigate = useNavigate();

    return (
        <div style={{
            width: "100vw",
            height: "96vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",

            marginTop: "2vh",
            marginBottom: "2vh"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                gap: "3vw",
                justifyContent: "flex-end",

                width: "95vw"
            }}>
                header
            </div>
            <HashRouter>
                <Routes>
                    <Route path={"/"} element={<Profile/>}/>
                    <Route path={"/main-menu"} element={<MainManuScreen/>}/>
                    <Route path={"/profile"} element={<ProfileScreen/>}/>
                </Routes>
            </HashRouter>
            <PageFooter/>
        </div>
    )
}
