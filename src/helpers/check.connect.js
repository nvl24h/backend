'use strict'

const mongoose = require('mongoose')
const os = require('os')
const process = require('process')
const _SECONDS = 5000
// count Connect
const countConnect = () => {
    const numConnecttion = mongoose.connections.length
    console.log(`Number of connecttion:: ${numConnecttion}`);
}

// check over load
const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length
        const numCores = os.cpus().length
        const memoryUsage = process.memoryUsage().rss

        console.log(`Aclive connections: ${numConnection}`);
        console.log(`memory usage:: ${memoryUsage / 1824 / 1024} MB`);
        // Example maximum number of connect based number dsf cores
        const maxConnextions = numCores * 5

        if (numConnection > maxConnextions) {
            console.log(`Connection overloat deteced`);
        }
    }, _SECONDS) // Moniter evary 5 seconds
}

module.exports = {
    countConnect,
    checkOverload
}