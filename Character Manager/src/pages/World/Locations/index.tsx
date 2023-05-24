import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddIcon } from "../../../common/icons/SvgList";
import Card from "../../../components/Card";
import Form from "../../../components/Form";
import Button from "../../../components/formInputs/Button";
import Input from "../../../components/formInputs/Input";
import { Page } from "../../../components/Page";
import PageHeader from "../../../components/PageHeader";

export default function Locations() {
    const methods = useForm<LocationTypesType>()
    type LocationTypesType = {
        name: string
    }

    const OnSubmit: SubmitHandler<LocationTypesType> = (data) => {
        console.log(data)
    }

    const locations: LocationTypesType[] = [
        {
            name: "Tavern"
        },
        {
            name: "Forest"
        }
    ]
    const [hovered, setHovered] = useState<boolean>(false)
    return (

        <Page title="Locations" backButton="../.." buttonText="Add Location" icon={<AddIcon />} onClick={(e) => {
            e.preventDefault()
        }} >
            <div className="flex w-full">
                <Card heading="Location Types" className="w-2/12">
                    <Form methods={methods} onSubmit={OnSubmit} className="mb-8">
                        <div className="flex items-end gap-8">
                            <Input unattached name="" label="Add Location Type" />
                            <Button content="Add" buttonType="PRIMARY" size="MEDIUM" />
                        </div>
                    </Form>
                    <div className="flex flex-col gap-4">
                        {locations.map(type => (
                            <div className="bg-dnd-secondary-200 px-4 py-4 rounded-lg shadow-lg shadow-black/25 font-semibold" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                                <p>{type.name}</p>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </Page>
    )
}