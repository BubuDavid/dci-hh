[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


![DCI Logo](https://i.imgur.com/BWjEV8J.png)

# DCI Scholar Scheduler


DCI Schedule Maker is a Full Stack Web Application designed to automate the process of schedule creation for students. It includes a user-friendly interface and intelligent algorithms that effectively minimize the time required to create schedules. What once took several hours of planning and creating schedules now takes only a few seconds.

This tool is currently being used by over 1000 students at our school, making it a valuable asset for enhancing academic efficiency.

## Features

- User-friendly interface for easy schedule creation
- Intelligent algorithms that optimize schedule creation

## Technologies Used

- ReactJS for the frontend
- FastAPI for the backend [You can find the repo here!](https://github.com/BubuDavid/DCI_hacedor_horarios_backend)

## Getting Started

### Prerequisites

- Node.js
- Python

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/BubuDavid/dci-hh.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. You need to clone and install the backend part too, [click here to get the information](https://github.com/BubuDavid/DCI_hacedor_horarios_backend).

4. Create an .env file with the following variables:
   ```sh
   REACT_APP_API_NAMES_URL = URL of the endpoint in the backend for getting the names of the subjects.
   REACT_APP_API_PROFESSORS = URL of the endpoint in the backend for getting the names of the professors.
   REACT_APP_API_SCHEDULES = URL of the endpoint in the backend for getting the schedules
   REACT_APP_API_URL = URL of the base endpoint for the backend
   ```

5. Start the server
   ```sh
   npm start
   ```
   

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

David Pedroza Segoviano - david.pedroza.segoviano@gmail.com

Project Link: [https://github.com/BubuDavid/dci-hh](https://github.com/BubuDavid/dci-hh)




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/BubuDavid/dci-hh.svg?style=for-the-badge
[contributors-url]: https://github.com/BubuDavid/dci-hh.git/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/BubuDavid/dci-hh.svg?style=for-the-badge
[forks-url]: https://github.com/BubuDavid/dci-hh.git/network/members
[stars-shield]: https://img.shields.io/github/stars/BubuDavid/dci-hh.svg?style=for-the-badge
[stars-url]: https://github.com/BubuDavid/dci-hh.git/stargazers
[issues-shield]: https://img.shields.io/github/issues/BubuDavid/dci-hh.svg?style=for-the-badge
[issues-url]: https://github.com/BubuDavid/dci-hh.git/issues
[license-shield]: https://img.shields.io/github/license/BubuDavid/dci-hh.svg?style=for-the-badge
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/davidpedrozasegoviano/
[product-screenshot]: static/images/screenshot.png
