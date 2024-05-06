#元となるDockerイメージの指定
FROM node:21

WORKDIR /express-fridge
COPY ./ /express-fridge/

RUN npm install

CMD ["npx", "ts-node", "index.ts"]

#[各種コマンド]
# docker build . -t example3:latest 

# docker image ls

# docker run -it imageid

# docker ps 現在起動中のコンテナの一覧が出力されます。

#docker exec -i -t コンテナID /bin/bash  指定したコンテナのコマンドプロンプトに接続 psコマンドでIDを見る

#docker run -it -v $(pwd) イメージID  カレントディレクトリをマウントしてコンテナを起動

#docker logs コンテナID コンテナのログを出力

#docker stop コンテナID コンテナを停止