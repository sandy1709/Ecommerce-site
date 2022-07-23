class ListallController < ActionController::Base
    skip_before_action :verify_authenticity_token
    
    def listall 
        productList = Product.all
        render :json => productList
    end 
end
