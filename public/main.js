const main = () => {
  document.querySelector('.pic-of-the-day').textContent = ' '
  fetch('https://sdg-astro-api.herokuapp.com/api/Nasa/apod')
    .then(resp => {
      console.log(resp)
      return resp.json()
    })
    .then(message => {
      console.log(message)
      // update the HTML
      document.querySelector('.pic-of-the-day').style.backgroundImage =
        'url(' + message.url + ')'
    })
}
document.addEventListener('DOMContentLoaded', main)
