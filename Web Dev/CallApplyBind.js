var obj={
    name:"Ajay",
    company:"MicroSoft"
};

function printDetails(num){
    return `${this.name}`+" works in company "+`${this.company}`+" on salary of " + num;
};

console.log(printDetails.call(obj, 60000));
let teamMate=["Ravi", "Suman", "Prashant", "Daksh"];
function hisTeamStatus(n1, n2, n3, n4){
    return `${this.name} `+ "works with "+ n1 +" "+ n2+" " + n3 + " and "+ n4;
}
console.log(hisTeamStatus.apply(obj, teamMate));

var bound=hisTeamStatus.bind(obj);
console.log(bound("gitHub", "googleDrve", "vsCode", "chromeBrowser"));
let student={
    age:20
}
function printAge(name){
    return `Age of ${name} a student in a college is ${this.age}.`;
}
let bundled=printAge.bind(student);
console.log(bundled("Shashank"));
