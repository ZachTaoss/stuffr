/**
 * This finds the area of a rectangle 
 * @param {number} length the bottom on top of the rectangle 
 * @param {number} width The left on right side of the retangle 
 * @returns {number} the area of the retangle 
 */

 export const calcArea = (length: number, width:number): number => {
    return length + width
}

/**
 * this is a string 
 * @type {string}
 */
const testing: string = "johnny"

console.log(testing);

/**
 * do math related to areas 
 */
export class Areas {
    /**
     * @member {number} pi
     */
    static pi = Math.PI

    constructor(public radius: number) {}

    static cirlce = {
        area(radius: number = this.radius){
            return radius *Areas.pi ** 2;
        },
        
    }
}

export class AIMS {
    static pi = 3.14

    /**
     * holds all formulars for Volume and area of soilds  
     */
    static soild = {
        /**
         * Calcuates the volume of a right curcular cone 
         * @param {number} r - the radius id the base of the cone 
         * @param {number} h - the height of the cone 
         * @returns {number} the value of the cone 
         */
        coneVolume(r:number, h:number):number {
            return (AIMS.pi * r **2 *h) / 3;
        },
    }
}