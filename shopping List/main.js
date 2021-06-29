const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd(){
    //1. 사용자가 입력한 텍스트를 받아온다.
    const text = input.value;
    if(text === ''){
        input.focus();
        return;
    }
    //2. 새로운 아이템을 만듬(텍스트 + trash 버튼)
    const item = createItem(text);
    //3. items 컨터이너안에 새로 만든 아이템을 추가한다.
    items.appendChild(item);
    //4. 새로 입력된 화면으로 이동(스크롤링)
    item.scrollIntoView({block: 'center'});
    //5. 인풋을 초기화 한다.
    input.value = '';
    input.focus(); 
}

let id = 0; //UUID같은 고유한 아이디를 사용하는것이 좋음
function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML = `
        <div class="item">
            <span class="item__name">${text}</span>
            <button class="trash">
                <i class="fas fa-trash-alt" data-id=${id}></i>
            </button>
        </div>
        <div class="item__divider"></div>`;
    id++;
    return itemRow;
}

addBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
        onAdd();
    }
});

items.addEventListener('click', (event) => {
    const id = event.target.dataset.id;
    if(id){
        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
        toBeDeleted.remove();
    }
});
