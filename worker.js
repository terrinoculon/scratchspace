function e() {
var base="http://terrinoculon.github.io/scratchspace/frames_for_demo/frame";
  for (var i = 1; i < 2501; i++) {
    var url = base.concat(i.toString(),".png");
    var xhr = new XMLHttpRequest();
     xhr.responseType = 'blob';
    // xhr.onload = xhr.onerror = onload;
     xhr.open('GET', url, false);
     xhr.send();


  		 var ii=i/25;

       console.log('Posting message back to main script');
       postMessage(ii);
    }
}
e();
