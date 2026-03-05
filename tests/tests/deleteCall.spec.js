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
console.log(createdjson)


const deleteresp = await request.delete("https://restful-booker.herokuapp.com/booking/" +bookingID,{headers:{"Content-Type":"application/json","Cookie":"token="+authtoken}})

const deletestatus = deleteresp.status()
const deletetext = deleteresp.statusText()

console.log(deletestatus + deletetext);


    
    
        
})