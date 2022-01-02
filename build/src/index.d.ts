import { Device as impDevice } from "./nat-upnp-ts/device";
import { Client as impClient } from "./nat-upnp-ts/client";
import { Ssdp as impSsdp } from "./nat-upnp-ts/ssdp";
declare namespace natupnp {
    const Ssdp: typeof impSsdp;
    const Device: typeof impDevice;
    const Client: typeof impClient;
}
export { Device } from "./nat-upnp-ts/device";
export type { Service, RawService, RawDevice } from "./nat-upnp-ts/device";
export { Ssdp } from "./nat-upnp-ts/ssdp";
export type { SearchCallback, ISsdp, SsdpEmitter } from "./nat-upnp-ts/ssdp";
export { Client } from "./nat-upnp-ts/client";
export type { GetMappingOpts, Mapping, DeletePortMappingOpts, NewPortMappingOpts, StandardOpts, } from "./nat-upnp-ts/client";
export default natupnp;
/**
 * Raw SSDP/UPNP repsonse
 * Entire SSDP/UPNP schema is beyond the scope of these typings.
 * Please look up the protol documentation if you wanna do
 * lower level communication.
 */
export declare type RawResponse = Partial<Record<string, {
    "@": {
        "xmlns:u": string;
    };
    [key: string]: unknown;
}>>;
