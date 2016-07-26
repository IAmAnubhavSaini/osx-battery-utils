'use strict';

const osxBattery = require('osx-battery');

const isCharging = () => osxBattery().then(battery => battery.isCharging);

module.exports = {
    isCharging: isCharging
};
