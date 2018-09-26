
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
