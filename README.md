# Google-Shop-Aggregate
Using an API to search through all of google shops aggregate data by specific items. Allowing the user to judge and view all potential offers to find the best price in the quickest way.

# ERD
![ERD](https://imgur.com/vxVkdMM)

# Screenshots of APP
![screenshots](https://imgur.com/a/rtoqjiJ)

# Tech used:
React, Vite, Node, Express, MongoDb

#Instructions:
If you intend to leave a review or post an offer you must log into the site! If not, all you need to do is go to the link and the site will work perfectly!

#User Stories:
As a buy I really want to be able to see the best options available for specific items. I want to refine by cheapest and or highest rated. I want to pick based off lack of adds and external influence

As a seller I want to be able to make sure my website/offer has a competitive advantage to be seen. I will use this site as a way to make sure SEO isnt taking priority.

As a business owner, I want to see the competive offers in the one central place with clean ui. I Want multiple way to refine my search and limit other distractions/ads

#WireFrames

#Unsolved Problems/Stretch Goals
I plan on eventually allowing the user to click on offers the same as they would the api content. I want to add filter features to view was most popular! I also would like to populate the home page with the most popular/most recent searched. Some of the biggest hurdles I had came to just navigating through the layers of the api, making sure I was accessing the data correctly.

#Help I had
Mike from after hours, Chat Gpt, stackoverflow, and https://flowbite.com/ for specific tailwind outlines. 

#Wireframes
![wireframes](https://www.figma.com/file/LOMx3JEq0uxBOnSl77L7Vj/Untitled?type=design&node-id=0%3A1&mode=design&t=zKlKZvSoCoSV5FkU-1)

# 
| URL                      	| HTTP Verb 	| Purpose                                                                       	| CRUD Action 	| Created Yet 	|
|--------------------------	|-----------	|-------------------------------------------------------------------------------	|-------------	|-------------	|
| /                        	| Get       	| Home page                                                                     	| Read        	| yes        	|
| /shop                    	| Get       	| Index Page                                                                    	| Read        	| yes         	|
| /shop/offer              	| post      	| Allows anyone to create an offer (post another link they found)         	      | Create      	| yes         	|
| /shop/offer              	| get       	| Show all of the users offers                                                  	| Read        	| yes         	|
| /shop/offer              	| put       	| Updates the users offer                                                       	| Update      	| yes         	|
| /shop/user_id/offer      	| Delete    	| Deletes users offer                                                           	| Delete      	| yes        	|
| /shop/product_id         	| Get       	| Details Page                                                                  	| Read        	| yes         	|
| /shop/product_id         	| Post      	| Creates Reviews for users to share info on best prices/offers on Details page 	| Create      	| yes         	|
| /shop/product_id         	| Get       	| Gets all reviews                                                              	| Read        	| yes        	|
| /shop/product_id         	| Patch/Put 	| Updates the review                                                            	| Update      	| yes          	|
| /shop/product_id         	| Delete    	| Deletes the review                                                            	| Delete      	| yes          	|
| /shop/product_id/offers  	| Get       	| Show all offers available                                                     	| Read        	|yes         	|
| /shop/product_id/reviews 	| get       	| Shows reviews for specific item on other sites                                	| Read        	| yes         	|
#
