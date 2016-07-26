import test from 'ava';
import batteryUtils from './';

test('isCharging should be a boolean', async t => {
    t.is(typeof await batteryUtils.isCharging, 'boolean');
});

test('amperage should be a number', async t => {
    t.is(typeof await batteryUtils.amperage, 'number');
});
