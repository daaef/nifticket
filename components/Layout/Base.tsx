import Navbar from './Navbar'
import DashNav from '../Navbar'
import Footer from "../Footer";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Sidebar from "./Sidebar";
import styles from "../styles/Home.module.css";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };
const Base = ({children}: { children: JSX.Element }) => {
    const router = useRouter()
    const [home, setHome] = useState(true)
    useEffect(() => {
        setHome(router.pathname === "/")
    }, [router])
    return (
        <>
            {home && <div>
                <Navbar/>
                <Switch {...label} defaultChecked />
                <Switch {...label} />
                <Switch {...label} disabled defaultChecked />
                <div className="flex flex-col justify-between min-h-screen">
                    <main>{children}</main>
                </div>
            </div>}
            {
                !home &&
                <div className="flex w-full">
                    <Sidebar/>
                    <div className="dash-contents">
                        <DashNav />
                        <div className="w-full dash-content h-screen">
                            <main>{children}</main>
                        </div>
                    </div>
                </div>
            }
            <Footer/>
        </>
    )
}

export default Base
