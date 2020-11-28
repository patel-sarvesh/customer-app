import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  navigateToAddCustomer() : Promise<unknown> {
    return browser.get('add-customer') as Promise<unknown>;
  }

  setNewCustomerForm(): Promise<any> {
    element(by.id('inputName')).sendKeys('test');
    element(by.id('inputEmail')).sendKeys('test@gmail.com');
    element(by.id('inputPhone')).sendKeys('9876892132');
    element(by.id('inputAddress')).sendKeys('Bangalore');
    element(by.tagName('button')).click();
    return;
  }  
}
