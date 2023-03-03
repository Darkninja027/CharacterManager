import { Outlet } from "@tanstack/react-location";
import NavigationLink from "../../components/NavigationLink";

export default function Navigation() {
    return (
        <aside className="w-[250px] bg-slate-400 h-screen p-3 grow-0">
            <header className="">D&D Character manager</header>
            <nav className="flex flex-col gap-1">
                <NavigationLink to="/home" label="Home" />
                <NavigationLink to="/characters" label="Characters" />
                <NavigationLink to="/classes" label="Classes" />
                <NavigationLink to="/items" label="Magic Items" />
            </nav>
        </aside>

    )
}