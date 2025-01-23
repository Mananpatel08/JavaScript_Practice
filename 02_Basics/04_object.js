// singleton

// const tinderUser = new Object()             // singleton object create like this
tinderUser = {}

tinderUser.id = "User123"
tinderUser.name = "Mnana"

// console.log(tinderUser);

const regularUser = {
    email : "some@gmial.com",
    fullname : {
        first : "patel" , 
        last : "manan",
    }
}

console.log(regularUser.fullname.first)
