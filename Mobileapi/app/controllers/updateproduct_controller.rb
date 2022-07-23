class UpdateproductController < ActionController::Base
    skip_before_action :verify_authenticity_token
    
    def updateproduct 
        pid =  params[:pid]
        pname = params[:pname]
        ptype = params[:ptype]
        cid = params[:cid]
        cname = params[:cname]
        uid = params[:uid]
        pdet = params[:pdetails]
        likes = params[:likes]
        product = Product.find_by(product_id: pid)
        product.update(product_id: pid, 
            product_name: pname, 
            product_type: ptype, 
            company_id: cid, 
            company_name: cname, 
            user_id: uid,
            product_details: pdet, 
            likes: likes,
            A : params[:A],
            B : params[:B],
            C : params[:C],
            D : params[:D],
            E : params[:E],
            F : params[:F],
            G : params[:G],
            H : params[:H],
            I : params[:I],
            J : params[:J],
            K : params[:K],
            L : params[:L],
        )
        render :json : Product
    end
end
