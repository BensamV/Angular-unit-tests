import { compute } from "./compute"

//describe stands for a suite, can contain on or more suites
describe('compute',function(){
    //one or more tests
    it('should retrun 0 if input is zero', () => {
         const result = compute(-1);
         //another jasmine function
         expect(result).toBe(0)
    })
    it('should retrun 2 if input is 1', () => {
         const result = compute(1);
         //another jasmine function
         expect(result).toBe(2)
    })
})