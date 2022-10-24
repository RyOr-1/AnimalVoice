function startClass() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifer = ml5.soundClassifier(
        "https://teachablemachine.withgoogle.com/models/ehavLhPwP/model.json",
        modelReady
    );
}

function modelReady() {
    classifer.classify(gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results)
    }
}