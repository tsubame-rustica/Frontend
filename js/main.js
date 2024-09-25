let index = 0;
console.log('main.js');

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
/*
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
*/
/*
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
*/
document.querySelector('.mySelect').addEventListener('change', function() {
  const selectedValue = this.value;
  const styledElement = document.querySelector('.season');
  
  if (selectedValue === '1') {
      styledElement.classList.add('styled');
  } else {
      styledElement.classList.remove('styled');
  }
});

document.querySelector('.mySelect').addEventListener('change', function() {
  const selectedValue = this.value;
  const styledElement = document.querySelector('.year');
  
  if (selectedValue === '2') {
      styledElement.classList.add('styled');
  } else {
      styledElement.classList.remove('styled');
  }
});

document.querySelector('.mySelect').addEventListener('change', function() {
  const selectedValue = this.value;
  const styledElement = document.querySelector('.kind');
  console.log('kind');
  if (selectedValue === '3') {
      styledElement.classList.add('styled');
  } else {
      styledElement.classList.remove('styled');
  }
});
console.log('kind');
document.addEventListener('DOMContentLoaded', function() {
  const initialValue = document.querySelector('.mySelect').value;
  const styledElement = document.querySelector('.season');
  console.log('season');
  if (initialValue === '1') {
      styledElement.classList.add('styled');
      console.log('season');
  }
});
