// let a=20

// console.log(20);



// let b='sameer'
// console.log(b);

// alert(b)





// let a:number=20
// let a=<number> 20





//the uninion type



// let address:string|number;

// address=20
// address='karachi'


// two dataTypes in one variable





// const sum=(a:number,b:number):number=>{


//     return a+b
// }



// console.log(sum(2,4));
//6



// let data:number|string='sameer'


// let a=data
// a=true


// Error






// type userName=(num1:number,num2:number)=>number


// const func:userName=(num1,num2)=>{
// console.log(num1+num2);
// return num1+num2

// }








// type userName=(num1:string,num2:string)=>string


// const func:userName=(num1,num2)=>{
// console.log(num1+num2);
// return num1+num2

// }






// const num:number[]=[12,3,4,5,6]
//only numbers allowed in an array




///////////


// const num:string[]=['sameer','uzair','ahsan']


// const stringarray:Array<string>=['sameer']
//only string alow in an array



////////////////////


// const array:any[]=[true,'sameer','raza']






// const arr:Array<string|number|boolean>=['sameer',12,true]



// const arr:[string,string,string]=['sameer','sameer','sameer']
//this is called fixed array

///Object



// type Obj={
//     height:number;
//     weight:number;
//     gendre:string;
// }
// const obj:Obj={
//     height:12,
//     weight:90,
//     gendre:'male'
// }
//////////////////
// type Obj={
//     height:number;
//     weight:number;
//     gendre?:string;
// }
// const obj:Obj={
//     height:12,
//     weight:90,
//   
// }
//////////////////////


// interface Obj{
//          height:number;
//         weight:number;
//         gendre?:string;
// }


// interface NewObj extends Obj{
//          scolar:boolean;
//          func:(a:number)=>void;
// }


// const gigi:NewObj={
//     height:90,
//     weight:300,
//     scolar:true,
//     func:(a:number)=> {
//         console.log(a);
//     }
// }

// gigi.func(20)




/// Functions in typeScript



// type Functions=(n:number,m:number,l?:number)=>number;

// const functions:Functions=(n,m,l)=>{
//     if(l===undefined){
//         return n+m
//     }

//     return n*m
// }







// type Functions=(n:number,m:number,l?:number)=>number|string;

// const functions:Functions=(n,m,l)=>{
//     if(l===undefined){
//         return "l is not defined"
//     }

//     return n*m
//Functions(2,3)
// }



    // function functions(n:number,m:number,l?:number):number|string{
    //     if(l===undefined){
    //         return "l is not defined"
    //     }
    
    //     return n*m
    // }
    // console.log(functions(2,3));
    

    // type Functions=(...n:number[])=>number[];
    // const func:Functions=(...n)=>{
    //      return(n)}
    //     func(2,3,3,3,3,3)

    ///////////////////////






    // type GetDataType=(product:
    //     {
    //         name:string,
    //         stock:boolean,
    //         price:number,
    //         photo:string
    //     }) => void



    //     const getData:GetDataType=(product)=>{
    //         console.log(product);
            
    //     }


    //     getData({
    //         name: "Product1",
    //         stock: true,
    //         price: 20,
    //         photo: "product1.jpg",
        
    //     });



    //    type typethememode= 'dark' | 'light'


    //    const mode:typethememode='light'
    //    const mode2:typethememode='dark'


    











    //  const getNumber=(...n:number[])=>{
    //      return n.reduce((acc,item)=>   acc + item
    //     ,0)
    //  }



    //  console.log(getNumber(1,2,3,4))



    //  const getNumber = (...n: number[]) => {
    //     return n.reduce((acc, item) => acc + item, 0);
    // };
    
    // console.log(getNumber(1, 2, 3, 4)); // Output: 10





    // type User={
    // //  name: string,
    // //  age:number,
    // //  firstName?:string

    // }
    



    //  let user:User={
    //  name:'sameer',
    //  age:12,
    //  firstName:'raza'
    //  }


    //  function login(userData:User){
    //    return userData
    //  }

    //  console.log(login({
    //     name:'ahsan',
    //     age:19,
        
    //  }));


//////////////////////////////////////



// interface data{
//     AccountName:string;
//     isActive:boolean
//     AccountBalanced:number
// }
     

// interface bankAcount{
//    accoyntName:string,
//     accountHolder:boolean,
//     balance:number,
//     isActive:data,
//     transetion:boolean
// }


// const bankaccount:bankAcount={
// accoyntName:'paypal',
// accountHolder:true,
// balance:12020,
// isActive:{
//     AccountName:'jasscash',
//     isActive:false,
//     AccountBalanced:129018
// },
// transetion:false
// }






// interface Book{
//     name:string,
//     page:number
// }

// interface Ebook extends Book {
//     duration:number;
// }

// interface Ebook2 extends Ebook{
//     lasttime:string
// }

// const book:Ebook2={
//     name:'marvel',
//     page:12,
//     duration:12,
//     lasttime:'3years'
// }



//extends give the property of parient interface



// merge a two interface



// interface Book{
//     name:string;
//     duration:number
// }

// interface Book{
//     size:number
// }

// const book:Book={
// name:'arvel',
// duration:120,
// size:120
// }




////////////////////////////////

// a defference betweeen interface and type is that interfave only for onjects and type is used both object and variables
// interface is used as a merging also but type does not




type Id=number|string



// const idUser=(id:Id):number=>{

//     // console.log(id);
//     return id as number
    
// }


// console.log(idUser(12));


//NARROWING

// const idUser=(id:Id)=>{

//  if (typeof id==='string') {
//     console.log(id.toUpperCase());
//  }
// else{
//     console.log(id);
    
// }
// }




/////////////////////////////////






// const firstThree=(x:string|any[])=>{
//     return x.slice(0,3)
// }

// console.log(firstThree([1,2,3,4,2,2]));

// (3) [1, 2, 3]0: 11: 22: 3length: 3[[Prototype]]: Array(0)









// const firstThree=(x:string|any[])=>{
//     return x.slice(0,3)
// }

// console.log(firstThree('sameer'));

//sam


//slice is used to from to to
// matlab kha se kha tkk






// const logString=(arg:string)=>{
//     console.log(arg);
//     return arg
// }

// console.log(logString('ahsan'));




// const logNumber=(arg:number)=>{
// console.log(arg);
// return arg

// }

// console.log(logNumber(1));





// const logArray=(arg:any[])=>{
// console.log(arg);

// return arg

// }

// console.log(logArray([1,2,34]));

//its not okey 

// thats why we used genrics



// const anyThing=<T>(arg:T):T=>{
// console.log(arg);
// return arg

// }
// console.log(anyThing(['sameer',true,3,4,5,6]))




///////////




//GENRICS
// interface Hasage{
//     age:number
// }

// const getOldest=<T extends Hasage>(people:T[])=>{
// return people.sort((a,b)=>b.age-a.age)[0]
// }

// const people:Hasage[]=[{age:20},{age:200},{age:90}]




// interface Player{
//     name:string;
//     age:number
// }
// const player:Player[]=[{age:90,name:'joe'},{age:30,name:'ahsan'},{age:40,name:'sameer'}]
// console.log(getOldest(people).age)



////////////////////////////

// another Example

// interface PromseObject{
//     name:string;
//     age:number;
//     title:string
// }



// const fetchPostData=async(url:string):Promise<PromseObject[]>=>{

//     const respose= await fetch(`example of post url ${url}`)
//     const data= await respose.json()
//     return data
// }


// (async()=>{
//  const result=  await fetchPostData('https//post.com')
//  result[0].title
// })



// for user gets


// const fetchUserData=async(url:string):Promise<User[]>=>{

//     const respose= await fetch(`example of post url ${url}`)
//     const data= await respose.json()
//     return data
// }


// (async()=>{
//  const users=  await fetchUserData ('https//post.com')
//  users[0].name
// })


///////////////////////////


// for everyFetchData we used a different functions so why we used only one by using genrics

// interface PromseObject{
//         name:string;
//         age:number;
//         title:string
//     }

// interface User{
//     name:string;
//     age:number;
//     id:string
// }



// const fetchData= async<ResultType>(url:string):Promise<ResultType>=>{

//     const response = await fetch(`https://${url}`);
//     const data = await response.json();
//     return data;
  
// }

// (async () => {
//     const users = await fetchData<User[]>('post.com');
//     console.log(users[0].name);
//   })();

//   (async () => {
//     const users = await fetchData<PromseObject[]>('post.com');
//     console.log(users[0].title);
//   })();

/////////////////////////


//another example 


// interface UserCredientials{
//     name:string;
//     password:number;
//     age:number
// }


// interface UserData{
//     name:string;
//     data:boolean
//     age:number
// }



// const loggedin=<T>(user:T):boolean=>{
//     console.log(user);
//     return true
    
// }


// const user:UserCredientials={
//     name:'samemer',
//     password:12,
//     age:13

// }

// const userData:UserData={
//     name:'ahesan',
//     data:true,
//     age:13

// }

// console.log(loggedin(user));


// console.log(loggedin(userData));











/////////////////////////////////////




//if only two properties are matched from interface so its called strutural and DUCK


 interface IAuth{
    name:string;
    password:number;
    isAdmin:boolean
    login(name:string,password:number):void
  
 }

 const auth:IAuth={
    name:'sameer',
    password:123123,
    isAdmin:true,
   login(name:'sameer',password:1212){}
 }

 const login=(user:IAuth):IAuth=>{
    console.log(user);
    return user
 }


 console.log(login(auth));
 
