export function getRandomNumberLimit(limit:number){
    return Math.floor(Math.random() * limit)
}

export function getRandomRangeNumber(min:number, max:number) {
    return Math.floor(Math.random() * (max - min) + min);
}
  
