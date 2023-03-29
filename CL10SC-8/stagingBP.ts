import {By} from "selenium-webdriver"
import {BasePage} from "../basePage"

export class stagingBP extends BasePage {
    userName: By = By.name("email");
    password: By = By.name("password");
    signIn: By = By.xpath('//input[@class="btn btn-primary btn-block btn-lg"]');
    hamMenu: By = By.id("sidebar-trigger")
    posMenu: By = By.xpath('(//span[@data-original-title="Point Of Sale"])')
    invMenu: By = By.xpath('(//span[@data-original-title="Inventory"])')
    adjustmentMenu: By = By.xpath('(//span[@data-original-title="Adjustments"])')
    addNew: By = By.xpath('(//a[@class="btn btn-sm btn-success"])')
    memo: By = By.xpath('(//textarea[@id="adjustment_memo"])')
    locationDrop: By = By.xpath('(//span[@title="Select Location"])')
    locationSelect: By = By.xpath('(//li[@class="select2-results__option"][4])')
    adjustmentReason: By = By.xpath('(//textarea[@id="adjustment_reason"])')
    searchProduct: By = By.xpath('(//div[@id="product_list")')
    searchProduct1: By = By.name("product_list")
    add: By = By.xpath('(//a[@id="btn-add"])')
    applyAdjustment: By = By.xpath('(//input[@name="apply-adjustment"])')
    constructor() {
        super({url: "https://staging.goftx.com/"});
    }


}

//By = By.xpath('(//[@])')
//id="btn-add"

//searchProduct: By = By.xpath('(//button[@id="advanceSearch")')
//enterProduct: By = By.xpath('(//input[@class="form-control ui-autocomplete-input"])')
//select: By = By.xpath('(//td[@class="text-dotted sorting_1"])')
//add: By = By.xpath('(//button[@class="btn btn-sm btn-primary"])')