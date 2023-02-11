import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const { API_PORT } = process.env;
const PORT = process.env.PORT || API_PORT;
const app = express();
app.use(express.json());
app.get('/test', (req, res) => {
	res.send('Hi');
});

app.listen(PORT, () => {
	console.log('Server Started');
});
