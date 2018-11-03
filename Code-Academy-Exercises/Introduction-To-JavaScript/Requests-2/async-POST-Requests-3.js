// information to reach API
const apiKey = 'b91351d9c0464ed79e82b1a11d6a19e5';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
// Code goes here
const shortenUrl = async () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination:urlToShorten});
  try {
    //Code on success
    const response = await fetch(url,{
      //POST Object
      method: 'POST',
      body: data,
      headers:{
        //Header going back to the server
        'Content-type': 'application/json',
        'apikey': apiKey }
      }
    );
    //Note: this handles response from line 17
    if (response.ok) {
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch (error) {
    //Code on failure
    console.log(error);
}
}
// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
