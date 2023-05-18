import { AlignmentEnum, SizeEnum } from "@types";
import { useFormContext } from "react-hook-form"
import { formatString } from "../../../../common/util/stringFormatting";
import Input from "../../Input";
import Select from "../../Select";

export default function CharactersTab() {

    const genders = [
        { id: "male", name: "Male" },
        { id: "female", name: "Female" },
        { id: "other", name: "Other" },
    ]

    const alignments = Object.values(AlignmentEnum).map((align, index) => {
        return { id: align, name: formatString(align) }
    })

    const sizes = Object.values(SizeEnum).reverse().map((size, index) => {
        return { id: size, name: formatString(size) }
    })

    const methods = useFormContext();
    return (
        <>
            <Input methods={methods} name="weight" label="Weight" type="number" />
            <Input methods={methods} name="height" label="Height" />
            <Input methods={methods} name="hair" label="Hair" />
            <Input methods={methods} name="eyes" label="Eyes" />
            <Input methods={methods} name="skin" label="Skin" />
            <Input methods={methods} name="age" label="Age" type="number" />
            <Select methods={methods} name="gender" options={genders} label="Gender" />
            <Select methods={methods} name="alignment" options={alignments} label="Alignment" />
            <Select methods={methods} name="size" options={sizes} label="Size" />
        </>
    )
}