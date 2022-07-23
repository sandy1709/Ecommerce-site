class LoginController < ActionController::Base
    skip_before_action :verify_authenticity_token

    # To add new Todo
    def CheckLogin
        email = params[:email]
        password = params[:password]
        newtodo = Todo.new(todoItem)
        newtodo.save
        render :json => newtodo
    end
end