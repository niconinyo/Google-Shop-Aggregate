# Google-Shop-Aggregate
Using an API to search through all of google shops aggregate data by specific items. Allowing the user to judge and view all potential offers to find the best price in the quickest way.

# ERD
![ERD]([https://imgur.com/a/6buUl2z](https://imgur.com/a/JM1gnGV))

# Route Table
| URL                      	| HTTP Verb 	| Purpose                                                                       	| CRUD Action 	| Created Yet 	|
|--------------------------	|-----------	|-------------------------------------------------------------------------------	|-------------	|-------------	|
| /user/signup             	| POST      	| Creat acc                                                                     	| Create      	| No          	|
| /user/signin             	| POST      	| Sign into acc                                                                 	| Read        	| No          	|
| /                        	| Get       	| Home page                                                                     	| Read        	| NO          	|
| /shop                    	| Get       	| Index Page                                                                    	| Read        	| NO          	|
| /shop/user_id/offer      	| post      	| Allows user to create their own offer                                         	| Create      	| NO          	|
| /shop/user_id/offer      	| get       	| Show all of the users offers                                                  	| Read        	| NO          	|
| /shop/user_id/offer      	| put       	| Updates the users offer                                                       	| Update      	| NO          	|
| /shop/user_id/offer      	| Delete    	| Deletes users offer                                                           	| Delete      	| NO          	|
| /shop/product_id         	| Get       	| Details Page                                                                  	| Read        	| NO          	|
| /shop/product_id         	| Post      	| Creates Reviews for users to share info on best prices/offers on Details page 	| Create      	| NO          	|
| /shop/product_id         	| Get       	| Gets all reviews                                                              	| Read        	| NO          	|
| /shop/product_id         	| Patch/Put 	| Updates the review                                                            	| Update      	| NO          	|
| /shop/product_id         	| Delete    	| Deletes the review                                                            	| Delete      	| NO          	|
| /shop/product_id/offers  	| Get       	| Show all offers available                                                     	| Read        	| NO          	|
| /shop/product_id/reviews 	| get       	| Shows reviews for specific item on other sites                                	| Read        	| NO          	|

#
