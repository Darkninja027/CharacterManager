import { ReactNode } from "react"
import { TabDefinition, Tabs } from "../../components/Tabs"
import { Page } from "../../components/Page"
import Tilt from 'react-parallax-tilt';
import MagicItemCard from "../../components/MagicItemCard";
import { MagicItemCategory, MagicItemRarity } from "@types";
import ItemForm from "../../components/Form/ItemForm";

export function Kitchensink() {

    const items = [
        { name: "str", skills: ["Saving Throw", "Athletics"] },
    ]
    const tabs: TabDefinition = {
        "Test": <p>yeet</p>,
        "john": <p>Johnno</p>
    }
    return (
        <Page title="Sink">

            <div className="flex mt-1">
                <p className="bg-dnd-brown-100 w-24 h-12" />
                <p className="bg-dnd-brown-200 w-24 h-12" />
                <p className="bg-dnd-brown-300 w-24 h-12" />
                <p className="bg-dnd-brown-400 w-24 h-12" />
                <p className="bg-dnd-brown-500 w-24 h-12" />
                <p className="bg-dnd-brown-600 w-24 h-12" />
                <p className="bg-dnd-brown-700 w-24 h-12" />
                <p className="bg-dnd-brown-800 w-24 h-12" />
                <p className="bg-dnd-brown-900 w-24 h-12" />
            </div>
            <div className="flex mt-1">
                <p className="bg-dnd-red-100 w-24 h-12" />
                <p className="bg-dnd-red-200 w-24 h-12" />
                <p className="bg-dnd-red-300 w-24 h-12" />
                <p className="bg-dnd-red-400 w-24 h-12" />
                <p className="bg-dnd-red-500 w-24 h-12" />
                <p className="bg-dnd-red-600 w-24 h-12" />
                <p className="bg-dnd-red-700 w-24 h-12" />
                <p className="bg-dnd-red-800 w-24 h-12" />
                <p className="bg-dnd-red-900 w-24 h-12" />
            </div>
            <div className="flex mt-1">
                <p className="bg-dnd-orange-100 w-24 h-12" />
                <p className="bg-dnd-orange-200 w-24 h-12" />
                <p className="bg-dnd-orange-300 w-24 h-12" />
                <p className="bg-dnd-orange-400 w-24 h-12" />
                <p className="bg-dnd-orange-500 w-24 h-12" />
                <p className="bg-dnd-orange-600 w-24 h-12" />
                <p className="bg-dnd-orange-700 w-24 h-12" />
                <p className="bg-dnd-orange-800 w-24 h-12" />
                <p className="bg-dnd-orange-900 w-24 h-12" />
            </div>
            <div className="flex mt-1">
                <p className="bg-dnd-green-100 w-24 h-12" />
                <p className="bg-dnd-green-200 w-24 h-12" />
                <p className="bg-dnd-green-300 w-24 h-12" />
                <p className="bg-dnd-green-400 w-24 h-12" />
                <p className="bg-dnd-green-500 w-24 h-12" />
                <p className="bg-dnd-green-600 w-24 h-12" />
                <p className="bg-dnd-green-700 w-24 h-12" />
                <p className="bg-dnd-green-800 w-24 h-12" />
                <p className="bg-dnd-green-900 w-24 h-12" />
            </div>
            <div className="flex mt-1">
                <p className="bg-dnd-lime-100 w-24 h-12" />
                <p className="bg-dnd-lime-200 w-24 h-12" />
                <p className="bg-dnd-lime-300 w-24 h-12" />
                <p className="bg-dnd-lime-400 w-24 h-12" />
                <p className="bg-dnd-lime-500 w-24 h-12" />
                <p className="bg-dnd-lime-600 w-24 h-12" />
                <p className="bg-dnd-lime-700 w-24 h-12" />
                <p className="bg-dnd-lime-800 w-24 h-12" />
                <p className="bg-dnd-lime-900 w-24 h-12" />
            </div>
            <p>Skill Cards</p>
            <div className="flex gap-10">
                <section className="flex flex-col gap-10 w-max">
                    {items.map((item) => {
                        return (
                            <div className="flex w-full">
                                <div className="flex flex-col items-center">
                                    <div className="bg-gray-400 w-24 h-24  border-y-4 border-l-4 p-1  border-black border-double rounded-l-lg gap-1">

                                        <label className="h-full flex flex-col">
                                            <p className="w-full text-center text-sm">{item.name.toUpperCase()}</p>
                                            <input className="bg-transparent outline-0 text-5xl font-bold text-center w-full h-full" type="number" defaultValue={0} />
                                        </label>

                                    </div>
                                    <input className="w-12 bg-gray-400 border-4 border-double rounded-lg mt-[-10px] border-black outline-0 text-center" type="number" defaultValue={0} />
                                </div>

                                <div className="border-4 border-black border-double p-2 rounded-r-lg rounded-bl-lg w-52 bg-gray-400 min-h-[150px]">
                                    {item.skills.map(skill => {
                                        return (
                                            <label className="flex items-center justify-between gap-3 w-full">
                                                <div className="flex items-center gap-2">
                                                    <input className="outline-0 w-6 rounded-lg text-center text-sm border-b-2 border-black bg-transparent" type="number" />
                                                    <p className="text-sm">{skill}</p>
                                                </div>
                                                <div className="flex gap-1">
                                                    <input type="checkbox" />
                                                    <input type="checkbox" />
                                                </div>
                                            </label>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </section>
            </div>
            <div className="flex gap-10">
                <div>
                    <p>Armor icon</p>
                    <div className="w-24 h-24 flex flex-col items-center">
                        <div className="absolute flex leading-none flex-col items-center w-12 mt-4">
                            <p className="whitespace-nowrap text-sm z-10">Armor Class</p>
                            <input className="outline-0 bg-transparent text-center w-full text-3xl font-bold" />
                        </div>
                        <svg viewBox="0 0 466.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                <path d="M2235 5054 c-611 -446 -1297 -663 -2065 -653 l-165 2 1 -344 c4 -987 164 -1772 495 -2439 329 -661 808 -1140 1464 -1462 88 -43 206 -96 263 -119 l102 -40 103 41 c583 234 1086 618 1448 1105 423 570 674 1309 754 2215 20 225 30 652 20 850 l-7 155 -206 1 c-372 2 -707 73 -1132 241 -298 118 -702 327 -963 498 -22 14 -28 11 -112 -51z m218 -308 c495 -298 944 -480 1368 -556 132 -23 356 -39 476 -32 l81 4 7 -57 c12 -93 -2 -724 -19 -894 -124 -1202 -574 -2046 -1376 -2580 -198 -131 -596 -331 -660 -331 -27 0 -180 63 -325 134 -869 426 -1414 1200 -1629 2311 -68 352 -96 649 -103 1101 l-6 341 249 6 c259 6 395 20 599 62 377 78 763 250 1095 488 58 42 108 76 113 76 4 1 62 -32 130 -73z" />
                            </g>
                        </svg>
                    </div>
                </div>
                <div>
                    <p>Square container</p>
                    <div className="w-24 h-24 bg-gray-400 rounded-lg border-4 border-black border-double flex flex-col items-center p-2">
                        <p>Initiative</p>
                        <input className="w-full h-full outline-0 bg-transparent text-3xl font-bold text-center" defaultValue={0} />
                    </div>
                </div>

                <div className="">
                    <header>Health container</header>
                    <div className="bg-gray-400 w-48 h-24 rounded-full border-4 border-black border-double">
                        <div className="w-24 h-full border-r-4 border-black border-double">

                        </div>
                    </div>
                </div>
            </div>

            <div className="w-5/12 bg-gray-200 p-2 rounded-lg mt-5">
                <Tabs tabs={tabs} />
            </div>

            <div className="flex gap-3 flex-wrap mt-10">
                <MagicItemCard item={{
                    id: 1,
                    name: "nya",
                    description: "This weapon is of celestial origin, and very few exist. It is a one handed longsword with an otherworldly, silver colored blade. The edges glow a light blue when swung. The cross guard is relatively wide with colorless, blue, red and yellow diamonds decorating it.",
                    category: MagicItemCategory.Weapon,
                    rarity: MagicItemRarity.Legendary,
                    property1: "This sword deals additional magical force damage equal to 2d6 + your Dexterity modifier.",
                    property2: "On a successful critical hit, this weapon deals an additional 2d8 force damage.",
                    property3: "If the wielder of this sword is not using a shield, and has proficiency in Persuasion; they receive a +1 bonus to their AC.",
                }} />

            </div>

            <div className="shadow-2xl shadow-black/25 bg-dnd-brown-200/80 w-min rounded-lg mt-10 p-5">
                <header className="font-black text-2xl mb-5">Card</header>
                <ItemForm />
            </div>

        </Page>

    )
}