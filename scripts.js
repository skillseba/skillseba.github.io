function aboutus() {}

function services() {}

function portfolio() {}

function pricing() {}

function conactus() {
  let oldBody = document.querySelector("body");

  //   let newBody = document.createElement("body");

  oldBody.innerHTML = `
    <header>
      <img
        id="raflogo"
        src="images/rafitism.png"
        alt="RAFITISM Logo"
        height="25px"
      />
      <div id="header-logs">
        <div id="head-search-bar">
          <img
            src="images/search.svg"
            alt="search icon"
            height="10px"
            id="search-icon"
          />
          <input
            type="search"
            name="searchbar"
            id="search-bar"
            placeholder="Search"
          />
        </div>
        <nav>
          <a class="navlink" href="/index.html">Home</a>
          <a class="navlink" href="#" onclick="aboutus()">About Us</a>
          <a class="navlink" href="#" onclick="services()">Services</a>
          <a class="navlink" href="#" onclick="portfolio()">Portfolio</a>
          <a class="navlink" href="#" onclick="pricing()">Pricing</a>
          <a class="navlink1" href="#" onclick="contactus()">Contact Us</a>
        </nav>
      </div>
    </header>
    <main>
      <form action="none" id="usrform"></form>
      <div id="contactForm1">
        <div class="form">
          <h3>Get in touch</h3>
          <div class="inputs">
            <img src="images/person.svg" alt="name" height="15px" />
            <input
              type="text"
              class="inputfield"
              name="enterName"
              id="enterName"
              form="usrform"
              placeholder="Name"
            />
          </div>
          <div class="inputs">
            <img src="images/email.svg" alt="name" height="15px" />
            <input
              type="email"
              class="inputfield"
              name="enterEmail"
              id="enterEmail"
              form="usrform"
              placeholder="Email"
            />
          </div>
        </div>
      </div>
      <div id="contactForm2">
        <textarea
          class="inputfield"
          name="enterMsg"
          rows="8"
          id="enterMsg"
          form="usrform"
          placeholder="Message"
        ></textarea>
        <input
          type="submit"
          name="submit"
          id="submit"
          value="Submit"
          form="usrform"
        />
      </div>
    </main>
    <footer></footer>
    `;
}
