/// <reference types = "cypress"/>
export class TextBoxHelper {
    static type(targetElement, text) {
      return targetElement.type(text);
    }
  
    static typeDownArrowEnter(targetElement) {
      return targetElement.type('{downarrow}{enter}');
    }
  
    static clear(targetElement) {
      return targetElement.clear();
    }
  }