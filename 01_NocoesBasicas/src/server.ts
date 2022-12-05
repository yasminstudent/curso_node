import express, {Request, Response} from 'express';

const server = express();

server.get('/', (req: Request, res: Response) => {
    res.send("Olá Mundo");
});

//executando o servidor na porta 3000
server.listen(3000);
