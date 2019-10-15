# ES6 Clean Architecture

## TL;DR

You want to develop a JS application using clean architecture
principals.

### Defining boundaries and use cases
```javascript
const {Boundary, UseCase} = require('es6-clean-architecture');

/** ./src/Boundary/GetAListOfWidgetsRequest.js */
class GetAListOfWidgetsRequest extends Boundary.Request {}

/** ./src/Boundary/GetAListOfWidgetsResponse.js */
class GetAListOfWidgetsResponse extends Boundary.Response {}

/** ./src/UseCase/GetAListOfWidgets.js */
class GetAListOfWidgets extends UseCase.UseCase {
    async Execute() {
        return new GetAListOfWidgetsResponse();
    }
}
```

### Directly calling a use case
```javascript
const GetAListOfWidgetsRequest = require('./src/Boundary/GetAListOfWidgetsRequest');
const GetAListOfWidgets = require('./src/UseCase/GetAListOfWidgets');

const useCaseExecution = async () => {
    const request = new GetAListOfWidgetsRequest();
    const getAListOfWidgets = new GetAListOfWidgets(request);
    return await getAListOfWidgets.Execute();
};
```

### Express.js integration
```javascript
const express = require('express');
const GetAListOfWidgetsRequest = require('./src/Boundary/GetAListOfWidgetsRequest');
const GetAListOfWidgets = require('./src/UseCase/GetAListOfWidgets');

const app = express();
app.use(express.json());

app.get('/widget', async (req, res) => {
    /** we pull params and body together here */
    const props = {};
    Object.assign(props, req.params, req.body);

    const request = new GetAListOfWidgetsRequest(props);
    const getAListOfWidgets = new GetAListOfWidgets(request);

    const response = await getAListOfWidgets.Execute();
    
    res.send(response);
});
```
