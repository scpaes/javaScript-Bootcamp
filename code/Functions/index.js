const user1 = "Reed";
const user2 = "Doug";

const message = `User (user) says: (text)`;

function userSendMessage (user, text)
{
    console.log(`User ${user} says: ${text}`)
}

userSendMessage(user1, 'hi')
userSendMessage(user2, 'whats up?')
// console.log('hello world');
// console.log('hello world');

// input -> performs an action
// input -> returns some data
function echo(input, greeting) {
 `${greeting} ${input}`;  
}

const result = echo(42, "Hi");
console.log(result);