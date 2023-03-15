import { Languages } from "@types"
import { pascalCamelSplit } from "../../common/util/stringFormatting"
import { useGetAllLanguagesQuery } from "../Languages/languages.generated"

export function CharactersPage() {

    return (
        <>
            <div className="grow">
                <div className="flex justify-between items-center">
                    <header className="text-2xl">Characters</header>
                    <button>Add New</button>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <p>character 1</p>
                    <p>character 1</p>
                    <p>character 1</p>
                </div>



            </div>
        </>
    )
}