class Student{
    static count=0;
    constructor(name,age,phone_number,board_marks){
        this.name=name;
        this.age=age;
        this.phone_number=phone_number;
        this.board_marks=board_marks;
        Student.count=Student.count + 1;
    }
    eligibleToCollege(){
        if((this.board_marks)>=40){
            console.log(`${this.name}`+ " is eligible");
        }
        else{
            console.log(`${this.name}`+ " not eligible!");
        }
    }
    studentsCreated(){
        console.log(Student.count);
    }
    eligibleInPlacements(agereq){
        return function eligibeincompany(agereq){
            if(this.board_marks>40 && this.age>agereq ){
                console.log("true, ready for placements");
            }
            else{
                console.log("false");
            }
        }
    }
}
let S1=new Student("Ravi",17,8906477989,67);
let S2=new Student("Krish",16,890668779,41);
let S3=new Student("Uday",19,9064778987,39);
let S4=new Student("Harish",18,990645989,40);
let S5=new Student("Sarthak",20,986342989,31);
S1.eligibleToCollege();
S2.eligibleToCollege();
S3.eligibleToCollege();
S4.eligibleToCollege();
S5.eligibleToCollege();
S4.studentsCreated();
S1.eligibleInPlacements(19).eligibeincompany(19);
