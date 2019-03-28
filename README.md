# Social Media Application on MEAN Stack
## Description
This is a simple SPA where users can do post and view posts using pictures

### Features:
- Post something on the App
- Edit posts
- Delete posts
- Upload images on the post
- Signup and login
- View all posts and paginate the number of posts

#### Posts Process:
1. User view/post data on the UI
2. PostService is called
3. On backend RESTAPI will be called for corresponding operations GET/POST/PUT/DELETE
5. RESTAPI use Mongoose schemas to commit/read data from MongoDB

### Login Process:
1. User Signup on the APP
2. Backend RESTAPI is called to POST new user
3. Once Signup is complete, login into APP
4. Login will generate a signed token from Backend
5. Token is sent to client/front end
6. Token is set to expire in 1 hour and saved on client browser storage
7. Subsequent calls between frontend and backend APIs communication uses token

#### Tech stack used:
- AngularJS
- HTML5 for templates
- Angular Material for themes
- Express for middleware
- NodeJS
- Mongoose for driver to MongoDB

#### Deployment:
- Frontend deployment on Amazon s3
- Backend deployment on Amazon Elastic Bean Stalk

##### Home Page:
![image](https://github.com/krishnakishorep/SocialMediaApp-On-MEAN-Stack/blob/master/ScreenShots/HomePage.PNG)

##### New Post:
![image](https://github.com/krishnakishorep/SocialMediaApp-On-MEAN-Stack/blob/master/ScreenShots/NewPost.PNG)

##### View Posts:
![image](https://github.com/krishnakishorep/SocialMediaApp-On-MEAN-Stack/blob/master/ScreenShots/ViewPosts.PNG)
