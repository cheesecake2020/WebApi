/**
今日の日付の表示
*/
var today = new Date();
var todayHtml = today.getFullYear() + '/' + (today.getMonth()+1) + '/' + today.getDate();
const ptag = document.createElement('p');
ptag.classList.add('today-text');
ptag.innerHTML = todayHtml;
const todayTitle =document.getElementById('today');
todayTitle.appendChild(ptag);


// dom
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");
/**
WebApi取得
}*/
async function getUsers() {
       // データのやり取り
       const res = await fetch("https://jsonplaceholder.typicode.com/users");
       const users = await res.json();
    return users;
}

async function listUsers() {
    const users = await getUsers();
    // Dom操作
    users.forEach(addList);
}

function addList(user) {
    const list = document.createElement("li");
    list.innerText = user.name;
    lists.appendChild(list);

}

// イベント
window.addEventListener("load", listUsers);
button.addEventListener("click", listUsers);