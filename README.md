# UX Developer Intern & Web Developer Intern Challenge - Fall 2021

### The Shoppies: Movie awards for entrepreneurs

The project is deployed at: https://the-shoppies-jenisha.herokuapp.com

# Usage Notes

## Home Page
On the "Home" page, users can click on the "Nominate Movies" button to navigate to the "Nominate Movies" page 

## Nominate Movies Page
On the "Nominate Movies" page, users can search for movies by title and add movies as nominees by pressing the "Nominate" button. Users can also view the IMDB page for the movie by clicking the "Info" button. 

Once a user has nominated 5 movies, an alert will pop up notifying them to submit their nominations. The alert contains a "Submit" button, which they will use to submit their nominations. The user will be able to modify their nominations as long as they haven't submitted their nominations

Users can remove a nomination by clicking the delete icon on the corresponding nominee in the nominations list. They can also view the IMDB pages of these movies by clicking on the info icon.

Once user clicks 'Submit', a pop-up will be displayed with an overview of their nominations

After the pop-up is closed (by clicking OK), the nomination list can't be editted. However the user can still utilize the site to search for movies and view their IMDB pages. Their nomination list will be saved and they can view them from both the "Nominate Movies" and "My Nominations" pages.

## My Nominations Page
On the "My Nominations" page, users can view their current nominations lists. If the user has less than 5 nominations in their list, a message is display with the current nomination count. To add more nominations, the user has to navigate to the "Nominate Movies" page. 

If the user has 5 nominations, an alert similar to "Nominate Movies" is displayed. If the user clicks "Submit", then the nomination summary dialog is outputted. Once the dialog is closed, the user can't edit their nominations. They will still be able to view the IMDB pages using the link icons for the nominees.

If the user has not yet submitted their nominations, they can remove nominations from their list, by clicking the delete icon for the nominee.

# Built using:
* React
* Redux
* Material-UI

# Extra Features
* Users nomination lists are saved when the user navigates away from the page
  * Implemented using localStorage and redux-persist
* Toast messages when succesfully nominating a movie 
* Homepage curtain animation implemented through CSS 

