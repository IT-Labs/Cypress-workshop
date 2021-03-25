/// <reference types = "cypress"/>
export class WaitHelper {

    static waitForElementVisibility(
      targetElement,
      message = 'Element should be visible'
    ) {
      return targetElement.should('be.visible', targetElement + message);
    }
  
  }
  