//fonction souris dessus
function on(id){
  document.getElementById(id).src = 'assets/images/' + id + '_2.jpg';
}
//fonction souris en dehors
function out(id){
  document.getElementById(id).src = 'assets/images/' + id + '.jpg';
}
