import * as helpers from '../sum.jsx';

describe('localSum tests', () => {
    it('should return sum', () => {
        expect(helpers.sum(3, 8)).toEqual(11);
    });

    it('should call sum', () => {
        helpers.sum = jest.fn();
        helpers.localSum(3, 9);

        expect(helpers.sum).toHaveBeenCalledWith(3, 9);
    });
});
