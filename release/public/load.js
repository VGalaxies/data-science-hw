var contained = document.querySelector("#load");
var fileReader = new FileReader();

fileReader.onload = function (e) {
    // console.log(e.target);
    document.querySelector("#display").textContent = fileReader.result;
}

function handleUpload(e) {
    var file = e.target.files[0];
    fileReader.readAsText(file);
}

contained.addEventListener("change", handleUpload);