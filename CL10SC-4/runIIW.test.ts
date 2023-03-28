import {stagingBP} from './stagingBP'
const staging = new stagingBP()

describe ('Run the inactive wizard tool', () => {
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
        await staging.click(staging.inactiveItemWizard)
        await staging.click(staging.selectdept)
        await staging.click(staging.selectdept1)
        await staging.click(staging.runEval)
     
    })
}) 

//await staging.click(staging.selectDept1)
//await staging.click(staging.selectdept3)
//await staging.click(staging.runEval)