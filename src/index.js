import {render} from "react-dom";
import {HashRouter} from "react-router-dom";
import React from "react";
import {Route, Routes} from "react-router";
import './index.css'
import {Provider} from "react-redux";
import Store from "./Redux/Store";
import MainManuScreen from "./components/Screens/MainManuScreen";
import ClickerScreen from "./components/Screens/ClickerScreen";
import ShopScreen from "./components/Screens/Shop/ShopScreen";
import RatingScreen from "./components/Screens/RatingScreen";
import SettingsScreen from "./components/Screens/SettingsScreen";
import BalanceScreen from "./components/Screens/BalanceScreen";
import ClothesScreen from "./components/Screens/Shop/ClothesScreen";
import GadgetsScreen from "./components/Screens/Shop/GadgetsScreen";
import RealEstateScreen from "./components/Screens/Shop/RealEstateScreen";
import VehiclesScreen from "./components/Screens/Shop/VehiclesScreen";
import ActivityScreen from "./components/Screens/Activity/ActivityScreen";
import WorkScreen from "./components/Screens/Activity/WorkScreen";
import EducationScreen from "./components/Screens/Activity/EducationScreen";
import BusinessScreen from "./components/Screens/Activity/BusinessScreen";
import MiningScreen from "./components/Screens/Activity/MiningScreen";
import CasinoScreen from "./components/Screens/Activity/CasinoScreen";
import GamesScreen from "./components/Screens/Activity/GamesScreen";
import WorkListScreen from "./components/Screens/Activity/WorkListScreen";
import LoadContent from "./Util/LoadContent";
import Profile from "./components/Screens/Profile/ProfileScreen";
import GadgetTypesScreen from "./components/Screens/Shop/GadgetTypesScreen";
import PhonesScreen from "./components/Screens/Shop/PhonesScreen";
import ComputersScreen from "./components/Screens/Shop/ComputersScreen";
import VehicleTypesScreen from "./components/Screens/Shop/VehicleTypesScreen";
import CarsScreen from "./components/Screens/Shop/CarsScreen";
import AirplancesScreen from "./components/Screens/Shop/AirplancesScreen";
import HelicoptersScreen from "./components/Screens/Shop/HelicoptersScreen";
import YachtsScreen from "./components/Screens/Shop/YachtsScreen";

// LoadContent()
const rootElement = document.getElementById("root");

window.store = Store

render(
    <Provider store={Store}>
        <HashRouter>
            <Routes>
                <Route path={"/"} element={<MainManuScreen/>}/>
                <Route path={"/profile"} element={<Profile/>}/>
                <Route path={"/balance"} element={<BalanceScreen/>}/>
                <Route path={"/clicker"} element={<ClickerScreen/>}/>
                <Route path={"/shop"} element={<ShopScreen/>}/>
                <Route path={"/activity"} element={<ActivityScreen/>}/>
                <Route path={"/rating"} element={<RatingScreen/>}/>
                <Route path={"/settings"} element={<SettingsScreen/>}/>

                <Route path={"/clothes"} element={<ClothesScreen/>}/>
                <Route path={"/gadgets"} element={<GadgetsScreen/>}/>
                <Route path={"/gadgets/types"} element={<GadgetTypesScreen/>}/>
                <Route path={"/gadgets/phones"} element={<PhonesScreen/>}/>
                <Route path={"/gadgets/computers"} element={<ComputersScreen/>}/>

                <Route path={"/real-estate"} element={<RealEstateScreen/>}/>

                <Route path={"/vehicles/types"} element={<VehicleTypesScreen/>}/>
                <Route path={"/vehicles/cars"} element={<CarsScreen/>}/>
                <Route path={"/vehicles/airplanes"} element={<AirplancesScreen/>}/>
                <Route path={"/vehicles/helicopters"} element={<HelicoptersScreen/>}/>
                <Route path={"/vehicles/yachts"} element={<YachtsScreen/>}/>


                <Route path={"/work"} element={<WorkScreen/>}/>
                <Route path={"/work-list"} element={<WorkListScreen/>}/>
                <Route path={"/education"} element={<EducationScreen/>}/>
                <Route path={"/business"} element={<BusinessScreen/>}/>
                <Route path={"/mining"} element={<MiningScreen/>}/>
                <Route path={"/casino"} element={<CasinoScreen/>}/>
                <Route path={"/games"} element={<GamesScreen/>}/>

            </Routes>
        </HashRouter>
    </Provider>,
    rootElement
);
