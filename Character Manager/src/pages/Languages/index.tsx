import { Languages } from "@types"
import { pascalCamelSplit } from "../../common/util/stringFormatting"
import PageHeader from "../../components/PageHeader"
import { useGetAllLanguagesQuery } from "./languages.generated"

export default function LanguagesPage() {
    const { isLoading, data: { allLanguages } = {} } = useGetAllLanguagesQuery()
    allLanguages?.sort((a: Languages, b: Languages) => a.name < b.name ? -1 : 1)
    return (
        <>
            <PageHeader />
            <div className="grid grid-cols-12 grid-flow-row justify-items-center gap-2">
                {allLanguages && allLanguages.map(lang => {
                    return (
                        <p className="w-full flex col-span-2 bg-slate-200 font-bold justify-center items-centerpx-2 py-1 border rounded-full">{`${pascalCamelSplit(lang.name)}`}</p>
                    )
                })}

            </div>
        </>


    )
}