console.log(20 < 30); // True
console.log(20 >= 20); // True
console.log(20 <= 30); // True
console.log(20 == 20); // True (only checks the data)
console.log(20 === 20); //  True    (checks the data and as well as type of data)
console.log(20 == '20'); // True
console.log(20 === '20'); // False

var a = 10;
var b = 20;
console.log(a >= b); // False
console.log(a == b); // False
console.log(a <= b); // True
console.log(a > b);  // False
console.log(a < b);  // True
console.log(b > a);  // True
console.log(b >= a);  //  True
console.log(b === a); // False 
console.log(b == a);  // False

// == value
// <=value
// >=value
// === type of datatype

var a = 10;
a = a + 1; // re assingment
console.log(a); // 11

a = a + 10;
console.log(a); // 21

a += 10;
console.log(a);  // 31

// Increment and decrement
var a=10
a++ //a=a+1
console.log(a);  //11

var b=10
++b;
console.log(b); //11

var a=10
a++
console.log(a)
console.log(a++)  //11

var b=10
++b //b=b+1
console.log(b)   //11
console.log(++b) //12

var a=10
a++
console.log(a)
console.log(a++)
console.log(a)  //12

var a=10
console.log(a++ + a)  //21

var a=10
console.log(++a + a) //22

var a=10
console.log(a++ + ++a)//12 12

var a=10
console.log(a++ + ++a)
console.log(a,a++)

var a=10
console.log(a++ + ++a)
console.log(a,a++,a) //12 12 13

a=10
a=a++
console.log(a) //10

a=10
a=a++
console.log(a)        //10
console.log(a++)      //10
console.log(a)        //11

var a=10
var b=12
console.log(a++ +a + ++a + b++ + ++b)
console.log(a,b)             //59
                            //12 14

a=10
b=12
console.log(b++ + a++ + ++b +a+ ++a +b +a + a++ + b++)
console.log(a,b)       //111
                       //12 14



var a=10
var b=12
console.log(b++ + a++ + ++b + a + ++a +b +a + a++ + b++)       //111
console.log(a,b)                                               //13 15

var x=32
var y=12
console.log(y--)  //12
console.log(y)    //11

var x=32
var y=12
console.log(y--)   //12
console.log(y)     //11
console.log(--y)   //10

var x=32
var y=12
console.log(x++ + --x + x-- + y++ + --y -y -x +y + y-- + --y + x++)  //142

a=10
a=++a
console.log(a)  //11, 


var i=1,j=2, k=3
var m=i-- - j-- -k--;  // 0 1 2 -4
console.log(i,j,k,m)

a=23
b=34
console.log(a-- + -b*3 + b++ + a++)   //-23

a=7
b=5
console.log(a-- -b++ + ++a -b)  //3



var a=9;
var b=11;
console.log(--a + -a + --b + b++ +b - -a - --b +a * --a);  //85

var a=69;
var b=96;
console.log(++a + ++b - -b + b++ - a--); //291

a = 1;  b = 4;   console.log(++a+b--,a,b);  //6 2 3

var a = 72;
var b = 27;
var a = (++a - ++b +a);
console.log(a + ++b - --a + ++a + a );// 266

var a = 32;
var b = 42;
 var a = (++a - ++b +a);
 var b = (--b + ++a - ++b);
console.log(a + ++b - --a*0 + ++a + a ); //96

var a =0;  console.log(a++ - ++a +a-- - --a); //0

var r = 20;var p = 49;var m = 30;console.log(r++ + p++ - --m +p/2 +m) //94

var a = '10';   console.log(a++, a++, a, --a+a); // 10 11 12 22

// var m =12  var s= 28; console.log(++m + s++ - --s +m--); console.log(m,s);

a=10; 
a++; 
--a; 
a+=35;
a-=5; 
a/=10; 
a*=5; 
a**2; 
console.log(a** 2);  
// a**2 means a power 2  //400

// Var p=5 q=10 console.log(--p - q++ + p*0 + p++)

// Var x = 5;
// Var y = 10;
// console.log(((x++ * --y) + y++) - --x);

// Var a=-1;  var b=1; console.log(--a+b--+a-b-++b-a/2);

// Var  p = 7;
// Var q = 77;
// console.log(((--p + -q + p * 1 ) + q++ + p*0) - p/2);

// var a=12, var b=13, console.log(--a+--b+a-b-++b+--a)



























