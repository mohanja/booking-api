import express from "express"

const app=express()

const PORT=4000
app.get("/",function(req,res){
    res.send("welcome booking api")
})

const rooms=[{
    id:"201",
    available:"2",
    amenities:"free wi-fi,house cleaning,tea and coffe,one time food,AC ",
    price1hour:900
},
{
    id:"202",
    available:"3",
    amenities:"free wi-fi,house cleaning,tea and coffe, food free,AC ",
    price1hour:1500
},
{
    id:"203",
    available:"5",
    amenities:"free wi-fi,house cleaning,tea and coffe ",
    price1hour:500
}]

app.get("/rooms",function(req,res){
    res.send(rooms)
})

const booking=[{
    id:"102",
    customerName:"jaya",
    date:"1/1/2022",
    start:"1:00pm",
    end:"4:00pm",
    roomid:"1"
},{
    id:"103",
    customerName:"ram",
    date:"1/1/2022",
    start:"12:00pm",
    end:"12:00pm",
    roomid:"2"
},{
    id:"103",
    customerName:"ramya",
    date:"1/1/2022",
    start:"4:00am",
    end:"4:00pm",
    roomid:"3"
},{
    id:"104",
    customerName:"janu",
    date:"1/1/2022",
    start:"2:00pm",
    end:"8:00pm",
    roomid:"4"
},{
    id:"105",
    customerName:"raja",
    date:"1/1/2022",
    start:"9:00pm",
    end:"9:00pm",
    roomid:"5"
},{
    id:"106",
    customerName:"virat",
    date:"1/1/2022",
    start:"12:00am",
    end:"3:00pm",
    roomid:"6"
},{
    id:"107",
    customerName:"jadav",
    date:"1/1/2022",
    start:"1:00am",
    end:"5:00pm",
    roomid:"7"
},{
    id:"108",
    customerName:"rana",
    date:"2/1/2022",
    start:"12:00pm",
    end:"4:00pm",
    roomid:"8"
}
]


app.get("/booking",function(req,res){
    res.send(booking)
})

app.get("/booking/:id",function(req,res){
    const {id}=req.params
    console.log(req.params.id)
const bookings=booking.find((bks)=>bks.id===id)
    console.log(bookings)
    bookings
    ?res.send(bookings)
    :res.status(404).send({message:"bookings is found"})
})

const booked=[{
    id:"309",
    roomname:"vip",
    status:"single bed",
    customerName:"ruban",
    date:"31/12/2021",
    start:"1:00pm",
    end:"4:00pm"
   
},{
    id:"310",
    roomname:"diomend",
    status:"famly room",
    customerName:"ramya",
    date:"12/1/2022",
    start:"12:00pm",
    end:"3:00pm",
   
},{
    id:"311",
    roomname:"platinam",
    status:"double",
    customerName:"veera",
    date:"2/1/2022",
    start:"4:00am",
    end:"3:00pm",
 
},{
    id:"312",
    roomname:" vip",
    status:"couple",
    customerName:"vimal",
    date:"15/1/2022",
    start:"2:00pm",
    end:"12:00pm",
   
},{
    id:"313",
    roomname:"vip",
    status:"double",
    customerName:"raj",
    date:"2/1/2022",
    start:"9:00pm",
    end:"6:00pm",

},{
    id:"314",
    roomname:"daimond",
    status:"famly",
    customerName:"vikram",
    date:"1/1/2022",
    start:"8:00am",
    end:"3:00pm",

},{
    id:"315",
    roomname:"daimend",
    status:"famely",
    customerName:"deva",
    date:"1/2/2022",
    start:"1:00am",
    end:"1:00pm",

},{
    id:"316",
    roomname:"vip",
    status:"single bed",
    customerName:"rajesh",
    date:"20/1/2022",
    start:"4:00pm",
    end:"4:00am",
  
}
]

app.get("/booked",function(req,res){
    res.send(booked)
})

app.get("/booked/:id",function(req,res){
    const {id}=req.params
    console.log(req.params.id)
const bookeds=booked.find((bks)=>bks.id===id)
    console.log(bookeds)
    bookeds
    ?res.send(bookeds)
    :res.status(404).send({message:"bookings is found"})
})

const customer=[{
    id:"609",
    roomname:"vip",
    customerName:"ruban",
    date:"31/12/2021",
    start:"1:00pm",
    end:"4:00pm",
},{
    id:"610",
    roomname:"diomend",
    customerName:"ramya",
    date:"12/1/2022",
    start:"12:00pm",
    end:"3:00pm",
   
},{
    id:"611",
    roomname:"platinam",
    customerName:"veera",
    date:"2/1/2022",
    start:"4:00am",
    end:"3:00pm",

},{
    id:"612",
    roomname:" vip",
    customerName:"vimal",
    date:"15/1/2022",
    start:"2:00pm",
    end:"12:00pm",
  
},{
    id:"613",
    roomname:"vip",
    customerName:"raj",
    date:"2/1/2022",
    start:"9:00pm",
    end:"6:00pm",

},{
    id:"614",
    roomname:"daimond",
    customerName:"vikram",
    date:"1/1/2022",
    start:"8:00am",
    end:"3:00pm",

},{
    id:"615",
    roomname:"daimend",
    customerName:"deva",
    date:"1/2/2022",
    start:"1:00am",
    end:"1:00pm",
  
},{
    id:"616",
    roomname:"vip",
    customerName:"rajesh",
    date:"20/1/2022",
    start:"4:00pm",
    end:"4:00am",
  
}
]

app.get("/customer",function(req,res){
    res.send(customer)
})
app.get("/customer/:id",function(req,res){
    const {id}=req.params
    console.log(req.params.id)
const customers=customer.find((bks)=>bks.id===id)
    console.log(customers)
    customers
    ?res.send(customers)
    :res.status(404).send({message:"bookings is found"})
})


const all=[{
    id:"509",
    customerName:"ruban",
    roomname:"vip",
    date:"31/12/2021",
    start:"1:00pm",
    end:"4:00pm",
    bookingid:"9876",
    bookingdate:"20/12/2021",
    status:"single bed",

},{
    id:"510",
    customerName:"ramya",
    roomname:"diomend",
    date:"12/1/2022",
     start:"12:00pm",
     end:"3:00pm",
    bookingid:"9875",
    bookingdate:"4/1/2022",
   status:"famly room",
},{
    id:"511",
    customerName:"veera",
    roomname:"platinam",
    date:"19/1/2022",
    start:"4:00am",
     end:"3:00pm",
    bookingid:"9875",
    bookingdate:"20/12/2021",
    status:"double",
},{
    id:"512",
    customerName:"vimal",
    roomname:" vip",
    date:"15/1/2022",
    start:"2:00pm",
    end:"12:00pm",
    bookingid:"9874",
    bookingdate:"2/1/2022",
   status:"couple",
},{
    id:"513",
    customerName:"raj", 
    roomname:"vip",
    date:"2/1/2022",
    start:"9:00pm",
    end:"6:00pm",
    bookingid:"9873",
    bookingdate:"2/12/2021",
status:"double",
},{
    id:"514",
    customerName:"vikram",
    roomname:"daimond",
    date:"1/1/2022",
    start:"8:00am",
    end:"3:00pm",
    bookingid:"9874",
    bookingdate:"20/12/2021",
status:"famly",
},{
    id:"515",
   customerName:"deva", 
    roomname:"daimend",
    date:"1/2/2022",
    start:"1:00am",
    end:"1:00pm",
    bookingid:"9873",
    bookingdate:"22/12/2021",
    status:"famely",
},{
    id:"516",
   customerName:"rajesh",
    roomname:"vip", 
    date:"20/1/2022",
    start:"4:00pm",
    end:"4:00am",
    bookingid:"9872",
    bookingdate:"3/1/2022",
    status:"single bed",
}
]

app.get("/all",function(req,res){
    res.send(all)
})

app.get("/all/:id",function(req,res){
    const {id}=req.params
    console.log(req.params.id)
const list=all.find((bks)=>bks.id===id)
    console.log(list)
    list
    ?res.send(list)
    :res.status(404).send({message:"bookings is found"})
})



app.listen(PORT,()=>console.log('the server is start in:$ PORT 4000❤️❤️'))