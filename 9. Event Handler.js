const EventEmitter=require('events')
const eventEmitter=new EventEmitter()

function subscriberMessage(channelName){
    console.log(`Thanks For Subscribing to ${channelName}`)
}

eventEmitter.addListener('subscribe',subscriberMessage)
console.log('Calling event listener before removing the event')
eventEmitter.emit('subscribe','College Wallah')

console.log("Calling event listner after removing the event.")
eventEmitter.removeListener("subscribe", subscriberMessage)

eventEmitter.emit("subscribe", "College Wallah")