import { localSum, obj } from '../sum.jsx';

describe('localSum tests', () => {
    it('should return sum', () => {
        expect(obj.sum(3, 8)).toEqual(11);
    });

    it('should call sum', () => {
        localSum(3,9);
        localSum(3,11);
        console.log(obj.sum.mock);

        expect(obj.sum).toHaveBeenCalledWith(3, 9);
    });
});
