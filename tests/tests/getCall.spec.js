import {test,expect} from '@playwright/test'

test("get call request", async ({request}) => {

    const resp = await request.get("https://dummy.restapiexample.com/api/v1/employees/")
    
    const respBody = await resp.body()
    //console.log(respBody);
    const respStatus = resp.status()
    //console.log(respStatus);
    const respStatusText = resp.statusText()
    console.log(respStatus);
    
    //expect(respStatus).toBe(200)
    
    
    // get the response as json body
    const repjson = await resp.json()
    //console.log(repjson)

    //get the response as headers
    const resHeaders = resp.headers()
    //console.log(resHeaders)

    //get the response of headersarray
    const resHeadersArray = resp.headersArray()
})