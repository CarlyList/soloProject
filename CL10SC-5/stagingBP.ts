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
    remoteSaleMenu: By = By.xpath('(//div[@id="9"])')
    addNew: By = By.xpath('(//a[@class="btn btn-sm btn-success"])')
    saleDesc: By = By.xpath('(//input[@name="comment"])')
    location: By = By.xpath('(//span[@id="select2-selectLocation-container"])')
    locationDrop: By = By.xpath('(//li[@class="select2-results__option"][2])')
    save: By = By.xpath('(//input[@value="Save"])')

    addProduct: By = By.xpath('(//a[@id="itemAddUpdateBtn"])')
    searchUPC: By = By.xpath('(//input[@id="product_upc"])')
    save1: By = By.xpath('(//button[@class="btn btn-info btn-sm"])')
    cancle: By = By.xpath('(//a[@class="btn btn-sm btn-default"])')
    constructor() {
        super({url: "https://staging.goftx.com/"});
    }


}

//By = By.xpath('(//[@])')
//By = By.xpath('(//a[@id="itemAddUpdateBtn""])')
