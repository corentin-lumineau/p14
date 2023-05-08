import { Outlet } from "react-router-dom"

export default function Overlay() {
    return(
        <div className="overlay" id="overlay">
            <Outlet />
        </div>
    )
}