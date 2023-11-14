# Google-Shop-Aggregate
Using an API to search through all of google shops aggregate data by specific items. Allowing the user to judge and view all potential offers to find the best price in the quickest way.

# ERD
![ERD](https://imgur.com/vxVkdMM)

# Screenshots of APP
![screenshots](https://imgur.com/a/rtoqjiJ)

# Tech used:
React, Vite, Node, Express, MongoDb
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
