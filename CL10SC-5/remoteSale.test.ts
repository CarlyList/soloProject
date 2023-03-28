import {stagingBP} from './stagingBP'
const staging = new stagingBP()

describe ('create remote sale', () => {
    test('', async() =>{
        await staging.navigate()
        await staging.click(staging.userName)
        await staging.setInput(staging.userName, "scandata@goftx.com")
        await staging.click(staging.password)
        await staging.setInput(staging.password, "FasTrax0!")
        await staging.click(staging.signIn)
        await staging.click(staging.hamMenu)
        await staging.click(staging.posMenu)
        await staging.click(staging.pricebookMenu)
        await staging.click(staging.productsMenu)
        await staging.driver.sleep(3000)
        await staging.driver.manage().window().maximize()
        await staging.click(staging.remoteSaleMenu)
        await staging.driver.sleep(3000)
        await staging.click(staging.addNew)
        await staging.click(staging.saleDesc)
        await staging.setInput(staging.saleDesc, "Dan's Order")
        await staging.click(staging.location)
        await staging.click(staging.locationDrop)
        await staging.click(staging.save)
        await staging.driver.sleep(3000)
        await staging.click(staging.addProduct)
        await staging.click(staging.searchUPC)
        await staging.setInput(staging.searchUPC, "123123")
        

    })
})