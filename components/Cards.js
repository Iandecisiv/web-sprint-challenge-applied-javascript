// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const cardCard = document.querySelector(".cards-container");

axios.get("https://lambda-times-api.herokuapp.com/articles")
    .then(response => {
        Object.values(response.data.articles).forEach(item => {
            item.forEach(articles => {
                cardCard.append(moreCards(articles))
            })
        
            console.log(response);
    })
    .catch((error) => {
        console.error("It broke?... It broke.");
        console.log(error);
     })

    })

function moreCards(object){

    const card = document.createElement('div');
    card.classList.add('card');
    
    const headline = document.createElement('div');
    card.appendChild(headline);
    headline.classList.add('headline');
    headline.textContent = object.headline;

    const author = document.createElement('div');
    card.appendChild(author);
    author.classList.add('author');

    const imgcon = document.createElement('div');
    author.appendChild(imgcon);
    imgcon.classList.add('img-container');

    const img = document.createElement('img');
    imgcon.appendChild(img);
    img.src = object.authorPhoto;

    const whoDunIt = document.createElement('span'); 
    author.appendChild(whoDunIt); 
    whoDunIt.textContent = `By ${object.authorName}`;

    headline.addEventListener("click", () => {
        console.log(object.headline)
    })
    return card;
}
