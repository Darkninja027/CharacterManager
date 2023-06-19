
export enum DiceType {
    D4 = 4,
    D6 = 6,
    D8 = 8,
    D10 = 10,
    D12 = 12,
    D20 = 20,
}

export function RollDice(dice: DiceType, amount: number, modifier?: number) {
    let listOfRolls = []
    for (let i = 0; i < amount; i++) {
        listOfRolls.push((Math.floor(Math.random() * dice) + 1 + (modifier ? modifier : 0)))
    }
    let sumOfRolls = listOfRolls.reduce((a, b) => a + b, 0)
    return {
        rolls: listOfRolls,
        sum: sumOfRolls
    }
}