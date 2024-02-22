# Swisstronik Rarimo Web Client

## Project setup
```
yarn | yarn install
```

## Getting started



Go to https://gitlab.com/rarimo/polygonid/contracts to get more info about contracts or deploy them by yourself

To setup contract addresses follow this format:
```dotenv
VITE_QUERY_VERIFIER_CONTRACT_ADDRESS_SWISSTRONIK=0x000000000
VITE_VERIFIED_SBT_CONTRACT_ADDRESS_SWISSTRONIK=0x000000000
```

### Compiles and hot-reloads for development
```
yarn start
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Run unit tests
```
yarn test
```

### Lints release/release candidate version
```
yarn rsc %release-version%
```

### Build docker image with version
```
 docker build --no-cache --progress=plain --build-arg BUILD_VERSION=1.0.0-rc.0 -t react-template .
```

## Some additional features

### JsonApi lib

[@distributedlab/jac](https://distributed-lab.github.io/web-kit/modules/_distributedlab_jac.html)

### Web3 provider wrapper lib

[@distributedlab/w3p](https://distributed-lab.github.io/web-kit/modules/_distributedlab_w3p.html)

### Utils, tools, helpers, ...etc

[@distributedlab/tools](https://distributed-lab.github.io/web-kit/modules/_distributedlab_tools.html)

## License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details
