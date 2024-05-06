import express, { Router } from 'express'

var msg:string;
export const createSession = () => {
    var router: Router = Router();

    router.get('/', (req, res) => {
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

    router.get('/remove',(req, res) =>{
        console.log("removesession.ts");
        req.session.destroy(data => console.log(data));
        res.send({text:"セッション削除"});
    });
    

    return router;
};

