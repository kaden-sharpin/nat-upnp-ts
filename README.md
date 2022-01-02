# UPnP TS

Port mapping via UPnP APIs

## Installation

```bash
npm i git+https://github.com/kaden-sharpin/nat-upnp-ts.git
```

## Usage

```javascript
// using ES modules
import { Client } from "nat-upnp-ts";
const client = new Client();

// using node require
const upnp = require("nat-upnp-ts");
const client = new upnp.Client();

client
  .createMapping({
    public: 12345,
    private: 54321,
    ttl: 10,
  })
  .then(() => {
    // Will be called once finished
  })
  .catch(() => {
    // Will be called on error
  });

async () => {
  await client.removeMapping({
    public: 12345,
  });
};

client.getMappings();

client.getMappings({
  local: true,
  description: "both of these fields are optional",
});

client.getPublicIp();
```
