class User {
    constructor(name, password) {
        this.name = name
        this.password = password

    }
}
class Transport {
    #owner
    constructor(mode, owner, start) {
        this.mode = mode
        this.#owner = owner
        this.start = start
    }

    getOwner() {
         return this.#owner()
    }


    makeStart() {
        console.log(this.start)
    }
    isStarted() {
        console.log('Transport is started')
    }
}



const users = [
    new User('oskar', '1223'),
    new User('adilet', 'qwerty'),
    new User('meerim', 'abcd'),
    new User('tima', 'timaKrutoy'),
    new User('nurdin', 'nurdinNeKrutoy'),
]

const btnSubmit = document.querySelector('#form')
btnSubmit.addEventListener('submit', ()=>{
    let login = document.getElementById('login').value
    let pass = document.getElementById('pass').value
    if (login === ''||pass ===''){
        alert('err')
        console.log('====')
    }
    else {
        let user = users.find((user)=>{
        return user.name === login && user.password === pass
    })
        if (login === user.name && )
        if (user === undefined){
            alert('unknown user')
        }
        alert(`welcome ${user.name}`)
        console.log('sadsd')
    }
})










console.log(users)