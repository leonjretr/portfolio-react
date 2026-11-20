import {Outlet} from "react-router";
import {Shutter} from "./Shutter.tsx";

export const ShutterLayout = () => (
    <>
        <Shutter/>
        <Outlet/>
    </>
);
