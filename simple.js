// const n=5
// for(i=0;i<n;i++)
// {
// console.log(i);
// }

/*const arr =(1,2,3,4,5)
for(i=0;i<arr;i++)
{
    if(arr[i]!=2)
    {
        console.log(arr[i]);
    }
}*/
// const a=1
// for(i=1;i<a;i++);
// {
//     for(j=1;j<=5;j++)
//     {
//       console.log(i,j-1);

//     }   
// }

// 1
// 12
// 123
// 1234
// 12345
// 1
// 21
// 321
// 4321
// 54321

// for ( i = 1; i <= 5; i++) {
//     let x=""
//     for(j =1 ; j<=i ; j++){
//         x =x + j
//     }
//     console.log(x)
// }

/*
for(i=1;i<=5;i++){
    let x=''
    for(j=i;j>=1;j--){
    x= x + j;
    }
    console.log(x)
}



/*
5
54
543
5432
54321
*/

// for (i = 5; i >= 1; i--){
//      x= '';
//     for (j = 5; j >= i; j--){
//       x += j;
// }
//     console.log(x);
// }
  
/*
5
45
345
2345
12345*/
// for(i=5;i>=1;i--)
// {
//     var x="";
//     for(var j=i;j<=5;j++)
//     {   
//         x =x + j;
//     }
//     console.log(x);
// }

// var n=1;
// for(i=1;i<=n;i++){//line(c)5
//     let x="";
//      for(j=i;j<=n-1;j++){//(R)
//         x=x+j
//     }
//     console.log('')   
//     let k='';
//     for(k=0;k<=2*i;k++){
//        console.log(x) 
//     }
// }

// let n = 5;
// let s = '';
// for ( i = 1; i <= n; i++) {
//         a = '';
//     for (j = 1; j <= n - i; j++) {
//         a +=' ';
//     }
//     for (k = 1; k<= 2 * i - 1; k++) {
//         a += i;
//     }
//     s += a + '\n';
// }
// console.log(s);


// for(i=0;i<=5;i++){
//     let x='';
//     for(j=i;j>=1;j--){
//         x+=j;
//     }
//     console.log(x)
//     // for ( k = 0; k < 4; k++) {
//     //     k+=x;        
//     // }
//     // console.log()
// }
// for ( i = 1; i <= 5; i++){
//     let x ='';
//     for(j = 5; j > i; j--){
//       x+=' ';
//     }
//     for(k = 1; k <= i; k++){
//       x+=k;
//     }
//     for(l=i-1;l>=1;l--){
//       x+= l;
//     }
//     console.log(x);
// }

/* 1
   121
  12321
 1234321
123454321
 1234321
  12321
   121
    1*/

// function a(n){
//   for ( i = 1; i <= n; i++) {
//     let b = '';
//     for ( j = 1; j <= n - i; j++) {
//       b += ' ';
//     }
//     for ( k = 1; k <=  i ; k++) {
//       b += k;
//     }
//     for( k = i-1; k >=  1 ; k--){
//       b += k;
//     }
//     console.log(b);
//   }
//   for ( i = n - 1; i >= 1; i--) {
//     let b = '';
//     for ( j = 1; j <= n - i; j++) {
//       b += ' ';
//     }
//     for ( k = 1; k <=i; k++) {
//       b += k;
//     }
//     for(k = i-1; k >=  1 ; k--){
//       b += k;
//     }
//     console.log(b);
//   }
// }
// a(5);

// for ( i = 1; i <= 5; i++){
//     let x ='';
//     for(j = 5; j >= i; j--){
//       x+=' ';
//     }
//     for(k = 1; k <= i; k++){
//       x+=k;
//     }
//     for(l=i-1;l>=1;l--){
//       x+= l;
//     }
//     console.log(x);
// }

// for(i=5;i>=1;i--){
//   let x="";
//   for (j=i;j<=5;j++){
//     x+=j;
//   }
//   console.log(x)
// }
/*   5
    545
   54345
  5432345
 543212345
  5432345
   54345
    545
     5 only for loop used*/


// function a(n){
//   for ( i = 5; i >= 1; i--) {
//     let b = '';
//     for ( j = i-1; j >= 1; j--) {
//       b += ' ';
//     }
//     for ( k = 5; k >= i-j ; k--) {
//       b += k;
//     }
//     for( k = i+1; k <= 5 ; k++){
//       b += k;
//     }
//     console.log(b);
//   }
//   for ( i = n - 1; i >= 1; i--) {
//     let b = '';
//     for ( j = 1; j <= n - i; j++) {
//       b += ' ';
//     }
//     for ( k = 5; k >n - i ; k--) {
//       b += k;
//     }
//     for(k = n-i+2; k<=n; k++){
//       b += k;
//     }
//     console.log(b);
//   }
// }

// a(5);



// for(i=1;i<=5;i++){
//   var  x='';
//   for(j=1;j<=i;j++){
//     x+=j
//   }
//   console.log('*'+x+"+");
// }


// /////////////
// function a(n){
//   for ( i = 5; i >= 1; i--) {
//     let b = '';

//     j=i-1;//i is 5
//     if(j>=1){
//       while(j>=1){
//         b += ' '
//       j--}
//     }
//     // for ( j = i-1; j >= 1; j--) {
//     //   b += ' ';
//     // }
//     k = 5;
//     if (k >= i - j) {
//         while (k >= i - j) {
//             b += k;
//             k--;
//         }
//     }
//     k=i+1;
//     if(k <= 5){
//       while( k <= 5){
//       b += k;
//       k++;}
//     }
//     // for ( k = 5; k >= i-j ; k--) {
//     //   b += k;
//     // }
//     // for( k = i+1; k <= 5 ; k++){
//     //   b += k;
//     // }
//     console.log(b);
//   }
//   for ( i = n - 1; i >= 1; i--) {
//     let b = '';
//     for ( j = 1; j <= n - i; j++) {
//       b += ' ';
//     }
//     // for ( k = 5; k >n - i ; k--) {
//     //   b += k;    //b=b+k
//     // }
//     k=5;
//     if(k >n - i){
//       while(k >n - i) {
//         b += k;
//         k--}
//     }
//     k = n-i+2;
//     if(k<=n){
//       while(k<=n) {
//         b += k;
//         k++}
//     }
//     // for(k = n-i+2; k<=n; k++){
//     //   b += k;
//     // }
//     console.log(b);
//   }
// }
// a(5);


// let n = 5;
// let s = "";
// for (let i = 0; i < n; i++) {

//   for (let k = 0; k < n - i; k++) {
//     s += k;
//   }
//   s += "\n";
// }
// console.log(string);


// function a(n){
//   for ( i = 5; i >= 1; i--) {
//     let b = '';
//     for ( j = i-1; j >= 1; j--) {
//       b += ' ';
//     }
// for ( k = 5; k >= i-j ; k--) {
//       b += k;
//     }
// for( k = i+1; k <= 5 ; k++){
//       b += k;
//     }
//     console.log(b);
//   }
//   for ( i = n - 1; i >= 1; i--) {
//     let b = '';
//     for ( j = 1; j <= n - i; j++) {
//       b += ' ';
//     }
//     for ( k = 5; k >n - i ; k--) {
//       b += k;
//     }
//     for(k = n-i+2; k<=n; k++){
//       b += k;
//     }
//     console.log(b);
//   }
// }

// a(5);



///////////////////////////////////////////////

// function a (n) {
//   let rows = [];
//   for (let i = 1; i <= n; i++) {
//     let row = ' '.repeat(n - i)+ i.toString().repeat(i * 2 - 1);
//     rows.push(row);
//   }
//   for (let row of rows) {
//     console.log(row);
//   }
// }
// a(5);



function a(n) {
 for ( let i=1; i<=n; i++){
  var x=' ';
  for( let j = i; j<=n; j++){
    // if (j<=n) {
    //   console.log(j)
    // }
    // x = (i * 2 + 1) ;
    x= x+ ' ' +j;
  }console.log(x)
 }
}
a(5);