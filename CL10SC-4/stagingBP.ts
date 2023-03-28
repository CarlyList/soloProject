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
    inactiveItemWizard: By = By.xpath('(//a[@id="inactiveItemWizard"])')

    selectdept: By = By.xpath('(//span[@id="select2-inactiveWizardDepartmentId-container"])')

    selectdept1: By = By.xpath('(//li[text()= "1 - 01-CIGS FULL"])')
    selectdept2: By = By.xpath('(//[@)')
    runEval: By = By.xpath('(//a[@class="btn btn-xs btn-info"])')
    constructor() {
        super({url: "https://staging.goftx.com/"});
    }


}

//By = By.xpath('(//[@])')
//title="1 - 01-CIGS FULL"
//class="btn btn-xs btn-info"
//class="select2-selection select2-selection--single"

//selectdept: By = By.xpath('(//span[@role="presentation"])')
//selectDept1: By = By.xpath('(//li[@class="select2-results__option"[1])')