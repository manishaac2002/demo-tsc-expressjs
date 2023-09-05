import express, { Request, Response } from "express";

const application = express()

application.use(express.json())

// application.get('/',(req:Request,res:Response)=>{
//     return res.send("hey")
// })

application
    .route("/api/test")
    .get((req: Request, res: Response) => {
        return res.send("this is get")
    })
    .post((req: Request, res: Response) => {
        return res.send("this is post")
    })
    .put((req: Request, res: Response) => {
        return res.send("this is put")
    })
    .delete((req: Request, res: Response) => {
        return res.send("this is delete")
    })

application.post('/api/data', (req, res) => {
    console.log(req.body);
    return res.sendStatus(200)
})

application.listen(3000, () => {
    console.log('Application listening at http://localhost:3000');

})