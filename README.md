# Weather Dashboard

[Link to live deploy](add url here)

## Description

The motivation behind developing this weather dashboard was to create a dependable and user-friendly platform for accessing weather information. As a developer, I undertook this project with the primary goal of enhancing my proficiency in handling API requests and responses. Throughout the development process, I gained valuable insights into harnessing the capabilities of jQuery and Bootstrap libraries, enabling me to create a feature-rich application. This project has not only expanded my knowledge of API integration but has also honed my skills in creating efficient and functional JavaScript functions. Overall, it has been a rewarding experience that has significantly enriched my web development capabilities.

## Installation

1. In terminal, CD into project directory.
2. Git clone weather_dashboard.
3. CD into new project directory.
4. Open with your text editor, for VS Code, command `code .`.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative file path, add it to your README using the following syntax:

![alt text](assets/images/screenshot.png)

## License

MIT License

Copyright (c) 2023 ltrokey

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Badges

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white) 	![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

## Features

1. Local Storage Integration: The application utilizes local storage to save and retrieve user-selected locations for weather lookup. It stores these locations as JSON data in the browser's local storage, allowing users to access their previous search history even after closing or refreshing the page.

2. User Input Handling: Users can input location information (city and state) in an input field. The application responds to both button `clicks` and pressing the `Enter` key in the input field for initiating a weather search.

3. Location Search: When the user initiates a search, the application makes an API request to OpenWeatherMap's geolocation API to find matching locations based on the user's input. It then selects the most relevant location and fetches its current and future weather data.

4. Weather Display: The application displays the current weather conditions, including the date and time, city name, weather icon, temperature, humidity, and wind speed. It also provides a 5-day weather forecast with similar details.

5. User-Friendly Alerts: In case the application cannot find a matching location, it displays a user-friendly alert message with instructions on the expected location format. This alert message disappears automatically after a few seconds.

6. Location History: The application allows users to save their selected locations for future reference. These saved locations are displayed as clickable buttons for easy access to weather information for previously searched places.

7. Clear History: Users have the option to clear their location search history, which removes all saved locations from local storage.
