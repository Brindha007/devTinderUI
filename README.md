# devTinderUI PART 1
- Create a Vite + React application
- Remove unnecessary code and create a Hello World app
- Install Tailwind and config it
- Install daisyui and config it
- Add Nav bar component in App.jsx
- Create separate component for NavBar
- Install react router dom
- Create BrowserRouter > Routes > Route=/ Body > RouteChildren
- Create an Outlet in your Body Component
- Create a footer

# PART 2
- Create Login UI
- Install axios
- CORS - install cors in backend => add middleware  with configurations: origin, credentials : true,
- Whenever you're making API call so pass axios => {withCredentials: true}
- Install react-reduc + @reduxjs/toolkit 
- ConfigureStore => Provider => createSlice => add reducer to store
- Add redux devTools in chrome
- Login and see if your data is coming properly in the store
- NavBar should update as soon as user logs in
- Refactor our code to add constants file + create a component folder

# PART 3
- If token present then it should not logout on page refresh
- Should not access other pages without login
- Logout flow 
- Get the feed and add the feed in th store
- build the user card on feed
- Edit Profile Feature
- Show toast message on save profile

# PART 4
 - See all connections
 - See all requests 
 - Accept/Reject connection request
 
Body
    NavBar
    Route=/ => Feed
    Route=/login => Login
    Route=connection => Connections
    Router=/profile => Profile
