# What is TypeScript, and how is it different from JavaScript?
### TypeScript is a high level programming language. It introduced by Microsoft for large applications. Basically it's a higher or upgraded version of JavaScript and it transpile to JavaScript before run. Everything in JavaScript are also available in TypeScript and TypeScript has some of their own features. TypeScript handle the types very strictly.

### JavaScript and TypeScript has some differences like -
### JavaScript can run in ts file but TypeScript can not run in js file.
### TypeScript supports all the JavaScript features but JavaScript doesn't support any typescript features.
### TypeScript code need to compile in JavaScript to run.
|

# Can you explain the difference between "interface" and "type" in TypeScript?
### interface and type are two of the main features in TypeScript. Interface is like the design or shape of the data. Both can be used for defining the shape of an Object. But most of the time, Interface described the shape of data like how many properties and what will be the properties and what is the types of those properties etc. And type defines the data type. like is the data is string or number or boolean etc.
|
# Can you give an example of how to use generics in TypeScript?
### Generics are used for reusing code. In generic function we have to use angular brackets and pass a value in the bracket. developers conventionally use T or Y but we can use any value as our preference. Here's an example 

## function name< T >(param: T[]): T[] {
## code here and than return
## }
|
# What is the "as" keyword used for in TypeScript?
### 'as' keyword can be used for multiple purpose. One of them is called type assertion. That used to tell the compiler that you treat this type as like this. example 
## const age = 54 as string
### here if we log the typeof age it will be string. Another one is called type casting. if we declare an interface and declare an object with any type than we can do 'object as interface'. here the interface is used as a type for this object. 

## interface Home {
##  name: string;
##  address: string;
## }

## let homeObj: any = { name: 'X villa', address:'chittagong' };
## let home: Home = homeObj as Home;
|
# Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?
### type guards with in
### interface Player {
###    name:string,
###    champ: boolean
### }

### const messi :Player = {name:'messi', 'champ':true}

### const result3 = 'champ' in messi
### console.log(result3);
### we can use "'champ' in messi" as a condition . thats a type guard
### and we can check any data type with typeof and use this as a type guard
### const name = 'person1'
### const result4 = typeof name
### here we will get a boolean value and we can use this as a type guard