const EventEmitter=require('events')
const eventEmitter=new EventEmitter()

function subscriberMessage(channelName){
    console.log(`Thanks For Subscribing to ${channelName}`)
}

eventEmitter.addListener('subscribe',subscriberMessage)
console.log('Calling event listener before removing the event')
eventEmitter.emit('subscribe','College Wallah')

console.log(`The default maximum number of event listners are: ${eventEmitter.getMaxListeners()}`);

eventEmitter.setMaxListeners(5);

console.log(`The updated maximum number of event listners are: ${eventEmitter.getMaxListeners()}`)