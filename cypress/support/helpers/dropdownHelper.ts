/// <reference types = "cypress"/>
export class DropDownHelper {

    static matSelectValue(targetElement, option) {
      targetElement.find('div > div.mat-select-arrow-wrapper').click().then(() => {
        cy.get('mat-option')
          .contains(option)
          .then(option => {
            option[0].click();
          });
      })
    }
  
  }