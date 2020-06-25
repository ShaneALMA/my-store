const util = {
  getElem(str_dom){
    const elem = document.querySelector(str_dom);
    return elem;
  },
  getElemAll(str_dom){
    const elems = document.querySelector(str_dom);
    return elems;
  },
  createElem(str_dom){
    const elem = document.createElement(str_dom);
    return elem;
  }
}

export default util;