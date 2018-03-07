class SweetSelector {
  static select(input){
    if (input[0] == '#') {
      return document.querySelector(input);
    } else if (input[0] == '.') {
      let doc = document.querySelectorAll(input);
      if (doc.length == 1) {
        return  document.querySelector(input);
      }
      return doc;
    } else if (input[0] != '.' && input[0] != '#') {
      return document.querySelector(input);
    }
  }
}

class DOM {
  static hide(selector){
    let element = SweetSelector.select(selector);
    element.style.display = "none"
  }
  static show(selector){
    let element = SweetSelector.select(selector);
    element.style.display = "block"
  }
  static addClass(selector,className){
    let element = SweetSelector.select(selector);
    element.classList.add(className);
  }
  static removeClass(selector,className){
    let element = SweetSelector.select(selector);
    element.classList.remove(className);
  }
}

class EventDispatcher {
  static on(selector,event,callback){
    const element = SweetSelector.select(selector);
    element.addEventListener(event, callback);
  }
  static trigger(selector,event){
    const element = SweetSelector.select(selector);
    if (event == 'click') {
      element.click();
    }
  }
}
