// 导入WebSocket模块
const WebSocket = require('ws');

// 实例化
const wss = new WebSocket.Server({
    // 端口号
    port: 3000
});

console.log("setup server...");

function splitSentence(str) {
    let nodejieba = require("nodejieba");
    let dict = __dirname + '\\userdict.utf8';
    nodejieba.load({
        userDict: dict,
    });
    // let result = nodejieba.cut(str);
    let split_result = nodejieba.tag(str);
    for (let i in split_result) {
        let item = split_result[i];
        let word = item.word;
        let tag = item.tag;
        if (tag[0] == 'n') {
            noun_arr.push(word);
        } else if (tag[0] == 'v') {
            verb_arr.push(word);
        }
    }
}

wss.on('connection', function (ws) {
    console.log(`[SERVER] connection()`);
    ws.on('message', function (message) {
        console.log(`[SERVER] Received: ${message}`);

        let str = message.toString();
        if (str.startsWith("TAGINFO: ")) {
            str = str.slice("TAGINFO: ".length);
            const fs = require('fs');
            let filePath = __dirname + '\\标注.json';
            fs.writeFile(filePath, str, err => {
                if (err) {
                    console.error(err)
                    return
                }
            })
            // 文件写入成功
            ws.send(filePath + " successfully generated.", (err) => {
                if (err) {
                    console.log(`[SERVER] error: ${err}`);
                }
            });
        } else if (str.startsWith("TEXT: ")) {
            str = str.slice("TEXT: ".length);
            const fs = require('fs');
            let filePath = __dirname + '\\案件文本.txt';
            fs.writeFile(filePath, str, err => {
                if (err) {
                    console.error(err)
                    return
                }
            })
            // 文件写入成功
            ws.send(filePath + " successfully generated.", (err) => {
                if (err) {
                    console.log(`[SERVER] error: ${err}`);
                }
            });
        } else {
            // 服务器端对数据进行处理
            // 进行分词
            noun_arr = ["noun"];
            verb_arr = ["verb"];

            splitSentence(str);

            // 给客户端发送数据
            ws.send(`${noun_arr}`, (err) => {
                if (err) {
                    console.log(`[SERVER] error: ${err}`);
                }
            });

            ws.send(`${verb_arr}`, (err) => {
                if (err) {
                    console.log(`[SERVER] error: ${err}`);
                }
            });
        }
    })
});
