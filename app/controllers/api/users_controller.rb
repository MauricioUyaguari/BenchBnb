class Api::UsersController < ApplicationController

  def create
    @user = User.new(users_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def users_params
    params.require(:user).permit(:username, :password)
  end
end
