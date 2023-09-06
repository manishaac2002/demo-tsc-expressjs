import express, { NextFunction, Request, Response } from "express";

const application = express()

application.use(express.json())

// application.get('/',(req:Request,res:Response)=>{
//     return res.send("hey")
// })

// application
//     .route("/api/test")
//     .get((req: Request, res: Response) => {
//         return res.send("this is get")
//     })
//     .post((req: Request, res: Response) => {
//         return res.send("this is post")
//     })
//     .put((req: Request, res: Response) => {
//         return res.send("this is put")
//     })
//     .delete((req: Request, res: Response) => {
//         return res.send("this is delete")
//     })

// application.get("/api/books/:bookId/:authorId", ((req: Request, res: Response ,next:NextFunction) => {
//     console.log(req.params);

//     return res.send(req.params)
// }))

// function handleGetBook(req: Request, res: Response ,next:NextFunction)  {
//         console.log(req.params);
//         return res.send(req.params)
//     }
//     application.get("/api/books/:bookId/:authorId",handleGetBook )

function handleGetBookOne(req: Request, res: Response, next: NextFunction) {
    console.log(req.params);
    next()
}
// function handleGetBookTwo(req: Request, res: Response ,next:NextFunction)  {
//        console.log('Second handler');

//         return res.send(req.params)
//     }
//     application.get("/api/books/:bookId/:authorId",[handleGetBookOne,handleGetBookTwo] )

application.get
    ("/api/books/:bookId/:authorId",
        function (req: Request, res: Response, next: NextFunction) {
            next()
        },
        function (req: Request, res: Response, next: NextFunction) {
            return res.send(req.params)
        }
    )









application.post('/api/data', (req, res) => {
    console.log(req.body);
    return res.sendStatus(200)
})

application.listen(3000, () => {
    console.log('Application listening at http://localhost:3000');

})

console.info
