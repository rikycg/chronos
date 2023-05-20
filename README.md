# Chronos Calendar Library

Welcome to the Chronos Calendar Library, an Angular library designed to provide a user-friendly calendar component. This library is continuously being improved to enhance its functionality and features. Currently, the library enables users to view a calendar and navigate between different months of a year.

## Installation
To install the Chronos Calendar Library, simply run the following command using npm:
```
npm i chronos-calendar-lib -S
```

## Usage
Using the Chronos Calendar Library is straightforward. You need to import the `ChronosCalendarLibModule` module into your App Module and then utilize the calendar component within your template, as shown below:
```html
<ch-calendar></ch-calendar>
```

### Styles
If you wish to import the library's styles, you can add the following line to the `angular.json` file, specifically under `architect > build > options > styles`:
```json
"./node_modules/chronos-calendar-lib/src/lib/assets/styles/chronos-theme.scss"
```

## Demo
To see the library in action, you can use the following command to serve your Angular application:
```
ng serve
```
Afterward, open your web browser and visit [localhost:4200](http://localhost:4200) to view the demo.

## Nested Libraries
The Chronos Calendar Library utilizes the following nested libraries to provide additional functionality:

- [Date-fns](https://date-fns.org/)
- [FontAwesome](https://fontawesome.com/)

## Future Development
In the upcoming versions of the Chronos Calendar Library, the following features will be included:

- Day selection capability
- Event handling within the calendar days

We strive to make the Chronos Calendar Library even more powerful and user-friendly with each iteration.

Please feel free to reach out if you have any questions, suggestions, or feedback regarding the Chronos Calendar Library. We appreciate your support and hope you find this library useful for your Angular projects.

Thank you!