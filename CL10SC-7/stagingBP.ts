import {By} from "selenium-webdriver"
import {BasePage} from "../basePage"

export class stagingBP extends BasePage {
    userName: By = By.name("email");
    password: By = By.name("password");
    signIn: By = By.xpath('//input[@class="btn btn-primary btn-block btn-lg"]');
    hamMenu: By = By.id("sidebar-trigger")
    posMenu: By = By.xpath('(//span[@data-original-title="Point Of Sale"])')
    invMenu: By = By.xpath('(//span[@data-original-title="Inventory"])')
    invCount: By = By.xpath('(//span[@data-original-title="Inventory Counts"])')
    markRead: By = By.xpath('(//button[@id="hide_module_change_text_modal"])')
    inv_def: By = By.xpath('//span[text()="Inventory Definitions"]')
    addNewDef: By = By.xpath('(//a[@class="btn btn-sm btn-success"])')
    nameEntry: By = By.xpath('(//input[@id="name"])')
    filterSelection: By = By.xpath('(//span[@class="select2-selection__rendered"])')
    selectFilter: By = By.xpath('(//span[text() = "Filter by Category"])')
    manage: By = By.xpath('(//a[@id="manage-filters"])')
    selectFilter2: By = By.xpath('(//a[@class="btn btn-xs btn-default pull-right"][1])')
    apply: By = By.xpath('(//button[@class="btn btn-success"])')
    save: By = By.xpath('(//input[@class="btn btn-sm btn-success saveSuccess"])')



    constructor() {
        super({url: "https://staging.goftx.com/"});
    }


}

//By = By.xpath('(//[@])')
//class="btn btn-xs btn-default pull-right"
//class="select2 select2-container select2-container--default select2-container--below select2-container--open"
//By = By.xpath('(//span[@class="select2 select2-container select2-container--default select2-container--below select2-container--open"])')
//await staging.driver.sleep(3000)
//By = By.xpath('(//a[@class="btn btn-xs btn-default pull-right"])')