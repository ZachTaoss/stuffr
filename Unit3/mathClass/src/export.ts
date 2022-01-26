export class AIMS {
    static pi = 3.14
/**
 * Formulars for the area of common shapes 
 */
    static area = {
        /**
         * This calcs the area of a triangle 
         * @param {number} b the length of the base 
         * @param {number} h the height of the triangle
         * @returns {number} the area of the triangle 
         */
        triangleArea(b:number, h:number):number {
            return (b*h)/2
        },
        /**
         * Thid calcs the area of a rectangle Area 
         * @param {number} l the length of the rectangle 
         * @param {number} w The width of the retangle 
         * @returns {number} The Area of the rectangle 
         */
        rectangleArea (l:number, w:number):number{
            return l*w
        },
        /**
         * This is to calc the trapezoid Arra 
         * @param {number} h is the height 
         * @param {number} b1 is the 1 base 
         * @param {number} b2 is the 2 base 
         * @returns {number}
         */
        trapezoidArea (h,b1:number,b2:number):number{
            return (h(b1+b2))/2
        },
        /**
         * This is to calc the Area of the parallelogram 
         * @param {number} b This is the base 
         * @param {number} h This is the height 
         * @returns {number}
         */
        parallelogramArea (b:number, h:number):number{
            return b*h
        },
        /**
         * 
         * @param {number} pi 3.14
         * @param {number} r the radius of the circle 
         * @returns {number}
         */
        circleArea (pi, r:number):number{
            return pi*r**2
        }
    }

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
        /**
         * This calcs the Surface area of a Cone
         * @param {number}  pi 3.14
         * @param {number} r radius
         * @param {number} l slant height
         * @returns {number}
         */
        coneSurfaceArea(pi,r:number, l :number ):number {
            return ((2*pi*r)*l + pi * r**2)/2
        },
            /**
     * This calcs the Vloume of a pyramid
     * @param {number} B The area of the base 
     * @param {number} h The height 
     * @returns {number}
     */
    pyramidVolume(B:number, h:number):number {
        return (B*h)/3
    },
    /**
     * The calcs the SurfaceArea of a pyramid 
     * @param {number} B Area of the base 
     * @param {number} P perimeter of the base 
     * @param {number} l slant height 
     * @returns {number}
     */
    pyramidSurfaceArea(B:number, P:number, l:number):number{
        return B+(P*l)/2
    },
    /**
     * This calcs the Volume of a sphere
     * @param pi 3.14
     * @param r the radius
     * @returns 
     */
    sphereVolume(pi, r:number):number{
        return 4*(pi*r**3)/3
    },
    /**
     * This calcs the Surface Area of a sphere 
     * @param {number} pi 3.14
     * @param {number} r The radius 
     * @returns {number}
     */
    sphereSurfaceArea(pi, r:number):number {
        return 4*pi*r**2
    },
    /**
     * This calcs the Volume of a cylinder
     * @param {number} pi 3.14
     * @param {number} r radius
     * @param {number} h height
     * @returns {number}
     */
    cylinderVolume(pi,r:number,h:number):number {
        return pi*r**2*h
    },
        /**
     * This calcs the SurfaceArea of a cylinder
     * @param {number} pi 3.14
     * @param {number} r radius
     * @param {number} h height
     * @returns {number}
     */
    cylinderSurfaceArea(pi,r:number,h:number):number{
        return 2*(pi*r*h) + 2*(pi*r**2)
    },
    /**
     * This calcs the Volume of a prism 
     * @param {number} B area of the base 
     * @param {number} h Height 
     * @returns {number}
     */
    prismVolume(B:number,h:number):number{
        return B*h
    },
    /**
     * This calcs the Surface Area of a prism
     * @param {number} B area of the base 
     * @param {number} P perimetere of base 
     * @param {number} h height
     * @returns {number}
     */
    prismSurfaceArea(B:number,P:number,h:number):number{
        return 2*B+P*h
    },
    }
    /**
     * This holds all the linear Equation forms 
     */
    static linear = {
        /**
         * This is the slope forumla 
         * @param y1 
         * @param y2 
         * @param m 
         * @param x1 
         * @param x2 
         * @returns 
         */
        pointSlope(y1:number,y2:number,m:number,x1:number,x2:number):number{
            return (y1-y2)/(x1-x2)
        },

        /**
         * 
         * @param A integer
         * @param B interger
         * @param x x intercept 
         * @param y y intercept
         * @returns 
         */
        standardForm(A:number, B:number,x:number, y:number):number{
            return(A*x+B*y) 
        },
        slopeInterceptForm(m:number,x:number,b:number):number{
            return(m*x+b)
        },

    }

    /**
     * 
     * @param {number} a length of the Opposite side 
     * @param {number} b Length of the adjacent side 
     * @returns {number} This will retuen the Hypotenuse side 
     */

    pythagoreanTheorem(a:number,b:number):number{
        return Math.sqrt(a**2+b**2)
    }

    static gemomerty = {
        /**
         * This Calcus distance between two points 
         * 
         * @param {numbers} x1 first point x value 
         * @param {numbers} x2 second point x value 
         * @param {numbers} y1 first point y value
         * @param {numbers} y2 second point y value 
         * @returns {number}
         */
        dist2Points(x1:number,x2:number,y1:number,y2:number):number {
            return Math.sqrt((x2-x1)**2+(y2-y1)**2)
        },

        /**
         * This Calus the midpoint between two point s
         * @param {number} x1 first point x value 
         * @param {number} x2 second point x value 
         * @param {number} y1 first point y value
         * @param {number} y2 second point y value 
         * @returns {number} 
         */
        midpoint2Points(x1:number,x2:number,y1:number,y2:number):number{
            return ((x2+x1)/2+(y2+y1)/2)
        },



    }

    /**
     * This solves a quadratic equation 
     * @param {number} b second number in the equcation 
     * @param {number} a first number ub the equatiob 
     * @param {number} c Thrid number in the equcation 
     * @returns 
     */
    quadraticFormula(b:number,a:number,c:number):string{
        const A1 = (-b + Math.sqrt(b**2 - 4*a*c))/2*a;
        const A2 = (-b - Math.sqrt(b**2 - 4*a*c))/2*a
        return (`${A1} ${A2}`)
    }
}