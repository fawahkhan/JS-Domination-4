// Observer Pattern--class based patterns

class YoutubeChannel{ //iss class se banne wale sabhi objeccts ek  youtube channel honge
    constructor(){
        this.subscribers = [];  // multiple subscribers hain isiliye array me daldiya subscribers .

    }

    subscribe(user){
        this.subscribers.push(user);
        user.update("You have Subscribed the channel")
    }
    unsubscribe(user){
        this.subscribers = this.subscribers.filter((sub) => sub!==user);
        user.update("You have un-subscribed the channel")
    }
    notify(){
        this.subscribers.forEach((sub) => sub.update(message))
    }
} 

class User {
    constructor(name){
        this.name = name;
    }
    update(data){
        console.log(data)
    }
}

let fawahkhxn = new YoutubeChannel();
let user1 = new User("Fawah"); 

fawahkhxn.subscribe(user1)