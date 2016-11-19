# Data server for Telefónica challenge at bothack.berlin • [![challenge](https://img.shields.io/badge/challenge-telefonica--digital--companion-black.svg?colorA=424242&colorB=ffd706&style=social)][telefonica-challenge]

[telefonica-challenge]: https://github.com/bothackBerlin/bothack-challenges/tree/master/telefonica/companion-challenge#challenge-1

This repository provides a small server to provide you with mock data
for the [Telefónica digital companion challenge][telefonica-challenge] at bothack.berlin.


## Routes

### GET /users/:id

The documentation for the meaning of the response fields can be found in [docs/targeting_criterias.csv](./docs/targeting_criterias.csv).  
All the response fields are randomly generated / chosen based on the user_id you provide.

#### Example

Request: `GET /users/1121`

Response:

```
{
  "type": "user",
  "id": "1121",
  "ag": 56,
  "app": 297,
  "ar": "hardware",
  "bp": false,
  "bs": "BlackBerry",
  "ch": true,
  "db": "1998.02.19",
  "db_at": "1998-02-19T07:05:09.000Z",
  "dp": false,
  "dtg": "privatkunden",
  "du90": 11652602,
  "du30": 695452,
  "ea": true,
  "ed": "2017.01.25",
  "ed_at": "2017-01-25T21:26:50.000Z",
  "ep": 67,
  "fl": 1,
  "gd": "undefined",
  "kvf": true,
  "kvw": 10,
  "lo": true,
  "lte": true,
  "mb": true,
  "mnp": false,
  "ms": "01569005XXX",
  "nf": false,
  "no": 1,
  "mu": false,
  "ob": false,
  "okt": 6,
  "op": true,
  "os": "BASIC CACS",
  "ou": false,
  "ov": true,
  "pc": 2,
  "p1": "privatkunden-samsung-galaxy-s3-mini-weiss-myhandy-24x17,50euro",
  "p1ps": "783",
  "p1i": "4510+090173+00",
  "p1t": "handy",
  "p2": "privatkunden-o2-blue-select-1",
  "p2i": "2274",
  "p2t": "tarif",
  "p3": "privatkunden-samsung-galaxy-s3-flip-cover-weiss",
  "p3i": "4850+020078+00",
  "p3t": "zubehoer",
  "p4": "privatkunden-acer-iconia-tab-a211-3g-myhandy-24x17,50euro",
  "p4i": "4515+000014+00",
  "p4t": "handy",
  "po": 12,
  "ps": 5,
  "pt": "ba",
  "ra": 40.3546460710009,
  "rm": "120.235.140.43",
  "sa": "o2online",
  "se": "google.de",
  "sm": false,
  "ss": "Care",
  "sz": 1,
  "tr": "o2 Genion L",
  "td": "Tariff Detail,o2 New Genion L (60/10) home office",
  "vv": false,
  "zc": "10970",
  "fr": "2016.09.20",
  "fr_at": "2016-09-20T01:09:51.000Z",
  "pa": "iPhone 6"
}
```


### GET /static/{bundles.xml,geraete.xml,tarife.xml}

## Starting the server

Clone this repo and run:

```bash
yarn # or your classic `npm install`
node bin/server
```
