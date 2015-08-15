function e() {
var base="./frames_for_demo/frame";
  for (var i = 0; i < 2500; ++i) {
       var img = new Image();
       img.src = base.concat(i.toString(),".png");
  		 var ii=i/25;

       console.log('Posting message back to main script');
       postMessage(ii);
    }
}
e();
