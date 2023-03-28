import {stagingBP} from './stagingBP'
const staging = new stagingBP()

describe ('Sign into staging using user account', () => {
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
        await staging.click(staging.addNewItem)
        await staging.click(staging.upcGen)
        await staging.driver.sleep(3000)
        await staging.click(staging.nameEntry)
        await staging.setInput(staging.nameEntry, "Test item #")
        await staging.click(staging.pickCat)
        await staging.click(staging.catSelection)
        
      
        await staging.setInput(staging.costEntry, "1.00")
       
        await staging.setInput(staging.PriceEntry, "3.00")
        await staging.click(staging.saveButton)
        
    })
})

//pricebookMenu

//await staging.click(staging.productsMenu)
//await staging.click(staging.addNewItem)