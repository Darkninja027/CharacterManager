import { useNavigate } from "@tanstack/react-location";
import { MagicItem, MagicItemCategory, MagicItemInput, MagicItemRarity } from "@types";
import { SubmitHandler, useForm } from "react-hook-form";
import Form from "..";
import { useAlert } from "../../../common/util/Alerts";
import { useCreateMagicItemMutation, useEditMagicItemMutation } from "../../../pages/Items/items.generated";
import Button from "../../formInputs/Button";
import Input from "../../formInputs/Input";
import Radio from "../../formInputs/Radio";
import TextArea from "../../formInputs/TextArea";
import Tilt from 'react-parallax-tilt';
import { useState } from "react";
import classNames from "classnames";
import { formatString } from "../../../common/util/stringFormatting";
import { GetIcon } from "../../MagicItemCard";
import Select from "../../formInputs/Select";

type ItemFormProps = {
    magicItem?: MagicItem
}


export default function ItemForm({ magicItem }: ItemFormProps) {
    const navigate = useNavigate()
    const alert = useAlert();
    const itemMutation = useCreateMagicItemMutation({
        onSuccess: () => {
            methods.reset()
            alert.show('success', "Magic item created")
        },
    });
    const updateMagicItem = useEditMagicItemMutation({
        onSuccess: () => {
            navigate({ to: ".." })
            alert.show("success", "Magic item updated")
        }
    })
    const methods = useForm<MagicItemInput>({
        defaultValues: magicItem ?? {
            rarity: MagicItemRarity.Common,
            category: MagicItemCategory.Armor
        }
    })
    const { watch } = methods
    const [rarity, name, category, description, property1, property2, property3] = watch(["rarity", "name", "category", "description", "property1", "property2", "property3"])
    const onSubmit: SubmitHandler<MagicItemInput> = (data) => {

        if ("id" in data) {
            updateMagicItem.mutate({ magicItem: data })
        }
        else {
            itemMutation.mutate({ magicItem: data });
        }
    }
    const categories = Object.values(MagicItemCategory).map((category, index) => {
        return { id: category, name: formatString(category) }
    })
    const raritiesList = [
        MagicItemRarity.Common,
        MagicItemRarity.Uncommon,
        MagicItemRarity.Rare,
        MagicItemRarity.VeryRare,
        MagicItemRarity.Legendary,
    ]

    const rarities = raritiesList.map((rarity, index) => {
        return { id: rarity, name: formatString(rarity) }
    })

    const cardStyles = classNames(
        "absolute w-full h-full bg-[#ede4ce] backface-hidden p-2 shadow-xl border-4 border-dnd-red-900 hover:cursor-pointer"
    )

    const dotStyles = classNames("w-2.5 h-2.5 rounded-full", {
        "bg-common": rarity == MagicItemRarity.Common,
        "bg-uncommon": rarity == MagicItemRarity.Uncommon,
        "bg-rare": rarity == MagicItemRarity.Rare,
        "bg-veryrare": rarity == MagicItemRarity.VeryRare,
        "bg-legendary": rarity == MagicItemRarity.Legendary,
    })

    const categoryStyle = classNames("font-bold italic text-xs", {
        "text-common": rarity == MagicItemRarity.Common,
        "text-uncommon": rarity == MagicItemRarity.Uncommon,
        "text-rare": rarity == MagicItemRarity.Rare,
        "text-veryrare": rarity == MagicItemRarity.VeryRare,
        "text-legendary": rarity == MagicItemRarity.Legendary,
    })

    const rareityStyles = classNames("border-t-[1px] text-${getColour(item.rarity)} border-t-${getColour(item.rarity)} w-[60%] text-center font-bold italic text-xs", {
        "text-common border-t-common": rarity == MagicItemRarity.Common,
        "text-uncommon border-t-uncommon": rarity == MagicItemRarity.Uncommon,
        "text-rare border-t-rare": rarity == MagicItemRarity.Rare,
        "text-veryrare border-t-veryrare": rarity == MagicItemRarity.VeryRare,
        "text-legendary border-t-legendary": rarity == MagicItemRarity.Legendary,
    })

    function getRarityDots(rarity: MagicItemRarity) {
        let count = ['']

        if (rarity == MagicItemRarity.Uncommon) {
            count.push('')
        }
        if (rarity == MagicItemRarity.Rare) {
            count.push('', '');
        }
        if (rarity == MagicItemRarity.VeryRare) {
            count.push('', '', '');
        }
        if (rarity == MagicItemRarity.Legendary) {
            count.push('', '', '', '');
        }

        let dots = count.map(() => (
            <div className={dotStyles} />
        ))
        return dots
    }



    return (
        <div className="flex gap-10">
            <Form methods={methods} onSubmit={onSubmit}>
                <div className="flex gap-3">
                    <div className="flex flex-col gap-3 w-96">
                        <Input methods={methods} name="name" label="Name" required placeholder="Name here" maxLength={22} />
                        <Select methods={methods} name="rarity" options={rarities} label="Rarity" />
                        <Select methods={methods} name="category" options={categories} label="Category" />
                        <TextArea methods={methods} name="description" label="Description" required />
                        <TextArea methods={methods} name="property1" label="Property 1" />
                        <TextArea methods={methods} name="property2" label="Property 2" />
                        <TextArea methods={methods} name="property3" label="Property 3" />
                    </div>

                </div>
                <Button className="mt-3" content="Add Magic Item" />
            </Form>
            <div className="flex flex-col gap-10">
                <div>
                    <p>Front</p>
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                        <div className="w-[300px] h-[420px] bg-transparent group perspective ">
                            <div className={`relative preserve-3d duration-1000 w-full h-full `}>
                                <div className={`${cardStyles}`}>
                                    <div className={`${dotStyles} absolute top-0.5 left-0.5`} />
                                    <div className={`${dotStyles} absolute top-0.5 right-0.5`} />
                                    <div className="border-2 border-black h-[95%] w-[275px] rounded-2xl">
                                        <header className="border-2 border-black flex justify-center items-center rounded-2xl w-[275px] py-3 -ml-0.5 -mt-0.5 font-black">
                                            {name ? name.toUpperCase() : "NAME HERE"}
                                        </header>
                                        <div className="flex flex-col items-center justify-between h-[85%]">
                                            <GetIcon category={category} />
                                            <div className="w-full text-center flex flex-col items-center gap-1">
                                                <span className={categoryStyle}>{formatString(category)}</span>
                                                <span className={rareityStyles}>{formatString(rarity)}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center gap-1 h-[5%] items-center">
                                        {getRarityDots(rarity)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tilt>
                </div>
                <div>
                    <p>Back</p>
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                        <div className="w-[300px] h-[420px] bg-transparent group perspective ">
                            <div className={`relative preserve-3d duration-1000 w-full h-full `}>
                                <div className={` ${cardStyles}`}>
                                    <div className={`${dotStyles} absolute top-0.5 left-0.5`} />
                                    <div className={`${dotStyles} absolute top-0.5 right-0.5`} />
                                    <div className="border-2 border-black h-[95%] w-[275px] rounded-2xl">
                                        <header className="border-2 border-black flex justify-center items-center rounded-2xl w-[275px] py-3 -ml-0.5 -mt-0.5 font-black">
                                            {name ? name.toUpperCase() : "NAME HERE"}
                                        </header>
                                        <div className="flex flex-col items-center justify-between h-[85%]">
                                            <div className="flex flex-col w-full text-[12px] leading-none p-2 gap-3 overflow-hidden">
                                                <p>{description ? description : "Description Here"}</p>
                                                <p>{property1 ? property1 : "Property 1 here"}</p>
                                                <p>{property2 ? property2 : "Property 2 here"}</p>
                                                <p>{property3 ? property3 : "Property 3 here"}</p>
                                            </div>
                                            <div className="w-full text-center flex flex-col items-center gap-1">
                                                <span className={categoryStyle}>{formatString(category)}</span>
                                                <span className={rareityStyles}>{formatString(rarity)}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center gap-1 h-[5%] items-center">
                                        {getRarityDots(rarity)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tilt>
                </div>
            </div>
        </div>
    )
}