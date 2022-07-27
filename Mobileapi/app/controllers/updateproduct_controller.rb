class UpdateproductController < ActionController::Base
    skip_before_action :verify_authenticity_token
    
    def updateproduct 
        pid =  params[:pid]
        pname = params[:pname]
        ptype = params[:ptype]
        cid = params[:cid]
        cname = params[:cname]
        uid = params[:uid]
        likes = params[:likes]
        product = Product.find_by(product_id: pid)
        product.product_name = pname
        product.product_type = ptype 
        product.company_id = cid 
        product.company_name = cname 
        product.user_id = uid
        product.likes = likes
        product.A  = params[:A]
        product.B  = params[:B]
        product.C  = params[:C]
        product.D  = params[:D]
        product.E  = params[:E]
        product.F  = params[:F]
        product.G  = params[:G]
        product.H  = params[:H]
        product.I  = params[:I]
        product.J  = params[:J]
        product.K  = params[:K]
        product.L  = params[:L]
        product.save
        render :json  => product
    end
end
