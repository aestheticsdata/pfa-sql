"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient({
    log: [{
            emit: 'event',
            level: 'query',
        }]
});
prisma.$on('query', function (e) {
    // console.log("Query: " + e.query)
    // console.log("Duration: " + e.duration + "ms")
});
module.exports = prisma;
