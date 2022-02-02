var database = [
    {
        username: 'Paulo',
        password: '123'
    },
    {
        username: 'Pedro',
        password: '321'
    }
]

var newsfeed = [
    {
        username: 'Bobby',
        timeline: 'So tired from all that learning!'
    },
    {
        username: 'Mitch',
        timeline: 'Javascript is preetyy cool!'
    }
]

function isUserValid(username, password) {
    for (let i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true
        }
    }
    return false
}

function sigIn(username, password) {
    if (isUserValid(username, password) === true) {
        console.log(newsfeed)
    } else {
        console.log('Sorry wrong username or password')
    }
}

var userNamePrompt = prompt('What\'s your username?')
var passwordPrompt = prompt('What\'s your password?')

sigIn(userNamePrompt, passwordPrompt)