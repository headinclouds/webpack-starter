import '../styles/index.scss';

let carsId = [1, 2, 4];
let [car1, car2, car3] = carsId;
let car = { id: 5000, color: 'red' };
let id, color;
({ id, color } = car);
//console.log(id, color);

// function scope
function startCar(id) {
    let message = 'Starting...';
    let fii = function titi() {
        let message = 'Override...';
    };
    fii();
    console.log(message);
}

startCar('123');


//immediately invoked function expression
let p = (function (a) { console.log(a); return a; })('pp');
console.log(p, 'p');

// closures
let ko = (function (a) {
    let ololo = "foo";
    let foo = function (){
        return ololo;
    };
   
     return {
         foo: foo
     };
})();

console.log(ko.foo());

////

let fn = function (){
    console.log(this, 'this');
    return this === window;
};
console.log(fn(), this);



/// call and apply both used to change value of this, its context
/// call 
let o = {
    carId: '444',
    getId: function (){
        return this.carId;
    }

};

let mo = {
    carId: '666'
};

let mii =  o.getId.bind(mo);
console.log(o.getId.call(mo), mii());

/// apply
let ogi = {
    carId: '444',
    getId: function (pref){
        return pref+this.carId;
    }
};

let mogi = {
    carId: '666'
};

console.log(ogi.getId.apply(mogi, ['ID: ']));
 ///// class inheritance
class Vehicle {
    constructor(id) {
        this.id = id;
    }

    startCar(){
        return `starting vehicle ${this.id}`;
    }
}

class Car extends Vehicle {
    constructor(id) {
       super(id);
    }

    startCar() {
        return 'start car and '+ super.startCar();
    }

}
let mu = new Car(444);
console.log(mu.startCar());

//// events

const link = document.getElementById('my-link')
document.addEventListener('mousedown', event => {
  // mouse button pressed
  console.log(event) //0=left, 2=right
})