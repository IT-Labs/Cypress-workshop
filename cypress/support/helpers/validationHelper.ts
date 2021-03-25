/// <reference types = "cypress"/>
export class ValidationHelper {

    static verifyElementHaveCss(
      targetElement,
      css) {
      return targetElement.should('have.css', css, targetElement);
    }
  
    static verifyElementHaveClass(
      targetElement,
      css) {
      return targetElement.should('have.class', css, targetElement);
    }
  
    static verifyElementContainText(
      targetElement,
      text) {
      return targetElement.should('contain', text, targetElement);
    }
  
    static verifyElementHaveValue(
      targetElement,
      text) {
      return targetElement.should('have.value', text, targetElement);
    }
  
    static verifyElementEnabled(
      targetElement) {
      return targetElement.should('not.be.disabled', targetElement);
    }
  
    static verifyElementDisabled(
      targetElement) {
      return targetElement.should('be.disabled', targetElement);
    }
  
    static verifyTitle(titleObject, titleText) {
      return titleObject.should('eq', titleText);
    }
  
    static verifyElementHidden(
      targetElement) {
      return targetElement.should('be.hidden', targetElement);
    }
    
    static verifyElementVisible(
      targetElement) {
      return targetElement.should('be.visible', targetElement);
    }
  
  }