import { Outlet } from "@tanstack/react-location";
import NavigationLink from "../../../components/NavigationLink";

export default function Navigation() {
    return (
        <aside className="w-[300px] bg-dnd-red-700 min-h-screen grow-1 flex z-10">
            <div className="w-24 h-full bg-dnd-red-900 grow-0 drop-shadow-2xl" />
            <div className="w-full">
                <div className="mt-10 pl-5 mb-20">
                    <p className="text-2xl font-bold text-dnd-brown-100 whitespace-wrap">CHARACTER MANAGER</p>
                </div>
                <nav className="flex flex-col gap-1">
                    <NavigationLink to="/home" label="HOME" />
                    <NavigationLink to="/characters" label="CHARACTERS" menu={{
                        "Players": "playerCharacters",
                        "NPCS": "npc"
                    }} />
                    <NavigationLink to="/worlds" label="WORLDS" menu={{
                        "Locations": "locations"
                    }} />
                    <NavigationLink to="/classes" label="CLASSES" />
                    <NavigationLink to="/items" label="MAGIC ITEMS" menu={{
                        "Armor": "/armor",
                        "Potion": "/potion",
                        "Ring": "/ring",
                        "Rod": "/rod",
                        "Scroll": "/scroll",
                        "Staff": "/staff",
                        "Wand": "/wand",
                        "Weapon": "/weapon",
                        "Wonderous": "/wonderous",
                    }} />
                    <NavigationLink to="/languages" label="LANGUAGES" />
                    <NavigationLink to="/sink" label="SINK" menu={{
                        "Test 1": "/test1",
                        "Test 2": "/test2",
                        "Test 3": "/test3",
                        "Test 4": "/test4",
                        "Test 5": "/test5",
                    }} />
                </nav>
            </div>


        </aside>

    )
}