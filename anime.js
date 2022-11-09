let start = Date.now(); // remember start time

function anim(obj){
let timer = setInterval(function() {
  // how much time passed from the start?
  let timePassed = Date.now() - start;

  if (timePassed >= 2000) {
    clearInterval(timer); // finish the animation after 2 seconds
    return;
  }

  // draw the animation at the moment timePassed
  draw(timePassed,obj);

}, 20);
}

// as timePassed goes from 0 to 2000
// left gets values from 0px to 400px
function draw(timePassed,obj) {
  obj.style.left = timePassed / 5 + 'px';
}