import { useClearRaces, usePopulateRaces } from "../../util/Hooks/Sync/Races"

export default function SyncPage() {
    const populateData = usePopulateRaces();
    const clearRaces = useClearRaces();

    return (
        <div className="flex gap-5 p-5">

            <button className="p-3 bg-gray-400 rounded-lg" onClick={() => populateData.mutate()}>Sync Races</button>
            <button className="p-3 bg-gray-400 rounded-lg" onClick={() => clearRaces.mutate()}>Clear Races</button>
        </div>
    )
}

