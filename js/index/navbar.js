import u from '../util.js'

// DOM
const bottomBar = u.getElem('.bottom-bar');
const btnSearch = u.getElem('#btn-search');
const btnMenu = u.getElem('#btn-menu');

// consts
const formSearch = u.createElem('form');
const inputSearch = u.createElem('input');
const btnInputSearch = u.createElem('button');
formSearch.className = 'form-search';
inputSearch.placeholder = 'Buscar';
btnInputSearch.innerHTML = 
`
<img class="img-nav" src="img/search.svg">
`;
formSearch.appendChild(inputSearch);
formSearch.appendChild(btnInputSearch);

const moreOpts = u.createElem('div');
moreOpts.className = 'more-opts';
moreOpts.innerHTML = 
`
<div class="img-nav-cont">
  <img class="img-nav" src="img/dark_light.svg">
</div>
`;
// default container
bottomBar.appendChild(formSearch);

const bottomBarHeight = bottomBar.offsetHeight;
// hidding bottom bar
bottomBar.style.height = '0';

let isOpenBottombar = false;
let currentCont = '';
function searchForm(){
  if(!isOpenBottombar){
    bottomBar.innerHTML = '';
    bottomBar.appendChild(formSearch);
    showBottomBar();
    showCloseIcon(btnSearch);
    currentCont = 'search';
    isOpenBottombar = true;
  }else if(isOpenBottombar && currentCont !== 'search'){
    bottomBar.innerHTML = '';
    bottomBar.appendChild(formSearch);
    showCloseIcon(btnSearch);
    showFirstIcon(btnMenu);
    currentCont = 'search';
  }else if(isOpenBottombar && currentCont === 'search'){
    closeBottomBar();
    showFirstIcon(btnSearch);
    isOpenBottombar = false;
  }
}

function moreOptions(){
  if(!isOpenBottombar){
    bottomBar.innerHTML = '';
    bottomBar.appendChild(moreOpts);
    showBottomBar();
    showCloseIcon(btnMenu);
    currentCont = 'menu';
    isOpenBottombar = true;
  }else if(isOpenBottombar && currentCont !== 'menu'){
    bottomBar.innerHTML = '';
    bottomBar.appendChild(moreOpts);
    showCloseIcon(btnMenu);
    showFirstIcon(btnSearch);
    currentCont = 'menu';
  }else if(isOpenBottombar && currentCont === 'menu'){
    closeBottomBar();
    showFirstIcon(btnMenu);
    isOpenBottombar = false;
  }
}

function showFirstIcon(btn){
  btn.children[0].classList.remove('img-nav-scale');
  btn.children[1].classList.add('img-nav-scale');
  btn.classList.remove('img-nav-cont-red');
}
function showCloseIcon(btn){
  btn.children[0].classList.add('img-nav-scale');
  btn.children[1].classList.remove('img-nav-scale');
  btn.classList.add('img-nav-cont-red');
}
function showBottomBar(){
  bottomBar.style.height = bottomBarHeight + 'px';
}

function closeBottomBar(){
  bottomBar.style.height = '0';
}

btnInputSearch.addEventListener('click', e => {
  e.preventDefault();
  console.log('submiting...');
});

btnSearch.addEventListener('click', searchForm);
btnMenu.addEventListener('click', moreOptions);