<h1> The Shoppies: Movie awards for entrepreneurs </h1>

Submission for <a href="https://docs.google.com/document/d/1SdR9rQpocsH5rPTOcxr9noqHRld5NJlylKO9Hf94U8U/edit#heading=h.31w9woubunro"> UX Developer Intern & Web Developer Intern Challenge - Fall 2021 </a>

The project is deployed at: https://jenishat.github.io/the-shoppies-fall2021/

<h1> Built using: </h1>
<ul>
 <li><b>React</b> and <b>Material UI</b> for the frontend development</li>
 <li><b>Redux</b> for state management</li>
 <li><b>Express</b> for deployment </b> </li>
 <li><b>GitHub Pages</b> for hosting </li>
</ul>

<h1> Usage Notes </h1>

<h2> Home Page </h2>
<p>This page serves as the main landing page for the site.</p>
<img src="/docs/images/homepage.JPG" alt="Home page">

> On the "Home" page, users can click on the "Nominate Movies" button to navigate to the "Nominate Movies" page 

<h2> Nominate Movies Page </h2>
<p>This page allows the user to add and remove movies from their nomination list. Once adding 5 movies, they can also submit their nominations from this page.</p>
<img src="/docs/images/nominateMovies.JPG" alt="Nominate Movies Page - 2 Nominations">

> On the "Nominate Movies" page, users can search for movies by title and add movies as nominees by pressing the "Nominate" button. Users can also view the IMDB page for the movie by clicking the "Info" button. 
> 
> Users can remove a nomination by clicking the delete icon on the corresponding nominee in the nominations list. They can also view the IMDB pages of these movies by clicking on the info icon.
> 
<br/>

<img src="/docs/images/nominateMovies5Nominations.JPG" alt="Nominate Movies Page - 5 Nominations">

> Once a user has nominated 5 movies, an alert will pop up notifying them to submit their nominations. The alert contains a "Submit" button, which they will use to submit their nominations. The user will be able to modify their nominations as long as they haven't submitted their nominations
>
> Once user clicks 'Submit', a pop-up will be displayed with an overview of their nominations

<br/>
<img src="/docs/images/nominateMoviesSubmitted.JPG" alt="Nominate Movies Page after submission">

> After the pop-up is closed (by clicking OK), the nomination list can't be editted. However the user can still utilize the site to search for movies and view their IMDB pages. Their nomination list will be saved and they can view them from both the "Nominate Movies" and "My Nominations" pages.

<h2>My Nominations Page</h2>
<p>This page allows the user to simply view their nominations list and remove movies from it (if they haven't already submitted).</p>

<img src="/docs/images/myNominations.JPG" alt="My Nominations Page with 2 nominations">

> On the "My Nominations" page, users can view their current nominations lists. If the user has less than 5 nominations in their list, a message is display with the current nomination count. To add more nominations, the user has to navigate to the "Nominate Movies" page. 
> 
> If the user has not yet submitted their nominations, they can remove nominations from their list, by clicking the delete icon for the nominee.

<br/>
<img src="/docs/images/myNominations5Nominations.JPG" alt="My Nominations Page with 5 nominations">

> If the user has 5 nominations, an alert similar to "Nominate Movies" is displayed. If the user clicks "Submit", then the nomination summary dialog is outputted. 

<br/>
<img src="/docs/images/myNominationsSubmitted.JPG" alt="My Nominations Page submitted nominations">

> Once the dialog is closed, the user can't edit their nominations. They will still be able to view the IMDB pages using the link icons for the nominees.

<h1> Extra Features </h1>
<ul> 
  <li><b>Nomination lists are saved</b> when the user navigates away from the page</li>
      <ul>
       <li>This is achieved through the use of <code>localStorage</code> and a persistant store created using <code>redux-persist</code> </li>
      </ul>
  <li> Searching is <b>paginated</b></li>
  <li> <b>Fully Responsive </b>, supporting up to a minimum width of 375px (the typical width of an iPhone X): <br/>
    <img src="/docs/images/homepageMobile.JPG" alt="Home Page on Mobile" width="255" height="455"/>
    <img src="/docs/images/nominateMoviesMobile.JPG" alt="Nominate Movies Page on Mobile" width="255" height="455"/>
    <img src="/docs/images/myNominationsMobile.JPG" alt="My Nominations Page on Mobile" width="255" height="455"/>
  </li>
  <li> <b>Toast message notifications </b> when succesfully nominating a movie </li>
  <li> Homepage curtain <b>animation</b>
</ul>
 
