import { Outlet } from "@tanstack/react-location";
import NavigationLink from "../../components/NavigationLink";

export default function Navigation() {
    return (
        <aside>
            <header>
                <h1>D&D Character manager</h1>
                <nav className="flex gap-5">
                    <NavigationLink to="/home" label="Home" />
                    <NavigationLink to="/characters" label="Characters" />
                    <NavigationLink to="/classes" label="Classes" />
                    <NavigationLink to="/items" label="Magic Items" />
                </nav>
            </header>
        </aside>

    )
}