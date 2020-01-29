var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
jQuery(window).scroll(function(){
   setTimeout( function() {
			showModalPopup();
		}, 1000 );
 });
window.onclick = function(event) {
  if (event.target == modal) {
    //modal.style.display = "none";
    //setLocalStorageScope();
  }
}
span.onclick = function() {
  //modal.style.display = "none";
  jQuery("#myModal").fadeOut(700); 
 setLocalStorageScope();
}
function showModalPopup()
{
  if (typeof(Storage) !== "undefined") {
    if (localStorage.getItem("popup_active") !== null) {
      var popup_active = localStorage.getItem("popup_active");
      let currentDate = new Date();
      let currnetTimestring = currentDate.getTime()
      
      if( popup_active > currnetTimestring) {
        modal.style.display = "none";
      }else {
        //modal.style.display = "block";
        jQuery("#myModal").fadeIn(900);
      }
    }else {
      //modal.style.display = "block"; 
      jQuery("#myModal").fadeIn(900);     
    } 
  
  }
};
function setLocalStorageScope() {
  if (typeof(Storage) !== "undefined") {
    localStorage.removeItem('popup_active');
    let duringperiod = jQuery("#myModal").attr("data-period");
    duringperiod = parseInt(duringperiod);
    let currentDate = new Date();
    let currnetIncreaseDate = new Date ( currentDate );
     currnetIncreaseDate.setMinutes ( currentDate.getMinutes() + duringperiod );
    let currnetTimestring = currnetIncreaseDate.getTime();
    localStorage.setItem("popup_active", currnetTimestring);
  }
}