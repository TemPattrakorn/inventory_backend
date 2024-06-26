import 'reflect-metadata';
import express = require('express');
import * as bodyParser from 'body-parser';
import { inventoryRouter } from './routers/inventoryRouter'
import { AppDataSource } from './data-source';
import { requisitionRouter } from './routers/requisitionRouter';
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/api/v1/inventories', inventoryRouter)
app.use('/api/v1/requisitions', requisitionRouter)
AppDataSource.initialize()
	.then(() => {

		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});

	})
	.catch((error) => console.log('TypeORM connection error: ', error));

export default app;