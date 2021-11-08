# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

For this project I expanded on an app that retrieved movies from a database and displayed them in a home page.

I created a movie detail page that a user can access by clicking on a movie image in the home page. When clicked, the user is navigated to a detail page that provides a description of the movie, as well as what genres it has been associated with in the database.

To create the detail page I first used useHistory to route the user to the detail page. I then set up a function that stored only the selected Movies data in a reducer, and then accessed that information from the store. I used this data to display the selected movie's title, poster image, and description to the page. The details page also includes a button to navigate back to the home page.

Displaying the associated genres for the selected movie on the details page was not as clear cut due to a movie being able to have more than one genre. I used front-end logic to loop through data from the movies_genres join table to match the movie id from the selected Movie data.
Once that match was found, I looped through all possible genres to find the genre ids associated with the selected movie id. If there were matches, the genre name was pushed to an array, which was then looped over in order to display the associated genres on the details page.

Another created feature of this app is the add movie page. The add movie page allows the user to input a movie into the database and have it display on the DOM. The add movie page includes input fields for a user to enter the movie's title, movie poster image url, description, and a drop-down menu to select a genre. When the submit button is clicked, the data from the input fields is bundled up and sent to the database, the user is navigated back to the home page where they can see the movie they have just added. There is also a button to cancel, which navigates the user back to the home page.

Technology utilized in this app:
- React
- Redux
- Postgres
- SQL
- javascript
- axios
- saga 
- HTML 
- CSS

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
