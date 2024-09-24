
let index = 0;


let flower_element = document.querySelectorAll('ul#flower-list li');


for (let i = 0; i < flower_element.length; i++) {
    flower_element[i].addEventListener('click', function() {
        index = flower_element[i].data
        showModal(index);
    });
}


const modal = document.getElementById('modal');

function showModal(idx) {
    modal.style.display = 'block';
}

const close = document.querySelector('.close-bg');

close.addEventListener('click', function() {
    modal.style.display = 'none';
=======
let index = 0;


let flower_element = document.querySelectorAll('ul#flower-list li');


for (let i = 0; i < flower_element.length; i++) {
    flower_element[i].addEventListener('click', function() {
        index = flower_element[i].data
        showModal(index);
    });
}


const modal = document.getElementById('modal');

function showModal(idx) {
    modal.style.display = 'block';
}

const close = document.querySelector('.close-bg');

close.addEventListener('click', function() {
    modal.style.display = 'none';

});

document.getElementById('loadtab-1').addEventListener('click', () => {
    // 非同期でデータを取得
    fetch('#')
      .then(response => response.json()) // JSON形式でレスポンスをパース
      .then(data => {
        // データをHTMLに反映
        const contentDiv = document.getElementById('content-1');
        contentDiv.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
      })
      .catch(error => {
        console.error('エラー:', error);
      });
});

document.getElementById('loadtab-2').addEventListener('click', () => {
    // 非同期でデータを取得
    fetch('#')
      .then(response => response.json()) // JSON形式でレスポンスをパース
      .then(data => {
        // データをHTMLに反映
        const contentDiv = document.getElementById('content-2');
        contentDiv.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
      })
      .catch(error => {
        console.error('エラー:', error);
      });
});

document.getElementById('loadtab-3').addEventListener('click', () => {
    // 非同期でデータを取得
    fetch('#')
      .then(response => response.json()) // JSON形式でレスポンスをパース
      .then(data => {
        // データをHTMLに反映
        const contentDiv = document.getElementById('content-3');
        contentDiv.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
      })
      .catch(error => {
        console.error('エラー:', error);
      });
});