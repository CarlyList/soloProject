import {By} from "selenium-webdriver"
import {BasePage} from "../basePage"

export class stagingBP extends BasePage {
    userName: By = By.name("email");
    password: By = By.name("password");
    signIn: By = By.css("submit")
    constructor() {
        super({url: "https://staging.goftx.com/"});
    }


}