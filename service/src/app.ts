import bodyParser from "body-parser";
import cors from "cors";
import express, { Application, Request, Response, NextFunction } from 'express';
import { Server } from "http";
import { itemsController } from "./controller/items.controller";
const PORT: number = 3434

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.json({ limit: '10kb' }));
app.post('/api/creatItem', itemsController , (req, res)=>{
  return res.status(200).json(res.locals.status);
})

const server: Server = app.listen(PORT,  () => {

    console.log(`App is running at http://localhost:${ PORT }`);

    // UnKnown Routes
    app.all('*', (req: Request, res: Response, next: NextFunction) => {
        const err = new Error(`Route ${ req.originalUrl } not found`) as any;
        err.statusCode = 404;
        next(err);
    });

    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        err.status = err.status || 'error';
        err.statusCode = err.statusCode || 500;

        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
    });
})

process.on('SIGINT', () => {
    console.log(`SIGINT: Process ${ process.pid } has been interrupted`)

    server.close(function (err) {
        if (err) {
            console.log(err)
            process.exit(1)
        }
      

        setTimeout(() => {
            console.log(`SIGINT setTimeout`)
            process.exit()
        }, 500).unref()
    });
});

process.on('SIGTERM', function () {
    console.log(`Process ${ process.pid } received a SIGTERM signal`)
    server.close(function () {
       
        setTimeout(() => {
            console.log(`SIGTERM setTimeout`)
            process.exit(0)
        }, 1000).unref()
        process.exit(0);
    });
});


