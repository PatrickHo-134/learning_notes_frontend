This is the repo for the frontend of my project **Learning Notes App**

# How to build this project

## Create React app
Run this command
```
npx create-react-app frontend
```

Install required dependencies

```
npm install axios react-redux redux redux-thunk
```

## Create first React component - Learning Notes
Create 3 folders in src folder: actions, components and reducers

Firstly, create the learningNoteActions.js file in the actions folder to handle the actions related to learning notes.

Next, in `src/components`, create 2 components in: `src/components/LearningNoteList.js` and `src/components/LearningNoteForm.js`.

Add those 2 components to `App.js`

## Set Up Redux Store:
Create Redux actions and reducers to manage the global state for your app. For example, you can have actions for fetching learning notes from the backend, and reducers to update the state accordingly.

Firstly, create Redux's store and pass it to the `Provider` component created in the next step. (Note: to resolve issue with Redux/s `createStore` being deprecated, refer to question 2 in *Questions* section)

The `react-redux`'s `Provider` component is responsible for providing the Redux store to the components. You need to wrap entire application with the Provider component in the `index.js` file

## Create the Redux reducers for the Learning Notes feature
In the src/reducers directory, create a new file called `learningNoteReducer.js`

Add this reducer with other reducers in the `src/reducers/index.js` file

Note: At the moment, we can create mock data for the UI to display Learning Notes list as the frontend is still not able to send requests to the backend yet.

(To allow frontend to make successful requests to backend, we need to configure Django backend to include the Access-Control-Allow-Origin header in its responses, allowing requests from the frontend domain (http://localhost:3000).)

## Create **LearningNoteCard.js** to display the information of a single learning note.
We'll add the user's name, date created, title, content, and date updated (if available) to the card.
We use `moment` package to format the date strings (created_at and updated_at) to a more human-readable format.

```
npm install moment
```

### Install `reactstrap` to add styles to UI components
Run this code
```
npm install reactstrap bootstrap

```

### Adding style to the component
Create a new file called **LearningNoteCard.css** in the **src/components** directory and define a CSS class for learning-note-card






# Questions:
## 1. How to fix issue with 'Insufficient permissions' in VSCode?
Run this command

```
sudo chown -R patrick frontend
```

## 2. How to handle the issue with Redux's `createStore` being deprecated?
It is recommended to use the configureStore method from @reduxjs/toolkit, which is the official package for efficient Redux setup and includes several useful utilities.
- Install `@reduxjs/toolkit`
     ```
     npm install @reduxjs/toolkit
     ```
- Create the Redux store using `configureStore`