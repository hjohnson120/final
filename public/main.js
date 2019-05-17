const main = () => {
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
      fetch('https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming')
        .then(resp => {
          console.log(resp)
          return resp.json()
        })
        .then(upcomingLaunches => {
          console.log(upcomingLaunches)
          // update the HTML
          document.querySelector('.name-of-launch').textContent =
            upcomingLaunches[0].mission_name
          document.querySelector('.launch-info').textContent =
            upcomingLaunches[0].details
          document.querySelector('.launch-time').textContent =
            upcomingLaunches[0].launch_date_unix
          document.querySelector('.launch-place').textContent =
            upcomingLaunches[0].launch_site.site_name_long
        })
    })
}

document.addEventListener('DOMContentLoaded', main)
