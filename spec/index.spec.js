const batteryUtils = require('../index');

describe('batteryUtils', () => {
    it('isCharging should be a boolean', () => {

        expect(typeof batteryUtils.isCharging).toEqual('boolean');
    })
    it('amperage should be a number', () => {

        expect(typeof batteryUtils.amperage).toEqual('number');
    })
});
