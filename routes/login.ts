import {Router} from 'express';
import axios, {type AxiosResponse, AxiosError}  from "axios";
export const login = () => {
    var router: Router = Router();

    router.post('/', (req, res) =>{
        //ユーザー認証情報取得
        const email:string = req.body["email"]
        const password:string = req.body["password"]
        console.log(req.body)
        console.log('email', email, 'password', password);
        
        //ログイン判定APIにログイン情報を送信してログイン許可判定
        type request = {
            "email":string,
            "password":string,
        };
        const data_request:request = {"email":email, "password":password};
        axios.post("http://login:3333//login/user", JSON.stringify(data_request), {headers:{'Content-Type': 'application/json'}})
            .then((res: AxiosResponse) => {
                console.log("ログイン成功");
            })
            .catch((e: AxiosError<{error: string}>) => {
                console.log("ユーザー登録API失敗s", e);
            })

    })
    return router;
}