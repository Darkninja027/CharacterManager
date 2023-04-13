import { PlayerCharacterInput } from "@types"
import { FieldValues, Path, PathValue, UseFormGetValues, UseFormReturn, UseFormSetValue } from "react-hook-form"

enum LevelExp {
    Level1 = 0,
    Level2 = 300,
    Level3 = 900,
    Level4 = 2700,
    Level5 = 6500,
    Level6 = 14000,
    Level7 = 23000,
    Level8 = 34000,
    Level9 = 48000,
    Level10 = 64000,
    Level11 = 85000,
    Level12 = 100000,
    Level13 = 120000,
    Level14 = 140000,
    Level15 = 165000,
    Level16 = 195000,
    Level17 = 225000,
    Level18 = 265000,
    Level19 = 305000,
    Level20 = 355000
}

export function getLevelExperience(level: number) {
    if (level == 1)
        return LevelExp.Level1
    if (level == 2)
        return LevelExp.Level2
    if (level == 3)
        return LevelExp.Level3
    if (level == 4)
        return LevelExp.Level4
    if (level == 5)
        return LevelExp.Level5
    if (level == 6)
        return LevelExp.Level6
    if (level == 7)
        return LevelExp.Level7
    if (level == 8)
        return LevelExp.Level8
    if (level == 9)
        return LevelExp.Level9
    if (level == 10)
        return LevelExp.Level10
    if (level == 11)
        return LevelExp.Level11
    if (level == 12)
        return LevelExp.Level12
    if (level == 13)
        return LevelExp.Level13
    if (level == 14)
        return LevelExp.Level14
    if (level == 15)
        return LevelExp.Level15
    if (level == 16)
        return LevelExp.Level16
    if (level == 17)
        return LevelExp.Level17
    if (level == 18)
        return LevelExp.Level18
    if (level == 19)
        return LevelExp.Level19
    if (level == 20)
        return LevelExp.Level20
}

export function getSkillModifier(skillValue: number) {
    switch (skillValue) {
        case 1:
            return -5;
        case 2:
        case 3:
            return -4;
        case 4:
        case 5:
            return -3;
        case 6:
        case 7:
            return -2;
        case 8:
        case 9:
            return -1;
        case 10:
        case 11:
            return 0;
        case 12:
        case 13:
            return 1;
        case 14:
        case 15:
            return 2;
        case 16:
        case 17:
            return 3;
        case 18:
        case 19:
            return 4;
        case 20:
        case 21:
            return 5;
        case 22:
        case 23:
            return 6;
        case 24:
        case 25:
            return 7;
        case 26:
        case 27:
            return 8;
        case 28:
        case 29:
            return 9;
        case 30:
            return 10;
        default:
            return 0

    }
}

export function setSkillModifier<T extends FieldValues>(setValue: UseFormSetValue<T>, getValues: UseFormGetValues<T>, name: Path<T>, checked: boolean, bonus: PathValue<T, Path<T>>, expertise: boolean) {
    bonus = (expertise ? bonus as number * 2 : bonus) as PathValue<T, Path<T>>
    if (checked) {
        setValue(name, bonus)
    }
    else {
        bonus = getValues(name) as number - (bonus as number) as PathValue<T, Path<T>>
        setValue(name, bonus)
    }
}

export function updateModifiers(methods: UseFormReturn<PlayerCharacterInput>) {
    const { getValues, setValue } = methods
    const skills = getValues("skills")
    const proficiencyBonus = getValues("proficiencyBonus")
    skills.map((skill, index) => {
        var modifier = 0
        modifier += Number(getAttributeModifier(methods, skill.attribute))
        if (skill.proficient) {
            modifier += Number(proficiencyBonus)
        }
        if (skill.expertise) {
            modifier += Number(proficiencyBonus)
        }
        var oldValue = getValues(`skills.${index}.modifier`);
        if (oldValue !== modifier) {
            setValue(`skills.${index}.modifier`, modifier)
        }
    })
}

export function getAttributeModifier(methods: UseFormReturn<PlayerCharacterInput>, attribute: string) {
    if (attribute === 'strength') {
        return methods.getValues("strengthModifier")
    }
    if (attribute === 'dexterity') {
        return methods.getValues("dexterityModifier")
    }
    if (attribute === 'constitution') {
        return methods.getValues("constitutionModifier")
    }
    if (attribute === 'intelligence') {
        return methods.getValues("intelligenceModifier")
    }
    if (attribute === 'wisdom') {
        return methods.getValues("wisdomModifier")
    }
    if (attribute === 'charisma') {
        return methods.getValues("charismaModifier")
    }
}