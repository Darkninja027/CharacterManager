export function Kitchensink() {

    const items = [
        { name: "str", skills: ["Saving Throw", "Athletics"] },
        { name: "dex", skills: ["Saving Throw", "Acrobatics", "Sleight of Hand", "Stealth"] },
        { name: "con", skills: ["Saving Throw"] },
        { name: "int", skills: ["Saving Throw", "Arcana", "History", "Investigation", "Nature", "Religion"] },
        { name: "wis", skills: ["Saving Throw", "Animal Handling", "Insight", "Medicine", "Perception", "Survival"] },
        { name: "cha", skills: ["Saving Throw", "Deception", "Intimidation", "Performance", "Persuasion"] },
    ]
    return (
        <>
            <h1>Style 1</h1>
            <hr />
            <br />
            <div className="flex gap-10">
                <section className="flex flex-col gap-5 w-max">
                    {items.map((item) => {
                        return (
                            <div className="bg-gray-400  border-4 p-1  border-black border-double rounded-lg w-full flex gap-1">
                                {/* attribute */}
                                <div className="w-32 border-r-4 border-black border-double">
                                    <label className="h-full flex flex-col">
                                        <p className="w-full text-center text-sm">{item.name.toUpperCase()}</p>
                                        <input className="bg-transparent outline-0 text-5xl font-bold text-center w-full h-full" type="number" defaultValue={0} />
                                    </label>
                                    <input className="w-12 h-8 absolute ml-[18px] mt-[-10px] bg-gray-400 border border-black rounded-full outline-0 text-center" type="number" defaultValue={0} />
                                </div>
                                {/* skills */}
                                <div className=" flex flex-col gap-1 p-1 w-full">
                                    {item.skills.map(skill => (
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
                                    ))}

                                </div>
                            </div>
                        )
                    })}
                </section>
                <section className="flex flex-col gap-10 w-max">
                    {items.map((item) => {
                        return (
                            <div className="flex w-full">
                                <div>
                                    <div className="bg-gray-400 w-24 h-24  border-y-4 border-l-4 p-1  border-black border-double rounded-tl-lg w-full gap-1">

                                        <label className="h-full flex flex-col">
                                            <p className="w-full text-center text-sm">{item.name.toUpperCase()}</p>
                                            <input className="bg-transparent outline-0 text-5xl font-bold text-center w-full h-full" type="number" defaultValue={0} />
                                        </label>

                                    </div>
                                    <input className="w-24 bg-gray-400 border-l-4 border-b-4 border-double rounded-bl-lg border-black outline-0 text-center" type="number" defaultValue={0} />
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
        </>

    )
}