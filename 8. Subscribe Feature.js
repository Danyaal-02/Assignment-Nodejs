const EventEmitter=require('events')
const eventEmitter=new EventEmitter()
eventEmitter.addListener('subscribe',(channelName)=>{
    console.log(`Thanks For Subscribing to ${channelName}`)
})
eventEmitter.emit('subscribe','College Wallah')