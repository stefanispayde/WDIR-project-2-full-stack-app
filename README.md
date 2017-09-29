Just The Tip....

OVERVIEW
For this web app, I wanted an idea that could easily follow the requirements for full CRUD, but also had a real purpose and addressed a topic of importance or interest. 'Just the Tip' came to be after a funny, yet enlightening conversation with a close male friend, of which I go into greater detail on the main index.ejs file. Through tasteful adult humor, the app can address serious issues, yet maintain an approachability that people can trust. 

USER STORIES
A user can read through all posts other users have posted on site.
If a user has a question or story they'd like to share, they can anonymously create a new post. They do not need to be signed in to create a post, but they will if they want to edit or delete it.
Comments can be attached to previous posts.
Posts can be deleted, or edited by users.
User can delete comments as well.

FEATURES
Use Mongo DB for storing data such as the Posts and Comments.
Gave the backend functionality by using Node.js and Express.js as server side web app framework.
App has two models; Posts which is full CRUD, and Comments which utilizes Create, Read, and Delete.
EJS was used as a templating engine.
The app relies on RESTful routing to render and redirect user to specific pages.

APP WISHLIST
There are quite a few features I will continue working on to enhance this app and make it more user friendly.
First thing I have begun working on is user authorization, giving the user and only the user the ability to delete or update their posts. They will also be allowed to delete any comments they do not want attached to a particular post.

I am also categorizing posts into weeks and by topic. As of now they are all on the same show.ejs file, and it is starting to look messy and cluttered. Once the post is submitted, it goes to both the users show page and is categorized by week and topic on the posts/index page.

Adding a thumbs up/thumbs down glyphicon would allow users to like or dislike posts and comments they have read.

As an after thought, it may be a good oppurtunity to add sections on the main index page, as well as the models index pages, which give information about safe sex, testing centers, and other resources.
