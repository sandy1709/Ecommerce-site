class DeleteallController < ActionController::Base
    skip_before_action :verify_authenticity_token
    
    def deleteproduct
        result = Product.destroy_all
        render :json => result
    end
end
