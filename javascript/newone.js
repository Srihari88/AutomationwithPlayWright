console.log("Srihari")

let sri=["srihari","naidu","pudu"]

console.log(sri[0])
console.log(sri[1])
console.log(sri[2])

sri[2]="HariNaidu"

console.log(sri)

console.log(sri.length)


let naidu=[1,2,3,4,5]
console.log(naidu)

console.log("First index value is,",naidu[0])
console.log(naidu[1])
console.log(naidu[2])
console.log(naidu[3])
console.log(naidu[4])


let user1={
    name:'srihari',
    company:'chegg',
    location:'Delhi'
}

let user2={
    name:'bawana',
    company:'home',
    location:'Vizag'
}

let user3=user1

console.log(user3==user1)


let age=35
const   gravity=9.81
let mass=72
const PI=3.14


console.log(age,gravity,mass,PI)

const P1=Math.PI

console.log(P1)


let randomNum = Math.random()

let final=randomNum*11


let randomNums = Math.floor(final)

console.log(randomNums)


// Strings methods 

let space =' '
let firstname='Srihari'
let lastname='Naidu'
let country='India'
let language='Javascript'
let job='teacher'
let quoto=`The saying,'Seeing is Believing' is not correct in 2020.`
let quotWithBackTick=`The saying,'Seeing is Believing' is not correct in 2020.`

let fullName=firstname+space+lastname
console.log(fullName)

let personalInfo='My name is '+firstname+' I am a teaching ' +language

console.log(personalInfo)


const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)

let myAge=34

console.log('my Age is ',myAge)


let a=2
let b=5

console.log(`The sub of ${a} and ${b} is: ${a+b}`)


let js = 'JavaScript'

console.log(js.length) 


let firstName = 'Asabeneh'
console.log(firstName.length)

console.log(firstName[0])
console.log(firstName[1])
console.log(firstName[2])

console.log(firstName[firstName.length-1])


console.log(firstName.toUpperCase())
console.log(firstName.toLowerCase())

let mystring='JavaScript'

console.log(mystring.substr(4,8))


let string="30 days of the javascript"

let mysplit=string.split(' ')
console.log(mysplit)