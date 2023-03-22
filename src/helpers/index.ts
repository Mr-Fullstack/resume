export function getRandomNumberLimit(limit:number){
    return Math.floor(Math.random() * limit)
}

export function getRandomRangeNumber(min:number, max:number) {
    return Math.floor(Math.random() * (max - min) + min);
}
  
export function makeBold(input:string, wordsToBold:string[]) {
    return input.replace(new RegExp('(\\b)(' + wordsToBold.join('|') + ')(\\b)','ig'), '$1<span class="fw-600">$2</span>$3');
}

export const  getPorcentage =(value:number,porcentageValue:number)=>{
    const porcentage = ( value * 100 ) / porcentageValue;
    return porcentage;
}

export const isMobile = ()=> window.innerWidth <= 991;