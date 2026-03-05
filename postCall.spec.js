import {test,expect} from '@playwright/test'

test.skip("make post request", async ({request}) => {

    const authdata = {

        "username" : "admin",
        "password" : "password123"
    }
   const resp = await request.post("https://restful-booker.herokuapp.com/auth",{headers:{"Content-Type":"application/json"},data:authdata})

   console.log(resp.status())
   const respdata = await resp.json()

   expect(respdata.token).not.toBe()
})

test.skip("create booking",async ({request}) => {

    const respdata = {
        "firstname" : "Jim",
        "lastname" : "Brown",
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
},
        "additionalneeds" : "Breakfast"
    }

   const resp = await request.post("https://restful-booker.herokuapp.com/booking",{headers:{"Content-Type":"application/json"},data:respdata})

   console.log(resp.status())

   console.log(await resp.json())
   console.log(resp.bookingid);
   
})

test("post data",async ({request}) => {

    const bookingData = {"firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"}}

    const resp = await request.post("https://restful-booker.herokuapp.com/booking",{headers:{"Content-Type":"application/json"},data:bookingData})

    console.log(await resp.json());
    
})



