var text = "My name is Torbjørn, and I am a codemonkey. I have a tendecy to repeat myself. Did I mention my name: Torbjørn Good to get it out of the way. Hello, Torbjørn is my name.";
var myName = "Torbjørn";
var hits = [];

for (i=0; i<text.length; i++) {
    if (text[i]==="T"){
        for(j=i; j<i+myName.length; j++) {
            hits.push(text[j]);
        }
    }
    }

if (hits.length === 0) {
    console.log("Your name wasn't found.");
    } else {
        console.log(hits);
    }