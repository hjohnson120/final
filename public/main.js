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
      document.querySelector('.copyright').textContent = message.copyright
      document.querySelector('.title').textContent = message.title

      fetch('https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming')
        .then(resp => {
          console.log(resp)
          return resp.json()
        })
        .then(upcomingLaunches => {
          console.log(upcomingLaunches)

          let launchTime = upcomingLaunches[0].launch_date_utc
          // update the HTML
          document.querySelector('.name-of-launch').textContent =
            upcomingLaunches[0].mission_name
          document.querySelector('.launch-info').textContent =
            upcomingLaunches[0].details
          document.querySelector('.launch-time').textContent = launchTime
          document.querySelector('.launch-place').textContent =
            upcomingLaunches[0].launch_site.site_name_long
          // if (count < upcomingLaunches.length) {
          //   count++
          // } else {
          //   count = 0
          // }
          // console.log(count)

          // var countDownDate = new Date('May 01,2019 00:00:00').getTime()

          // const setTimer = setInterval(function() {
          //   let now = new Date().getTime()
          //   let distance = countDownDate - now
          //   console.log(distance)

          //   let days = Math.floor(distance / (1000 * 60 * 60 * 24))
          //   let hours = Math.floor(
          //     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          //   )
          //   let minutes = Math.floor(
          //     (distance % (1000 * 60 * 60)) / (1000 * 60)
          //   )
          //   let seconds = Math.floor((distance % (1000 * 60)) / 1000)

          //   document.getElementById('.timer').innerHTML =
          //     days + 'd' + hours + 'h' + minutes + 'm ' + seconds + 's'

          //   if (distance < 0) {
          //     clearInterval(setTimer)
          //     document.getElementById('.timer').innerHTML = 'EXPIRED'
          //   }
          // }, 1000)
        })
    })
}

document.addEventListener('DOMContentLoaded', main)
