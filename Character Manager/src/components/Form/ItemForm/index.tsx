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
    const methods = useForm<MagicItemInput>({ defaultValues: magicItem })
    const onSubmit: SubmitHandler<MagicItemInput> = (data) => {

        if ("id" in data) {
            updateMagicItem.mutate({ magicItem: data })
        }
        else {
            itemMutation.mutate({ magicItem: data });
        }
    }
    const categories = Object.values(MagicItemCategory)
    const rarities = [
        MagicItemRarity.Common,
        MagicItemRarity.Uncommon,
        MagicItemRarity.Rare,
        MagicItemRarity.VeryRare,
        MagicItemRarity.Legendary,
    ]

    return (
        <Form methods={methods} onSubmit={onSubmit}>
            <div className="flex gap-3">
                <div className="flex flex-col gap-3">
                    <div className="flex gap-3">
                        <Input methods={methods} name="name" label="Name" required />
                        <Input methods={methods} name="description" label="Description" required />
                    </div>

                    <div className="flex gap-3">
                        <span>
                            <label>Item Category</label>
                            {categories.map(category => (
                                <Radio key={category} methods={methods} name="category" value={category} />
                            ))}
                        </span>
                        <span>
                            <label>Item Rarity</label>
                            {rarities.map(rarity => {
                                return (
                                    <Radio key={rarity} methods={methods} name="rarity" value={rarity} />
                                );
                            })}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <TextArea methods={methods} name="property1" label="Property 1" />
                    <TextArea methods={methods} name="property2" label="Property 2" />
                    {<TextArea methods={methods} name="property3" label="Property 3" />}
                </div>
            </div>
            <Button className="mt-3" content="Add Magic Item" />
        </Form>
    )
}