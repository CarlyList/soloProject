import {By} from "selenium-webdriver"
import {BasePage} from "../basePage"

export class stagingBP extends BasePage {
    userName: By = By.name("email");
    password: By = By.name("password");
    signIn: By = By.xpath('//input[@class="btn btn-primary btn-block btn-lg"]');
    hamMenu: By = By.id("sidebar-trigger")
    posMenu: By = By.xpath('(//span[@data-original-title="Point Of Sale"])')
    pricebookMenu: By = By.xpath('(//span[@data-original-title="Pricebook"])')
    productsMenu: By = By.xpath('(//span[@data-original-title="Products"])')
    addNewItem: By = By.xpath('(//a[@class="btn btn-sm btn-success"])')
    upcGen: By = By.xpath('(//a[@data-title="Auto generate UPC"])')
    nameEntry: By = By.xpath('(//input[@id="product_name"])')
    pickCat: By = By.xpath('//a[text()="Pick Category"]')
    catSelection: By = By.xpath('(//a[@class="btn btn-xs btn-default pull-right"])[1]')
    dept: By = By.xpath('(//span[@class="select2-selection__arrow"])')

    costEntry: By = By.xpath('(//span[@class="form-control w90 ui-spinner-input price-input"])[0]')
    PriceEntry: By = By.xpath('(//span[@class="form-control w90 ui-spinner-input price-input"])[1]')
    saveButton: By = By.xpath('(//input[@class="btn btn-sm btn-success saveSuccess"])')

    constructor() {
        super({url: "https://staging.goftx.com/"});
    }


}

//class="select2-selection__arrow"
//data-original-title="Products"
//class="btn btn-sm btn-success"
//By = By.xpath('(//[@])')