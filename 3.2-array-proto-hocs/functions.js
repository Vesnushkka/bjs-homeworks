//Task 1

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

const getNames = () => weapons.map(item => item.name);

const getCountReliableWeapons = (durability) => weapons.filter(weapon => weapon.durability > durability).length;

const hasReliableWeapons = (getCountReliableWeapons) => {
    weapons.some(getCountReliableWeapons); 
    if(getCountReliableWeapons.length > 0){
        return "Оружия прочней принимаемой прочности имеются";
    }
}

const getReliableWeaponsNames = (durability) => weapons.filter(weapon => weapon.durability > durability).name;

let totalDamage = 0;
const getTotalDamage = () => {
    weapons.map(weapon) 
    totalDamage += weapon.attack;
    return totalDamage;
}

//Task 1 addition

const getValuestCountToSumValues = ([numbers], numbersSum) => {

    if(arraySum >= numbersSum){
        return arraySumCase.length;
    } else{
        return numbers.length;
    }
}

let arraySum = 0;
let arraySumCase;
const getArraySum = (numbers) => {
    numbers.map(number);
    arraySum += number;
    if(arraysum < numbersSum){
        arraySumCase.push(number);
    } else{
        return arraySumCase;
    } 
}

