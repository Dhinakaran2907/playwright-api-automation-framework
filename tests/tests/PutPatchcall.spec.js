// PUT : it replace the entire source with the new file
// PATCH - it is a partial update it only update which source or which part we want to update

import {test,expect} from '@playwright/test'

test("make PUT and Patch request",async ({request}) => {

    const authdata =
     {
        "username" : "admin",
        "password" : "password123"
    }
   const tokens = await request.post("https://restful-booker.herokuapp.com/auth",{headers:{"Content-Type":"application/json"},data:authdata})

   const jsonrep = await tokens.json()

   const authtoken = jsonrep.token
   console.log("The token is " + authtoken);

   const newBooking = {
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

const createresp = await request.post("https://restful-booker.herokuapp.com/booking/",{headers:{"Content-Type":"application/json"},data:newBooking})

const createdjson = await createresp.json()

const bookingID = createdjson.bookingid

console.log("This is booking ID "+ bookingID)

    
    const updatedata = 
    {
       
        "firstname" : "mike",
        "lastname" : "Jack",
        "totalprice" : 115,
        "depositpaid" : true,
        "bookingdates" : {
        "checkin" : "2025-01-01",
        "checkout" : "2026-01-01"},

        "additionalneeds" : "Drinks"
    }
    
    const updatedreq = await request.put("https://restful-booker.herokuapp.com/booking/" + bookingID,{
        
        headers:{"Content-Type":"application/json","Accept":"application/json","Cookie":"token="+authtoken},
        data:updatedata})

        const updatedJson = await updatedreq.json()

        console.log(updatedJson);

     const patchData = {
        "firstname" : "PAUL",
        "lastname" : "WALKER"
     }   

     const patchreq = await request.patch("https://restful-booker.herokuapp.com/booking/" + bookingID,{
        headers:{"Content-Type":"application/json","Accept":"application/json","Cookie":"token="+authtoken},
        data:patchData})

     const patchedjson = await patchreq.json()

     console.log(patchedjson);
     
        
})