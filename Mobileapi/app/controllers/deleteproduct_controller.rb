class DeleteproductController < ActionController::Base
    skip_before_action :verify_authenticity_token
    
    def deleteproduct
        pid = params[:pid]
        result = Product.destroy_by(product_id: pid)
        render :json => result
    end
end
