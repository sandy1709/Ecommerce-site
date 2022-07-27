Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get "/get", to: "getproduct#getproduct"
  get "/list", to: "listall#listall"
  get "/search", to: "search#getproduct"
  put "/update", to: "updateproduct#updateproduct"
  delete "/delete", to: "deleteproduct#deleteproduct"
  delete "destroy", to: "deleteall#deleteproduct"
  post "/add", to: "addproduct#addproduct"

  # Defines the root path route ("/")
  # root "articles#index"
end
