# Data server for Telefónica challenge at bothack.berlin • [![challenge](https://img.shields.io/badge/challenge-telefonica--digital--companion-black.svg?colorA=424242&colorB=ffd706&style=social)][telefonica-challenge]

[telefonica-challenge]: https://raw.githubusercontent.com/bothackBerlin/bothack-challenges/master/telefonica/companion-challenge/README.md1

This repository provides a small server to provide you with mock data
for the [Telefónica digital companion challenge][telefonica-challenge] at bothack.berlin.


## Routes

### GET /users/:id

The documentation for the meaning of the response fields can be found in [docs/targeting_criterias.csv](./docs/targeting_criterias.csv).  
All the response fields are randomly generated / chosen based on the user_id you provide.

### GET /static/{bundles.xml,geraete.xml,tarife.xml}
