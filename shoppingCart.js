
module.exports = class ShoppingCart {
	
	constructor ()
	{
		this.product = [];
		
	}
	
	add (product)
	{

		this.product.push(product);
		return this.product;		
		
	}

	remove (r_product)
	{
		
		return this.product.filter(product => product != r_product);

	}
	

}
