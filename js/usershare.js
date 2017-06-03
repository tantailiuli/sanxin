$("#imgPicker").on("change", function(){
    if(this.files.length === 0){
        document.querySelector('#preview').src = './images/userlogobig.png';
        return;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
        document.querySelector('#preview').src = e.target.result;
    };
	reader.readAsDataURL(this.files[0]);
});