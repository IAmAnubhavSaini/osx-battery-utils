import test from 'ava';
import batteryUtils from './';

test(async t => {
    t.is(typeof await batteryUtils.isCharging, 'boolean');
});
