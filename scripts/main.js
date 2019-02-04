var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/download.png') {
      myImage.setAttribute ('src','images/vfcon088401.jpg');
    } else {
      myImage.setAttribute ('src','images/download.png'
    );
    }
}