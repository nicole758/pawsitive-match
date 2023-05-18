# Pawsitive Match

Pawsitive Match is an application designed to simplify and enhance the adoption process, providing a visually appealing experience. It primarily targets a younger demographic, drawing inspiration from the popular dating app, Tinder.


## API Reference

#### Get all dogs

```http
 GET https://api.petfinder.com/v2/types/dogs
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |



## Tech stack used

React, Node, MySQL


## Authors

- [@nicole758](https://www.github.com/nicole758)



## Running the Project

To run the project, add my sql database username,password, and name on a .env file. Then run npm start on both the frontend and backend

```bash
  npm start for frontend and backend
```


## Features

1. Create an Account
2. Login to Account
3. Swipe right or left on a dog.
4. If dog is swiped right on, the dog is saved into the user's database.
5. Favorites Page with all dogs the invidividual wants to adopt.
6. Button on Favorites Page so the individual could adopt the dog.
7. Profile Page so user can edit their information.
8. Sign out button so the user can sign out of their account.

## Lessons learned & next steps

I have acquired the skills to enable user account creation and login functionality. Additionally, users can now save their favorite dogs by swiping right. I have gained proficiency in storing user information in the database on an individual basis. Moving forward, my objectives include implementing a secure user account system by hashing passwords before storing them in the backend. I also plan to incorporate the storage of additional profile information for users in the backend. Additionally, I aim to enhance the visual design to ensure a more enjoyable user experience.