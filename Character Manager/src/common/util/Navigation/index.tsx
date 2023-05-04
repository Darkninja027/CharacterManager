import { Outlet } from "@tanstack/react-location";
import NavigationLink from "../../../components/NavigationLink";

export default function Navigation() {
    return (
        <aside className="w-[300px] bg-dnd-red-700 min-h-screen grow-1 flex">
            <div className="w-24 h-full bg-dnd-red-900 grow-0 drop-shadow-2xl" />
            <div className="w-full">
                <div className="mt-10 pl-5 mb-20">
                    <p className="text-2xl font-bold text-dnd-brown-100 whitespace-wrap">CHARACTER MANAGER</p>
                </div>
                <nav className="flex flex-col gap-1">
                    <NavigationLink to="/home" label="HOME" />
                    <NavigationLink to="/characters" label="CHARACTERS" menu={{
                        "Players": "playerCharacters",
                        "NPCS": "npcs"
                    }} />
                    <NavigationLink to="/classes" label="CLASSES" />
                    <NavigationLink to="/items" label="MAGIC ITEMS" />
                    <NavigationLink to="/languages" label="LANGUAGES" />
                    <NavigationLink to="/sink" label="SINK" menu={{
                        "Test 1": "/test1"
                    }} />
                </nav>
            </div>


        </aside>

    )
}