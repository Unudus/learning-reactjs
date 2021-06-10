as per spec : project contains a readme file :) 

# Brief as given

You must create an application to create, delete and list articles.

Each article must have one or more tags.

Each article must belong to a category. [Audio, Video, Quiz)

Article properties:

· Title

· Short Description

As a not logged in user, I want to see a home page and a button to log in

As a logged in user, after I do my login, I want to be redirected to another page called ‘contents list page’ which has a route of ‘/contents’

As a logged in user, I want to see all articles when I access the ‘contents list page’

As a logged in user, I want to search these articles either by title or tags.

As a logged in user, I want to filter articles by category.

As a logged in user, I want to create a new article.

As a logged in user, I want to add one or more tags to an article that I’ve created.

As a logged in user, I want to delete one or more tags to an article that I’ve created.

As a logged in user, I want to be able to delete an article.

What we expect from you

- Your app should be a React App

- Use most up to date libs

- Create a gitlab.com account if you don’t have one yet. We will provide you with a repository to push your code.

- You must create a readme file in your project:

all the libs, frameworks, third-party tools required to run the solution

all the instructions needed to any developer get it up and running on its machine smoothly

- If you choose to use “.env” approach, please add a “.env.dist” file with no secrets, just variable/property names and static required values with default values for development environment

More details 

In order to complete the task, you can use mock data (example [here](https://medium.com/chaya-thilakumara/how-to-create-a-local-api-server-rest-api-for-testing-945bbb2d31b7)) or you can write your own NodeJS API. If you are going with the second option, see bonus marks section for more guidance.

Bonus marks

- Styling a React App with Material UI

- Implement React Component tests

- If writing your own API, using a NoSQL database

# Notes

* I used [this guide](https://www.robinwieruch.de/local-storage-react) to learn more about session wrangling
* I used [this](https://reactrouter.com/web/example/basic) and [this](https://reactrouter.com/web/example/auth-workflow) as an example of basic routing, protected paths etc
