import { useDeleteAllItemsMutation } from "./sync.generated";


export default function SyncPage() {

    const clearAllItemsMutation = useDeleteAllItemsMutation();

    const x = () => {
        clearAllItemsMutation.mutate({})
    }
    return (
        <div className="flex flex-col gap-5 p-5">

            <button className="p-3 bg-gray-400 rounded-lg" onClick={() => x()}>clear  items</button>
            {/* <button className="p-3 bg-gray-400 rounded-lg" onClick={() => clearRaces.mutate()}>Clear Races</button> */}
        </div>
    )
}

