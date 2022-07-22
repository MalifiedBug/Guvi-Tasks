class movie {
    constructor(title, studio, rating="PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }

    
getrating() {
  return "the rating is  " + this.rating;
}
}



const CasinoRoyale = new movie( "Casino Royal", "Eon Productions", "PG13");

// time = 1 for day and 2 for night
class Uber {
    constructor(distance,time)
    {
        this.distance= distance;
        this.time = time;
    }

    getpricebysuv(n)
    {
        return "the suv price is "+ this.distance*this.time*n 
    }
    getpricebysedan(m)
    {
        return "the sedan price is "+ (this.distance)*(this.time)*m 
    }
    getpricebyauto(o)
    {
        return "the auto price is "+ this.distance*this.time*o
    }

    
   
   
   
}

let dtb = new Uber(2,1);
console.log(dtb.getpricebysedan(7))


class Circle{
    constructor(radius,color)
    {
        this.radius = radius;
        this.color = color;
    }

    get calc()
    {
        console.log("The properties of the Circle are below");
        console.log(this.circleradius);
        console.log(this.circlecircumference);
        console.log(this.circlearea);

    }

    circleradius(x)
    {
        return "hello" ;
    }

    circlecircumference(y)
    {
        return `The circumference is ${(this.radius*2*Math.PI).toFixed(2)}`;
    }

    circlearea(z)
    {
        return `the area is ${(Math.pow(this.radius,3)*4*Math.PI/3).toFixed(2)}`;
    }

   

}

var rad1 = new Circle(1.0,"red");
console.log(rad1);
console.log(rad1.calc);

var rad2 = new Circle(5,"blue");
console.log(rad2);
console.log(rad2.calc);

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(x) {
      return x - this.year;
    }
  }
  
  let date = new Date();
  let year = date.getFullYear();
  
  let myCar = new Car("Ford", 2014);
 console.log( "My car is " + myCar.age(year) + " years old.");
 




