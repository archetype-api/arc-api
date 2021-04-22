
# https://archetype-api.herokuapp.com/

#### a project by James Sheehan & Emmanuel Bravo

Project started Jan 25, 2019 and completed on Feb 24, 2019.
-Approximately 6 hours of collaborative planning on the system & algorithms.
-Approximately 10 collective hours of programming went to writing code.

#### Walkthrough

![example](https://media.giphy.com/media/oFS6v0Kem9iOqKsxcb/giphy.gif)

#### Themes

![Themes](https://media.giphy.com/media/1X7v50FreM0qkRJo6T/giphy.gif)

## Table of Contents

- [Preplanning](#preplanning) - [Wire-Frame](#wire-frame) - [Schema](#schema) - [System](#developing-the-system)
- [Main Challenges](#main-challenges) - [1. Developing the System](#developing-the-system) - [2. Dynamic MUI Themes](#material-ui) - [3. Displaying JSON](#react-json-pretty)
- [Technology](#technology) - [Material UI](#material-ui) - [React Router Hash Link](#react-router-hash-link) - [React JSON Pretty](#react-json-pretty) - [React Select](#react-select) - [Express](#express) - [React](#react) - [Axios](#axios) - [Deployment](#deployment)

## Preplanning

### Wire-Frame

Below is the initial wireframe created during pre-planning
![componentTree](https://s3.us-east-2.amazonaws.com/khamwas-readme/Screen+Shot+2019-02-26+at+7.21.55+PM.png)

### Schema

Our initial data set and api calls are not heavy on computation. So we used a NoSQL approach to storing and manipulating JSON objects. Our initial object structure allows us to grab related data and return it to the user based on their api call.

```json
{
  "archetype_id": 1,
  "drive": "leave a mark",
  "aspect": "ego",
  "method": "mastery",
  "shadow": "end justify the means",
  "name": "warrior",
  "alias": "hero",
  "role": "student",
  "color": "red"
}
```
### Developing the System
Developing the system.
The initial idea for the system came from developing a wheel that could be manipulated to match up complementary and contrasting archetypes. 

The first wheel came about by aligning all archetypes by their aspect: Ego, Self & Soul. 
![aspect](https://s3.us-east-2.amazonaws.com/khamwas-readme/aspect.PNG)

The wheel created by these relationships was the first working structure to developing the arcapi system. We were able to begin establishing and discovering what types of relationships worked and were common in fiction based on this layout.
![wheel](https://s3.us-east-2.amazonaws.com/khamwas-readme/wheel.PNG)


After working with the prototype wheel, we found that there were more common factors among archetypes that we attempted to incorporate into our model. The resulted in the framework below. This illustrates Role, Drive, & Method. 3 important pieces of understanding archetypes that we incorporated into our arcapi framework. 
![role](https://s3.us-east-2.amazonaws.com/khamwas-readme/role.PNG)


The final model for our arcapi framework came with the insight that the outlier roles and the soul aspects all occurred in the center of our model. We were able to lay our original mapping of Aspect: Ego, Self & Soul over our new model which resulted in the framework for the final working arcapi. 
![final](https://s3.us-east-2.amazonaws.com/khamwas-readme/final.PNG)

-The API we have constructed, at its core, is the usage of this model to determine complex relationships among archetypes for analyzing and creating characters. 

## Technology

### Material-UI

For API documentation, our design process was geared toward developers.  
The goal was to create a simple, intuitive UI which could clearly showcase the capabilities of the API.
Material UI provides a consistent, familiar environment for users.
Through simple theme customization we provide 12 dynamic palettes, which contribute to the overall UX
by allowing user controlled theme switching which coincides with different requests being made.

### React Router Hash Link

Providng full JSON objects as examples requires a lot of screen real estate.
React Router Hash Link provides seamless navigation with anchor tags and gradual transitions.

### React JSON Pretty

Does "Objects are not valid as a react child".... sound familiar?
React JSON Pretty provided the abilitiy to render JSON objects to the dom with custom theming.

### React Select
React Select is a flexible tool to provide easily customizable dropdown / input data selectors. 
This was important to manage the Dual Component data selection process. 

### Express
We chose to use the express framework for node to handle http requests.

### React
React provided the basis for a SPA which could handle rendering the example components and manage their state.

### Axios
Axios allowed implementation of promise based http request in combination with express and node. 

### Deployment
The deployment was completed via Digital Ocean droplet, ssh, pm2, and nginx. 
