"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = exports.Ssdp = exports.Device = void 0;
const device_1 = require("./nat-upnp-ts/device");
const client_1 = require("./nat-upnp-ts/client");
const ssdp_1 = require("./nat-upnp-ts/ssdp");
var natupnp;
(function (natupnp) {
    natupnp.Ssdp = ssdp_1.Ssdp;
    natupnp.Device = device_1.Device;
    natupnp.Client = client_1.Client;
})(natupnp || (natupnp = {}));
var device_2 = require("./nat-upnp-ts/device");
Object.defineProperty(exports, "Device", { enumerable: true, get: function () { return device_2.Device; } });
var ssdp_2 = require("./nat-upnp-ts/ssdp");
Object.defineProperty(exports, "Ssdp", { enumerable: true, get: function () { return ssdp_2.Ssdp; } });
var client_2 = require("./nat-upnp-ts/client");
Object.defineProperty(exports, "Client", { enumerable: true, get: function () { return client_2.Client; } });
exports.default = natupnp;
