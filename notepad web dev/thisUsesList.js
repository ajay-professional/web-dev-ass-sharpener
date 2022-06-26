//(1) Use of 'this' inside a global scope.
/*console.log(this.table);
this.garage={
    table:"Wooden table"
}
console.log(this.garage.table);
//(2) Use of 'this' inside an object.
/*We cannot use 'this' in private variables and methods*/
/*let room={
    table:"Plastic table"
};
console.log(room.table);*/
//(3) Use of 'this' inside a method.
/*this.garage={
    table:"Wooden table",
    cleanTable(){
        console.log(`cleaning ${this.table}`);
    }
};
let room={
    table:"Plastic table",
    cleanTable(){
        console.log(`cleaning ${this.table}`);
    }
};
room.cleanTable();
this.garage.cleanTable();*/
//(4)'this' inside a function
/*this.table="Fancy Mirror Table";
const cleanTable=function(){
    console.log(`cleaning ${this.table}`);
};
cleanTable.call(this);*/
//(5) 'this' inside an inner function
/*this.table="Fancy Mirror Table";
const cleanTable=function(soap){
    const innerFunction=function(_soap){
        console.log(`cleaning ${this.table} using ${_soap}`);
    }
    innerFunction.bind(this)(soap);
};
cleanTable.call(this, 'Dettol');*/
//(6) Use of 'this' inside a constructor
/*let createRoom=function(name){
    this.table=`${name}'s table`;
}
createRoom.prototype.cleanTable=function(_soap){
    console.log(`cleaning ${this.table} using ${_soap}`);
};
const tomRoom=new createRoom('tom');
const jerryRoom=new createRoom('jerry');
tomRoom.cleanTable('Dettol');
jerryRoom.cleanTable('some soap');*/
//(7) Use of 'this' inside a class
class createRoom{
    constructor(name){
        this.table=`${name}'s table`;
    }
    cleanTable(soap){
        console.log(`cleaning ${this.table} using ${soap}`); 
    }
}
const tomRoom=new createRoom('tom');
const jerryRoom=new createRoom('jerry');

tomRoom.cleanTable('Dettol');
jerryRoom.cleanTable('some soap');

