const assert = require('assert');
const ganache =require('ganache-cli');
const Web3 =require('web3');
const web3= new Web3(ganache.provider());

class Car{

    constructor(name){
        this.name=name;
    }

    park(){
        return 'stopped';
    }

    drive(){
        return 'vroom'; 
    }
}

let car;

beforeEach(()=>{
    car  = new Car('Jonny');
});


describe ('Car',()=>{
    it('Is the name of the car Charles?',()=>{
        assert.equal(car.name,'Charles');
    });

    it('can park', ()=>{
        assert.equal(car.park(),'stopped');
    });

    it('can drive', ()=>{
        assert.equal(car.drive(),'vroom');
    });


});