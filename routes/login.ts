import {Router} from 'express';
import express from "express";
import axios, {type AxiosResponse, AxiosError}  from "axios";
export const login = () => {
    var router: Router = Router();

    router.post('/', (req:express.Request, res:express.Response) =>{
        console.log("loginAPI");
        //res.header('Access-Control-Allow-Origin', '*');
        
        // res.header('Access-Control-Allow-Origin', ['http://192.168.101.63:5173', 'http://localhost:5173']);
        res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
        res.header("Access-Control-Allow-Credentials", "true");
        // res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
        res.header('Access-Control-Allow-Methods', 'POST, PUT, DELETE, OPTIONS');
        //ユーザー認証情報取得
        const email:string = req.body["email"]
        const password:string = req.body["password"]
        console.log(req.body)
        console.log('email', email, 'password', password);
        req.session.name = email;
        console.log("登録セッション_ログイン前", req.session.name);
        res.sendStatus(200) 
        //ログイン判定APIにログイン情報を送信してログイン許可判定
        type request = {
            "email":string,
            "password":string,
        };
        const data_request:request = {"email":email, "password":password};
        // axios.post("http://login:3333//login/user", JSON.stringify(data_request), {headers:{'Content-Type': 'application/json'}})
        //     .then((res_login: AxiosResponse) => {
        //         console.log("ユーザー登録API成功s");
        //         req.session.name = email;
        //         req.session.save();
        //         console.log("登録セッション", req.session.name);
        //         res.sendStatus(200) 
        //     })
        //     .catch((e: AxiosError<{error: string}>) => {
        //         console.log("ユーザー登録API失敗");
        //         res.sendStatus(300) 
        //     })

    })
    return router;
}