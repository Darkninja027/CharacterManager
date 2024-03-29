import NavigationLink from "../../../components/NavigationLink";
import { ArmorIcon, CharacterIcon, HomeIcon, WorldIcon } from "../../icons/SvgList";

export default function Navigation() {
    return (
        <aside className="w-[300px] bg-dnd-primary-100 min-h-screen grow-1 flex z-10">
            <div className="w-20 h-full bg-dnd-primary-400 grow-0 drop-shadow-2xl" />
            <div className="w-full flex flex-col gap-8">
                <div className="flex h-[80px] justify-center items-center">
                    <p className="text-2xl font-bold text-dnd-secondary-100 whitespace-wrap">Dnd Manager</p>
                </div>
                <nav className="flex flex-col items-end gap-1">
                    <NavigationLink to="/home" label="HOME" navIcon={<HomeIcon />} />
                    <NavigationLink to="/characters" label="CHARACTERS" menu={{
                        "Players": "playerCharacters",
                        "NPCS": "npc",
                        "Classes": "classes"
                    }} navIcon={<CharacterIcon />} />
                    <NavigationLink to="/worlds" label="WORLDS" menu={{
                        "Locations": "locations"
                    }} navIcon={<WorldIcon />} />
                    <NavigationLink to="/items" label="MAGIC ITEMS" navIcon={<ArmorIcon />} />
                    <NavigationLink to="/languages" label="LANGUAGES" />
                    <NavigationLink to="/sink" label="SINK" />
                </nav>
            </div>


        </aside>

    )
}