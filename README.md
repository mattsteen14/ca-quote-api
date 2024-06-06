
<a name="readme-top"></a>

-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<h3 align="center">Quote API</h3>

  <p align="center">
    Codecademy Full Stack Engineer path - Challenge Project
    <br />
    <a href="https://github.com/mattsteen14/ca-quote-api"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/mattsteen14/ca-quote-api">View Demo</a>
    ·
    <a href="https://github.com/mattsteen14/ca-quote-api/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/mattsteen14/ca-quote-api/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

### Codecademy Project Brief

"In this project, you’ll be building a small Express.js web API to store and serve different quotes about computers, coding, and technology."

Final task 8 extension bullet point:
* Add another resource to your API in addition to quotes, such as biographical blurbs (you’ll need to find your own data for this new resource). Use Express Routers to keep your code simple and separated into different files for each router.

### My Comments

Completed with task 8 extensions. I did not do the last bullet point as written (see above) because it seemed like it would be a lot of research needed and I surmised that the point of that particular sub task was to use Express Routers to separate & refactor code into another file. I feel that I achieved this through refactoring my quotes code into quote.js and running that through quotesRouter in server.js. 

Overall a good enjoyable task that took about half a day to complete. To help with the tasks, I mostly looked at my notes for the previous lessons in this Learn Express module. This project has really helped me get to grips with Express & back end. I've been finding it hard to adjust my thinking after jumping from front end to back end for so long but I feel like I'm getting the hang of it now. Using Postman to check if the code was working was really useful for this project.

*Please feel free to fact check the years and create a pull request to update. Essentially it is not the point of the project so I entered what I could find and guessed the rest. So if it bothers you then please forgive and feel free to contribute to correct.*

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

- HTML5
- CSS
- JavaScript
- [Express.js](http://expressjs.com/)
- [Node.js](https://nodejs.org/en)
- [Visual Studio Code](https://code.visualstudio.com)
- [Postman](http://postman.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

These are instructions on setting up the project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

<!-- 1. Get a free API Key at [https://example.com](https://example.com) -->
1. Clone the repo
   ```sh
   git clone https://github.com/mattsteen14/ca-quote-api.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start up server
   ```sh
   node server.js
   ```
4. Run in local browser
   ```sh
[localhost:4001](http://localhost:4001/)
   ```

5. Restart server to see changes if necessary
   ```sh
   ctrl+C
   ```
   ```sh
   node server.js
   ```
6. Refresh in local browser after step 6

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [ ] Implement nodemon.
- [ ] Assess the styling and personalize.
- [ ] Testing & Debugging.
- [ ] Use surge to deploy.

See the [open issues](https://github.com/mattsteen14/ca-quote-api/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Matt Steen-Brookes - [@mattsteen14](https://twitter.com/mattsteen14) - mattsteen14@me.com

Project Link: [https://github.com/mattsteen14/ca-quote-api](https://github.com/mattsteen14/ca-quote-api)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Mo Ashqar](https://github.com/ashqar) for introducing me to Codecademy in the first place. 
* [Othneil Drew](https://github.com/othneildrew) for the README template.
* [Choose an Open Source License](https://choosealicense.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/mattsteen14/ca-quote-api.svg?style=for-the-badge
[contributors-url]: https://github.com/mattsteen14/ca-quote-api/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/mattsteen14/ca-quote-api.svg?style=for-the-badge
[forks-url]: https://github.com/mattsteen14/ca-quote-api/network/members
[stars-shield]: https://img.shields.io/github/stars/mattsteen14/ca-quote-api.svg?style=for-the-badge
[stars-url]: https://github.com/mattsteen14/ca-quote-api/stargazers
[issues-shield]: https://img.shields.io/github/issues/mattsteen14/ca-quote-api.svg?style=for-the-badge
[issues-url]: https://github.com/mattsteen14/ca-quote-api/issues
[license-shield]: https://img.shields.io/github/license/mattsteen14/ca-quote-api.svg?style=for-the-badge
[license-url]: https://github.com/mattsteen14/ca-quote-api/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/mattsteen14
[product-screenshot]: /portfolio/resources/images/PortfolioScreenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
