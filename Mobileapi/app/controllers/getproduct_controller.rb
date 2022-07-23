class GetproductController < ActionController::Base
    skip_before_action :verify_authenticity_token
    
    def getproduct 
        productid = params[:pid]
        product = Product.find_by(product_id: productid)
        render :json => product
    end
end
