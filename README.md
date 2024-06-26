# AssemblyScript API Boilerplate

An experiment building a REST API using WASM. I'm not sure this is the correct use of this technology.

Code taken from [deislabs/wagi](https://github.com/deislabs/wagi) and [deislabs/hello-wagi-as](https://github.com/deislabs/hello-wagi-as)


### Set-up
```sh
git clone https://github.com/anthonybudd/AssemblyScript-API-Boilerplate.git
cd AssemblyScript-API-Boilerplate
npm i
npm run build

# Download correct WAGI binary to ./binary for your platform: https://github.com/deislabs/wagi/releases
# Mac
npm run download-binary:mac

npm run serve
curl localhost:3000
```

### Routes
| Method      | Route               | Description                           | Payload                               | Response          | 
| ----------- | ------------------- | ------------------------------------- | ------------------------------------- | ----------------- |  
| **DevOps**  |                     |                                       |                                       |                   |  
| GET         | `/_readiness`       | Kuber readiness check                 | --                                    | `healthy`         |  
| **Demo Route**  |                 |                                       |                                       |                   |  
| GET         | `/`                 | An example route                      | --                                    | `Welcome to the AssemblyScript REST API!`         | 
