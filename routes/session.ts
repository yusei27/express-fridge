import express, { Router } from 'express'

var msg:string;
export const createSession = () => {
    var router: Router = Router();

    router.get('/', (req, res) => {
        res.header("Access-Control-Allow-Credentials", "true");
        if (req.session.name != undefined){
            msg = req.session.name;
        }else{
            msg = "セッションありません"
            console.log("セッションがありません。")
            if (req.session.name === undefined){
                console.log("セッションセット")
                req.session.name= "セッション名";
            }
        }
        
        console.log("session.ts");

        (async () => {
            console.log("async");
            if (req.session.name == undefined){
            req.session.name= "セッション名";
            }
            req.session.save();
            res.redirect('/');
          });
    console.log(req.session.id);
    console.log(req.session);
    res.send({text:msg});
    });

    router.get('/confirm_login', (req, res) => {
        res.header("Access-Control-Allow-Credentials", "true");
        console.log("confirm_login", req.session.name)
        if (req.session.name !== undefined){
            console.log("confirm_login", req.session.name)
            res.status(200).json({"content":"セッション維持中"});
        }else{
            console.log("confirm_login", req.session.name)
            res.status(300).json({"content":"セッションがありません", "req.session.name":req.session.name});
        }
    })

    router.get('/remove',(req, res) =>{
        res.header("Access-Control-Allow-Credentials", "true");
        console.log("removesession.ts");
        req.session.destroy(data => console.log(data));
        res.send({text:"セッション削除"});
    });
    

    return router;
};

