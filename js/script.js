jQuery(document).ready(function(){
    jQuery('.tabspane > div').hide();
    jQuery('.tabspane > div').first().show();
    jQuery('.clear').hide();
    
    jQuery('#search-txt').bind( "keypress keyup", function() {        
		var searchtxt = jQuery(this).val().toLowerCase();
        jQuery('.clear').show();
    
			jQuery('ul#sortable > li').hide();		
			var items = jQuery('ul#sortable > li');	    
			jQuery.each(items,function(index, node){				    
				  var heading = jQuery(node).find(".element").text().toLowerCase();
				  if ( heading.toLowerCase().indexOf(searchtxt) >= 0  ){
					   jQuery(node).closest('li').css("display","block");
				    }
			})	
	});
    jQuery('.clear').click(function(){
        jQuery('#search-txt').val('');
        jQuery('#search-txt').trigger('keypress');
    });
	jQuery("#search_btn").click(function(){		
		jQuery('#search-txt').val('');
		jQuery('#search-txt').trigger('keypress');
	});
    
    $(document).on('click', '.deleteme', function(){     
        var count= $( "ul#sortable li" ).length
          if(count > 1){
              var check = confirm("Are you sure you want to delete?");
              if(check){
                  jQuery(this).closest('.ui-state-default').remove();
              }
          }else{
              alert("You can't delete all items");
          } 
    });
    
    jQuery('#additem').click(function(){
         var panel = prompt("Enter the name of the panel", "");
        panel = jQuery.trim(panel);
            if (panel!="") {
                $("ul#sortable")  
                .find('li:last') 
                .clone()  
                .find('.element')  
                .text(panel)  
                .end()  
                .appendTo('ul#sortable');
            }
        });
    
    jQuery('#tabssection a').click(function(event){
        var tab = jQuery(this).attr('href');
        jQuery('.tabspane > div').hide();
        jQuery(tab).show();
        event.preventDefault();
    });
});
	
