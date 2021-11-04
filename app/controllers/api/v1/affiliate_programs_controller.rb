class Api::V1::AffiliateProgramsController < Api::V1::ApplicationController
  def index
    @affiliate_programs = if params[:term]
                            AffiliateProgram.where('title LIKE ?', "%#{params[:term]}%")
                              .sort_by { |affiliate_program| affiliate_program.users.count }
                          else
                            AffiliateProgram.all
                          end

    respond_with(@affiliate_programs, each_serializer: AffiliateProgramSerializer)
  end
end
