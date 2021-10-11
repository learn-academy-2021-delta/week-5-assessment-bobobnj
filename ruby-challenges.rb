# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
# method that takes in an array
# inputs is array of words + a single letter
# output is array of words containing that letter
# expected outputs - letter_o = 'o' --> ['coffee', 'soda water']
# Expected output:  letter_t = 't' ['tea', 'water', 'soda water']


beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']



 p beverages_array.select { |beverages_array| beverages_array.include? "o" }
 p beverages_array.select { |beverages_array| beverages_array.include? "t" }

#  letter_o = 'o'
# # Expected output: ['coffee', 'soda water']
#  letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']


# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def sum(nums)
  nums.inject(0, :+)
end

p sum(nums_array1)
p sum(nums_array2)



# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    attr_accessor :model, :wheels, :current_speed
    def initialize model, wheels, speed_speed
      @model = model
      @wheels = 2
      @current_speed = 0
    end
    # def get_model
    #   @model
    # end
    # def get_wheels
    #   @get_wheels
    # end
    # def get_current_speed
    #   @get_current_speed
    # end
    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph"
    end
  
  end
  bike = Bike.new 'Trek', 0 ,0
  p bike.bike_info
  
  
  
  # -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.
  
  # Expected output example: my_bike.pedal_faster(10) => 10
  # Expected output example: my_bike.pedal_faster(10) => 20
  # Expected output example: my_bike.brake(25) => 0
  # class Bike
  #   attr_accessor :model, :wheels, :current_speed, :accelerate, :slow
  #   def initialize model, wheels, speed_speed, accelerate, slow
  #     @model = model
  #     @wheels = 2
  #     @current_speed = 0
  #     @accelerate = 10
  #     @slow = 25
  #     # @pedal_faster = +10
  #     # @brake = -25
  #   end
  #
  #   # def pedal_faster
  #   #
  #   # end
  #   # def brake
  #
  #   # end
  #   def bike_info
  #       "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph"
  #   end
  #   def pedal_faster accelerate
  #     @current_speed + @accelerate
  #   end
  #   def brake accelerate
  #     @current_speed - @slow
  #   end
  # end
  # bike = Bike.new 'Trek', 0 ,0,
  # p bike.brake
  
  # I did not solve this one. I tried a couple of ways defining pedal_faster faster and brake but I couldn't seem to outsmart ruby when it came to displaying the information.