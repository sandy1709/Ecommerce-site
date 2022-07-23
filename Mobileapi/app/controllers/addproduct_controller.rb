# require 'json'

class AddproductController < ActionController::Base
    skip_before_action :verify_authenticity_token

    def addproduct 
        productitem = {
            'product_id' => params[:pid],
            'product_name' => params[:pname],
            'product_type' => params[:ptype],
            'company_id' => params[:cid],
            'company_name' => params[:cname],
            'user_id' => params[:uid],
            'likes' => params[:likes],
            'A' => params[:A],
            'B' => params[:B],
            'C' => params[:C],
            'D' => params[:D],
            'E' => params[:E],
            'F' => params[:F],
            'G' => params[:G],
            'H' => params[:H],
            'I' => params[:I],
            'J' => params[:J],
            'K' => params[:K],
            'L' => params[:L],
        }
        newproduct = Product.new(productitem)
        newproduct.save
        render :json => newproduct
    end
end
