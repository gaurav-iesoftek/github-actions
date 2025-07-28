import express from 'express'
import { Request, Response } from 'express';

const app = express();

app.use(express.json())

interface HelloResponse {
	success: boolean;
	message: string;
}


app.get('/hello', (req: Request, res: Response<HelloResponse>) => {
	return res.status(200).json({ success: true, message: 'Hello World' });
});

app.listen(8081, () => {
	console.log('Server is running on port 8081')
})