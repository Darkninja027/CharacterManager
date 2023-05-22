import classNames from "classnames";
import { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form"
import { AddIcon } from "../../../../common/icons/SvgList";
import Card from "../../../Card";
import Button from "../../Button";
import TextArea from "../../TextArea";

type NotesType = {
    id: number,
    title: string,
    content: string
}

type NoteComponentType = {
    notes: noteDefinition
}

type noteDefinition = {
    [key: string]: NotesType
}
export default function NotesTab() {
    const methods = useFormContext();
    const { watch, control } = methods;

    const { fields, append, remove, update } = useFieldArray({
        control,
        name: "notes",
        keyName: "notesId"
    })
    const [id] = watch(["id"])
    console.log(fields)
    // let Notes: NotesType[] = [
    //     {
    //         id: 1,
    //         title: "This is a title",
    //         content: "content"
    //     },
    //     {
    //         id: 2,
    //         title: "This is a title 2",
    //         content: "content 2"
    //     },
    // ]
    // const [selectedNote, setSelectedNote] = useState<NotesType>(fields[0])
    return (
        <div className="flex h-full gap-2">
            <div className="h-full w-4/12 border-r-4 flex flex-col justify-between">
                <div>
                    {/* {fields.map((note, index) => {
                        return (
                            <div className={classNames(
                                "hover:cursor-pointer hover:bg-dnd-secondary-200 py-2 px-3 rounded-lg hover:shadow-lg hover:shadow-black/25",
                                {
                                    "font-bold": selectedNote.id === note.id
                                }
                            )} onClick={(e) => {
                                e.preventDefault();
                                setSelectedNote(fields[index])
                            }}>{note.title}</div>
                        )
                    })} */}
                </div>
                <div>
                    <Button type="button" size="SMALL" buttonType="PRIMARY" disabled={!id} content={<div className="flex items-center">
                        <span className="w-4 h-4"><AddIcon /></span>
                        <p>Add Note</p>
                    </div>} onClick={() => {
                        console.log("it works")
                    }} />
                </div>
            </div>
            <div className="h-full w-8/12">
                {/* <TextArea unattached name="" className="h-full" rows={33} label={selectedNote?.title} defaultValue={selectedNote.content} /> */}
            </div>
        </div>
    )
}