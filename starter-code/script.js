let iconMode = document.querySelector(".icon_mode")
const btn = document.querySelector(".btn")
const inputUserName = document.querySelector("input")


// Toggle Dark Mode

iconMode.addEventListener("click" , () => {
  document.body.classList.toggle("dark-theme")

  if (document.body.classList.contains("dark-theme")) {
    document.querySelector(".mode_text").textContent = "Light"
    iconMode.src = "./assets/icon-sun.svg"
  } else {
    document.querySelector(".mode_text").textContent = "Dark"
    iconMode.src = "./assets/icon-moon.svg"
  }
})

// Btn 

btn.addEventListener("click", (event) => {
  event.preventDefault()

  const url = `https://api.github.com/users/${inputUserName.value}`
  fetch(url).then(res => res.json()).then(data => displayData(data))

 inputUserName.value = ""
})

// Fetching API


// Display Data function

function displayData (data) {
  let avatar = document.querySelector(".avatar")
  let name = document.querySelector(".info_header_text")
  let joinDay = document.querySelector(".join_day")
  let email = document.querySelector(".email")
  let bio = document.querySelector(".info_header_bio")
  let following = document.querySelector(".following")
  let repos = document.querySelector(".repos")
  let follower = document.querySelector(".follower")
  let location = document.querySelector(".location")
  let twitter = document.querySelector(".twitter")
  let blog = document.querySelector(".blog")
  let githubURL = document.querySelector(".github-url")

  
  avatar.src = data.avatar_url
  name.textContent = data.name
  joinDay.textContent = data.created_at
  email.textContent = data.email
  bio.textContent = data.bio
  following.textContent = data.following
  repos.textContent = data.public_repos
  follower.textContent = data.followers
  location.textContent = data.location
  twitter.textContent = data.twitter_username
  blog.textContent = data.blog
  githubURL.textContent = data.company

  if (data.twitter_username == null) {
    twitter.textContent = "Not Available"
  } 
   if (data.bio == null) {
    bio.textContent = "This profile has no bio"
  }
  if(data.email == null) {
    email.textContent = "Not Available"
  }
  console.log(data)
}

