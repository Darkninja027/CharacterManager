import usePopulateRaces from "../../util/Hooks/Sync/PopulateRaces"

export default function SyncPage() {
    const populateData = usePopulateRaces();

    return (
        <button onClick={() => populateData.mutate()}>Sync Races</button>
    )
}

