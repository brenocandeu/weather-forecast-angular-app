# 🌤️ Weather Forecast App

Welcome to the Weather Forecast App! 🌎 This simple Angular application lets you search for weather conditions by city and provides a detailed forecast for the next few days. Get insights on temperature, humidity, and weather conditions like clear skies, rain, or clouds. We use a third-party weather API to fetch real-time data.

## 📋 Features
- 🌆 Search weather by city
- ☀️ Display current weather details (temperature, humidity, etc.)
- 🌦️ 5-day weather forecast
- 🖥️ User-friendly interface

## 💻 Technologies Used
- Angular
- HTML5, CSS3, TypeScript
- [OpenWeatherMap API](https://openweathermap.org/api) (or any weather API of your choice)

## 🚀 Prerequisites
To run this project locally, you need:
- Node.js
- Angular CLI

## 🛠️ Getting Started
1. Clone the repository:  
   ```bash
   git clone https://github.com/brenocandeu/weather-forecast-app.git
2. Navigate to the project directory:
   ```bash
   cd weather-forecast-app
3. Install dependencies:
   ```bash
   npm install   
4. Run the app:
   ```bash
   ng s
5. Open your browser and go to `http://localhost:4200`

## 🌐 API Setup
1. Go to the [OpenWeatherMap API](https://openweathermap.org/api) and sign up to get an API key.  
2. In the project, open the file `src\app\app.component.ts` and add your API key:
   ```typescript
     async searchCity() {
       const key = 'YOUR_API_KEY';
     }
3. Save the changes.

## 📦 Deployment
1. To deploy the app, run the following command to build the project:
   ```bash
    ng build --prod
The build artifacts will be stored in the `dist/` directory. You can now deploy the contents of this directory to your preferred web server.

## 🤝 Contributing
Feel free to fork this repository and submit pull requests. Contributions are welcome to improve the app and add new features.

## 📝 License
This project is licensed under the MIT License.

## 👨‍💻 Author
Created by [@brenocandeu](https://github.com/brenocandeu/)
