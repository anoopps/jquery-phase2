jQuery(document).ready(function(){    
    jQuery('#search-txt').bind( "keypress keyup", function() {        
		var searchtxt = jQuery(this).val().toLowerCase();         
			jQuery('ul#sortable > li').hide();		
			var items = jQuery('ul#sortable > li');	    
			jQuery.each(items,function(index, node){				    
				  var heading = jQuery(node).find(".element").text().toLowerCase();
				  if ( heading.toLowerCase().indexOf(searchtxt) >= 0  ){
					   jQuery(node).closest('li').css("display","block");
				    }
			})	
	});
	jQuery("#search_btn").click(function(){		
		jQuery('#search-txt').val('');
		jQuery('#search-txt').trigger('keypress');
	});    
    jQuery('.deleteme').click(function(e){                              
        var check = confirm("Are you sure you want to delete?");
        if(check){
            jQuery(this).closest('.ui-state-default').remove();
        }
    });    
    jQuery('#additem').click(function(){
         var panel = prompt("Enter the name of the panel", "");
        panel = jQuery.trim(panel);
            if (panel!="") {
                $("ul#sortable")  
                .find('li:first') 
                .clone()  
                .find('.element')  
                .text(panel)  
                .end()  
                .appendTo('ul#sortable');
            }
        });
});
	
