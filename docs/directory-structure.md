## Directory tree for the project

```bash  
.
├── app
│   ├── index.js
│   ├── keys
│   ├── methods
│   │   ├── account-balance
│   │   ├── authorization
│   │   ├── b2b
│   │   ├── b2c
│   │   ├── c2b
│   │   ├── dynamic-qr
│   │   ├── mpesa-express
│   │   ├── reversals
│   │   └── transaction-status
│   ├── routes
│   ├── services
│   └── utils
├── docs
│   └── directory-structure.md
├── package.json
└── test

```

From the root directory we have the directories
- `app`: This is where the package code resides.
- `docs`: This is where all the necessary documentations are stores.
- `test`: This holds our test files for the package.
- `package.json`

Inside `app` directory:  

- `index.js`: This is the entry point of our package.
- `keys`: This directory holds all the necessary mpesa keys for the package.  
- `methods`: This directory holds all the methods / apis for the different APIs.  
- `routes`: This directory holds all the routes for the package.  
- `services`: This directory holds all the services used in the package.  
- `utils`: This directory holds all the utility functions used in the package.  



### upadated by
-Newton-Nganga