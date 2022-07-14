function preload(){
classifier=ml5.imageClassifier("DoodleNet")
}

function setup(){
   canvas= createCanvas(300, 300)
   canvas.center()
   background("whitesmoke")
   canvas.mouseReleased(clasifyCanvas)
   synth=window.speechSynthesis 
}

function draw(){
    stroke(0)
    strokeWeight(12)

    if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY)
        
    }
}

function clear_canvas(){
    background("whitesmoke")
}

function clasifyCanvas(){
    classifier.classify(canvas, gotResult)
}

function gotResult(error, results){
  if (error) {
      console.error(error)
  } else {
      console.log(results)
      document.getElementById("label1").innerHTML="Label: "+ results[0].label
      document.getElementById("confidence1").innerHTML="Confidence: "+ Math.round(results[0].confidence*100)+"%"
      utterThis=new SpeechSynthesisUtterance(results[0].label)
      synth.speak(utterThis)
  }
}