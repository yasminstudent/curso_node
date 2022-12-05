import express, {Request, Response} from 'express';

const server = express();

server.get('/', (req: Request, res: Response) => {
    res.send("Olá Mundo");
});

server.get('/noticia/:slug', (req: Request, res: Response) => {
    let slug: string = req.params.slug;
    res.send(`Notícia: ${slug}`);
});

server.get('/voo/:origem-:destino', (req: Request, res: Response) => {
    let {origem, destino} = req.params;
    res.send(`Voos de ${origem} a ${destino}`);
});

//executando o servidor na porta 3000
server.listen(3000);
