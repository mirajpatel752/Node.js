const EventEmitter = require("events")

const event = new EventEmitter();

// event.on("sayMyname",()=>{
//     console.log("hello  Miraj")
// })
// event.on("sayMyname",()=>{
//     console.log("hello  bhanderi")
// })
// event.on("sayMyname",()=>{
//     console.log("hello  patel")
// })

// event.emit("sayMyname")

event.on("checkPage",(sc,msg)=>{
    console.log("hello  patel",sc,msg)
})
event.emit("checkPage",200,"ok")
