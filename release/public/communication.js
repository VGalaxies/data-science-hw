// 打开一个WebSocket
var ws = new WebSocket('ws://localhost:3000');

// open event
ws.onopen = function () {
    console.log("open websocket...");
};

// close event
ws.onclose = function () {
    console.log("close websocket...");
};


function addCheckbox(tag, list) {
    // add tag
    for (let i = 1; i <= 6; ++i) {
        const labelElement = document.createElement('div');
        labelElement.setAttribute("class", "wordiness"); // refer to .wordiness
        labelElement.innerHTML = tag;
        document.querySelector('#content' + i).append(labelElement);
    }

    // add list
    for (let index in list) {
        for (let i = 1; i <= 6; ++i) {
            const paraElement = document.createElement('div');
            paraElement.setAttribute("class", "cbox");
            let inner = '<input type="checkbox">' 
            + list[index] + '</input>'
            paraElement.innerHTML = inner;
            document.querySelector('#content' + i).append(paraElement);
        }
    }
}

function removeCheckbox() {
    for (let i = 1; i <= 6; ++i) {
        let element = document.querySelector('#content' + i)
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
}

// 响应onmessage事件:
ws.onmessage = function (msg) {
    // 这里可以处理接收到服务器的数据

    let data = msg.data;

    if (!data.startsWith("noun") && !data.startsWith("verb")) {
        // 提示用户
        alert(data);

        // 删除 checkboxs
        removeCheckbox();
    } else {
        let list = data.split(",");

        // 去重
        list = Array.from(new Set(list));

        if (list[0] == "noun") {
            // 去掉 noun
            list = list.slice(1);
            addCheckbox("名词", list)
        } else if (list[0] == "verb") {
            // 去掉 verb
            list = list.slice(1);
            addCheckbox("动词", list)
        } else {

        }

        // // 数据再处理
        // // 去除特殊字符
        // let blacklist = [' ', '×', '\r', '\n', '，', '。', '(', ')', '（', '）', '、', '；']
        // list = list.filter(function (item) {
        //     return !blacklist.includes(item);
        // });

        // // 去除数字
        // list = list.filter(function (item) {
        //     return !item.match(/\d/g);
        // });
    }
};

function sendContent() {
    // 给服务器发送数据
    // 直接发送文书内容
    // 除去换行和空格
    // 避免影响分词
    let str = $("#display").val(); // using JQuery
    if (str == "") {
        alert("No data to be processed.");
        return;
    }
    // console.log(str);
    str = str.replace(/\r\n/g, "。").replace(/\s*/g, "");
    ws.send(str);
    alert("The server has received the data, processing ...")
}

function fetchDisplayText() {
    return document.querySelector("#display").value;
}

function generateTagInfo() {
    let info = {};

    let categoryName = ["Criminals", "Gender", "Ethnicity", "Birthplace", "Accusation", "Courts"]

    for (let i = 1; i <= 6; ++i) {
        let selected = [];

        let childList = document.querySelector('#content' + i).childNodes;
        childList.forEach(elememt => {
            if (elememt.childNodes.length == 2) {
                let checkBox = elememt.childNodes.item(0);
                let text = elememt.childNodes.item(1);
                if (checkBox.checked) {
                    selected.push(text.textContent);
                }
            }
        });

        info[categoryName[i - 1]] = selected.toString();
    }

    return JSON.stringify(info);
}

function sendGenerateRequest() {
    ws.send("TAGINFO: " + generateTagInfo());
    ws.send("TEXT: " + fetchDisplayText());
}