//object product START
const product = {
    name: "ball pen",
    isDeal : true,
    offer : "5%",
    price: 217,
    color: "blue",
    ratings: "5 stars"
}
//object product END
console.log(product);
console.log(product["name"]);
console.log(product["ratings"]);

//object profile START
const profile = {
    username : 'shreya27_8',
    followers : 500,
    following : 700,
    isFollow : false,
    posts: 70,
    bio : "Engineer"
}
console.log(profile);
console.log(profile.username);
profile.followers = 560;
//object profile END