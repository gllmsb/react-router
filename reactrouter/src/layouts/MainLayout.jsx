import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar/Navbar"
import { Header } from "../components/Header/Header"

export const MainLayout = () => {
    return(
        <>
        <Header/>
        <Navbar/>
        <main className={StyleSheet.mainStyle}>
            <Outlet/>
        </main>
        </>
    )
}