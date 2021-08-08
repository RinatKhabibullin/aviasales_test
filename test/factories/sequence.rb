FactoryBot.define do
  sequence :string do |n|
    "string#{n}"
  end
  sequence :name do |n|
    "name_#{n}"
  end
  sequence :description do |n|
    "description_#{n}"
  end
  sequence :title do |n|
    "title#{n}"
  end
  sequence :email do |n|
    "email#{n}@factory.com"
  end
end
