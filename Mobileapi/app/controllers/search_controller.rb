class SearchController < ActionController::Base
    skip_before_action :verify_authenticity_token
    
    def getproduct 
        productid = params[:pname]
        product = Product.find_by(product_name: productid)
        render :json => product
    end
end
