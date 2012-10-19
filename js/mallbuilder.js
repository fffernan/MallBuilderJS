// Load the application once the DOM is ready, using `jQuery.ready`:
$(function(){
	// A Mall Page has a `title`, `product_array`, and `merchant name`
	var Page = Backbone.Model.extend({
		defaults: function() {
      		return {
		        title: "ShoppingPage",
		        product_array: '',
		        merchant_name: 'NEWMerchant'
      		};
    	},
	// Ensure that each todo created has `title`.
	    initialize: function() {
	      if (!this.get("title")) {
	        this.set({"title": this.defaults().title});
	      }
	    },

	    // Toggle the `done` state of this todo item.
	    toggle: function() {
	      this.save({done: !this.get("Saved!")});
	    }
	});
});