import express, {Request, Response} from 'express'
//Obs: Quando o arquivo tem nome de index, pode colocar só o nome da pasta: ./routes 
import mainRoutes from './routes/index'

const server = express()

server.use(mainRoutes)

server.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada!');
});

//pode-se adicionar um préfixo nas rotas:
//server.use('/prefixo', mainRoutes);

//executando o servidor na porta 3000
server.listen(3000)
