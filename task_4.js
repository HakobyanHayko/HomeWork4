function Circle(r){
    this.r = r
}

Circle.prototype.radius = function(){
    return this.r
}
Circle.prototype.diameter = function(){
    return this.r * 2
}
Circle.prototype.getC = function(){
    return (2*this.r*Math.PI).toFixed(2)
}
Circle.prototype.getA = function(){
    return ((this.r**2)*Math.PI).toFixed(2)
}

let circle = new Circle(10)
console.log(circle.diameter() , circle.radius() , circle.getA() , circle.getC())
