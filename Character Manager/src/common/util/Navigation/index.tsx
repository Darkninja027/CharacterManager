import { Outlet } from "@tanstack/react-location";
import NavigationLink from "../../../components/NavigationLink";

export default function Navigation() {
    return (
        <aside className="w-[250px] bg-cadet-300 min-h-screen grow-1">
            <header className="flex flex-col items-center mb-5">
                <img src="src\common\assets\logo.png" alt="logo" />
                <p className="text-2xl font-bold text-eerie-300">Character Manager</p>
            </header>
            <nav className="flex flex-col gap-1">
                <NavigationLink to="/home" label="Home" />
                <NavigationLink to="/characters" label="Characters" menu={{
                    "Players": "playerCharacters",
                    "NPCS": "npcs"
                }} />
                <NavigationLink to="/classes" label="Classes" />
                <NavigationLink to="/items" label="Magic Items" />
                <NavigationLink to="/languages" label="Languages" />
                <NavigationLink to="/sink" label="Kitchen Sink" menu={{
                    "Test 1": "/test1"
                }} />
            </nav>
        </aside>

    )
}