$(document).ready(function(){
$('#rd_broach_popover').popover(
{ 
	container: 'body',
	 placement: function() { return $(window).width() < 975 ? 'top' : 'right'; },
    html : true,
    content: function() {
      return $('#rd_broach_popover_wrapper').html();
    }
 }
); 
$('#st_spl_broach_popover').popover(
{ 
	container: 'body',
    html : true,
    content: function() {
      return $('#st_spl_broach_popover_wrapper').html();
    }
 }
); 
$('#inv_spl_broach_popover').popover(
{ 
	container: 'body',
    html : true,
    content: function() {
      return $('#inv_spl_broach_popover_wrapper').html();
    }
 }
); 
$('#serr_spl_broach_popover').popover(
{ 
	container: 'body',
    html : true,
    content: function() {
      return $('#serr_spl_broach_popover_wrapper').html();
    }
 }
); 
$('#inter_spaced_broach_popover').popover(
{ 
	container: 'body',
	html : true,
    content: function() {
      return $('#inter_spaced_broach_popover_wrapper').html();
    }
 }
); 
$('#callibration_broach_popover').popover(
{ 
	container: 'body',
	 html : true,
    content: function() {
      return $('#callibration_broach_popover_wrapper').html();
    }
 }
); 
$('#spcl_profile_broach_popover').popover(
{ 
	container: 'body',
	/* placement: 'left',*/
    html : true,
    content: function() {
      return $('#spcl_profile_broach_popover_wrapper').html();
    }
 }
); 
$('#keyway_broach_popover').popover(
{ 
	container: 'body',
    html : true,
    content: function() {
      return $('#keyway_broach_popover_wrapper').html();
    }
 }
); 
$('#spline_mandrel_popover').popover(
{ 
	container: 'body',
	html : true,
    content: function() {
      return $('#spline_mandrel_popover_wrapper').html();
    }
 }
); 
$('#spl_guage_popover').popover(
{ 
	container: 'body',
	html : true,
    content: function() {
      return $('#spl_guage_popover_wrapper').html();
    }
 });
 
$('#surface_broach_popover').popover(
{ 
	container: 'body',
    html : true,
    content: function() {
      return $('#surface_broach_popover_wrapper').html();
    }
 } 
); 
$('#gear_hob_popover').popover(
{ 
	container: 'body',
    html : true,
    content: function() {
      return $('#gear_hob_popover_wrapper').html();
    }
 }
); 
$('#milling_cutter_popover').popover(
{ 
	container: 'body',
	html : true,
    content: function() {
      return $('#milling_cutter_popover_wrapper').html();
    }
 });
 
 $('#slitting_cutter_popover').popover(
{ 
	container: 'body',
	html : true,
    content: function() {
      return $('#slitting_cutter_popover_wrapper').html();
    }
 }
); 
$('#special_cutters_popover').popover(
{ 
	container: 'body',
	html : true,
    content: function() {
      return $('#special_cutters_popover_wrapper').html();
    }
 });
$("#products-mob a").click(function(){
	var prodNo=$(this).attr('value');

	for(var i=1;i<=15;i++){
		if(prodNo != i){
			$("#shak_prod"+i).hide();
			$("#shak_prod-link"+i+" span").removeClass("fa fa-minus");
			$("#shak_prod-link"+i+" span").addClass("fa fa-plus");
		}	
	}
	if($("#shak_prod"+prodNo).css('display')=="none"){
		$("#shak_prod"+prodNo).show();
		$("#shak_prod-link"+prodNo+" span").removeClass("fa fa-plus");
		$("#shak_prod-link"+prodNo+" span").addClass("fa fa-minus");
	}else if($("#shak_prod"+prodNo).css('display')=="block"){
		$("#shak_prod"+prodNo).hide();
		$("#shak_prod-link"+prodNo+" span").removeClass("fa fa-minus");
		$("#shak_prod-link"+prodNo+" span").addClass("fa fa-plus");
	}
	
});
});