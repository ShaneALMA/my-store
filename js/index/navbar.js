import u from '../util.js'

// DOM
const bottomBar = u.getElem('.bottom-bar');
const btnSearch = u.getElem('#btn-search');
const btnMenu = u.getElem('#btn-menu');
// const btnSearchIpt = u.getElem('#btn-search-ipt');
// const iptSearch = u.getElem('#ipt-search');

// consts
const bottomBarHeight = bottomBar.offsetHeight;
let openSearchForm = false;
let openMoreOptions = false;
const formSearch = u.createElem('form');
formSearch.innerHTML = 
`

`;

// hidding bottom bar
bottomBar.style.height = '0';

function searchForm(){
  if(!openSearchForm && !openMoreOptions){
    openSearchForm = true;
    showBottomBar();
  }
  if(openSearchForm || openMoreOptions){
    
  }
  btnSearch.children[0].classList.toggle('img-nav-scale');
  btnSearch.children[1].classList.toggle('img-nav-scale');
  btnSearch.classList.toggle('img-nav-cont-red');
  // iptSearch.focus();
}

function moreOptions(){
  if(!openMoreOptions && !openSearchForm){
    openMoreOptions = true;
    showBottomBar();
  }

  btnMenu.children[0].classList.toggle('img-nav-scale');
  btnMenu.children[1].classList.toggle('img-nav-scale');
  btnMenu.classList.toggle('img-nav-cont-red');
}

function showBottomBar(){
  
  if(bottomBar.offsetHeight === 0){
    bottomBar.style.height = bottomBarHeight + 'px';
  }else{
    bottomBar.style.height = '0';
    // setTimeout(() => {
    //   iptSearch.blur();
    // }, 0);
  }
}

// btnSearchIpt.addEventListener('click', e => {
//   e.preventDefault();
//   console.log('submiting...');
// });

btnSearch.addEventListener('click', searchForm);
btnMenu.addEventListener('click', moreOptions);