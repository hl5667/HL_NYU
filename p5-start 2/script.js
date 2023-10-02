class shape {
  constructor(_x,_y,_w,_h,_speedX,_speedY){
    // the _ is just for the readability 
    this.x = _x
    this.y = _y
    this.w = _w
    this.h = _h
    this.speedX = _speedX
    this.speedY = _speedY
  }

  display() {
    fill(0,0,255)
    rect(this.x, this.y, this.w, this.h)
  }
}
let myRect = new shape (300,100,50,50,3,1)





let myArray = ["it","was", "a", "dark", "and", "stormy","ngiht"]

// let myRect = {
//   x: 200, 
//   y: 100, 
//   w: 50, 
//   h: 50, 
//   speedx: 3, 
//   speedy: 1,
// }



function setup(){
    createCanvas(600, 600,)
    //console.log ('hello!')

    //console.log("20 + 37 is equal to ", sum (20, 37))
    //console.log ("triangle has sides a 7 and b 4, so side c is", pythagorean (7,4))
     console.log(myArray[6])
     console.log(myArray.length)
}

function draw () {
    background(200)
}

//sum adds 2 #s together
function sum (a,b) {
  return a + b 
}

//pythagorean 
function pythagorean (a,b) {
  let cSqr = pow(a, 2) + pow(b,2)
  let c = sqrt(cSqr)
  return
}

function draw() {
  background (200)

  fill (0, 255, 0)
  ellipse (100,100,100,100)

  paintItRed(ellipse,300,200,100,100)
  paintItRed(rect, 100,400,100,100)


    
  // myRect.x += myRect.speedx
  // myRect.y += myRect.speedy
  // fill(0,0,255)
  // rect(myRect.x, myRect.y, myRect.w, myRect.h)
  myRect.display()
}

function paintItRed(shape,x,y,w,h) {
  fill(255,0,0)
  shape (x,y,w,h)
}


//how we mgiht organize information 
//ARRAY 
//let Arr = [10,37,4,17,27]
//          ["IT", "WAS", "A", "DARK", "STROMY"]
//          [True, False, Ture]
// Arr[0]  --> It
// Arr[length] --> 7

//OBJECTS  (my rect for example)
// Key - Value 
// x -> 200, 
// y -> 100,
// w -> 50,
// h -> 50,
// sx -> 3,
// sy -> 1,
//* remember to addd ","