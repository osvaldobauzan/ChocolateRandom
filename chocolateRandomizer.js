const people=[];

const peopleInput = document.querySelector('#peopleInput');
const form = document.querySelector(".randomizerForm");
const addedPeople=document.querySelector(".addedPeople");
const peopleList=document.querySelector(".peopleList");


form.addEventListener("submit", function (e) {
e.preventDefault() // This prevents the window from reloading
let formdata = new FormData(this);
let input = formdata.get("peopleInput");

       // alert((input)+"added to the list.");
        people.push(input);
        console.log(people);
        addedPeople.innerHTML+="<p>"+input+"</p>";
        form.reset();
        });

function resetPeople(){
        form.reset();
        people.length=0;
        addedPeople.innerHTML=people;
}

function generateList(){
        if(people.length<2){
        alert("You need, at least, 2 people on the list!");
        return;
        }
        peopleList.innerHTML="";
        let choosenPeople=[];
       // let unchoosenPeople=[];
        for(p in people){
                let unchoosenPeople=JSON.parse(JSON.stringify(people));
                unchoosenPeople.splice(p,1);   
                for(person in choosenPeople){
                        if(unchoosenPeople.includes(choosenPeople[person])){
                               // unchoosenPeople.splice(choosenPeople[person],1);
                                let index = unchoosenPeople.indexOf(choosenPeople[person])
                                unchoosenPeople.splice(index,1);
                        }
                }                       
                let randomPerson = unchoosenPeople[Math.floor(Math.random() * unchoosenPeople.length)];
                choosenPeople.push(randomPerson);
                peopleList.innerHTML+="<p>"+people[p]+" → "+randomPerson+"</p>";
        }
}
