function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/K_3m9dxLj/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

var Cat = 0;
var Cow = 0;
var Dog = 0;
var Wolf = 0;

function gotResults(error, results){
    if(error){
        console.error(error);
    } else {
        console.log(results);
        randomNumberR= Math.floor(Math.random()* 255)+ 1;
        randomNumberG= Math.floor(Math.random()* 255)+ 1;
        randomNumberB= Math.floor(Math.random()* 255)+ 1;

        document.getElementById("resultLabel").innerHTML = 'Detected voice is of '+ results[0].label;
        document.getElementById("resultCount").innerHTML = 'Detected dog- '+ Dog + ' Detected Cat- '+ Cat +' Detected Cow- '+ Cow +' Detected Wolf- '+ Wolf;
        
        var Image = document.getElementById("Sound");

        if (results[0].label == "Bark"){
            Dog = Dog + 1;
            Sound.src = 'doggy.gif';
          }
        else if (results[0].label == "Meow"){
            Cat = Cat + 1;
            Sound.src = 'catty.gif';
          }
        else if (results[0].label == "Howling"){
            Wolf = Wolf + 1;
            Sound.src = 'wolfy.gif';
          }
        else if (results[0].label == "Moo"){
            Cow = Cow + 1;
            Sound.src = 'cowy.gif';
          }
          else {
              Sound.src = 'ear.png'
          }
        }
}