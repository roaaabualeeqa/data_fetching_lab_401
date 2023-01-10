import { useMemo } from "react";

export function filterPet(arrayOfObjects, item) {
    console.log("filterPet function is being called")
    const pet = arrayOfObjects.filter(pet => pet[item])[0]
    return pet[item]
}


export function useRepeated(arrayOfObjects, answersArr) {
    const counts = {};
    let maxCount = 0;
    let mostRepeated;
    answersArr.map((item) => {
        const key = item.pet;
        counts[item.pet] = (counts[item.pet] || 0) + 1;
        if (counts[item.pet] > maxCount) {
            maxCount = counts[item.pet];
            mostRepeated = item.pet;
        }
    });
    console.log("the most repeated pet is", mostRepeated)
    const result = useMemo(() => {
        return filterPet(arrayOfObjects, mostRepeated)
    }, [mostRepeated])

    return result;
}