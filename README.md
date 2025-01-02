# Quote Generator Project

## Description

The Quote Generator is a web application that displays random quotes each time the user clicks the "New Quote" button. The quotes are stored locally within the application and are displayed along with their respective authors. Users can also tweet the displayed quote directly from the app.

## Features

- Displays random quotes each time the "New Quote" button is clicked.
- Allows users to share the displayed quote on Twitter with one click.
- Quotes are stored locally in a JavaScript file, eliminating the need for an external API or network connection.
- User-friendly interface with smooth transitions between quotes.
- Loading animation is shown while the quote is being updated.

## Technologies Used

- **HTML**: Markup language for the app's structure.
- **CSS**: Styling the app's layout and appearance.
- **JavaScript**: Logic for generating and displaying quotes, and handling user interactions.
- **Git**: Version control for managing the project’s source code.

## How It Works

1. **Quote Generation**: The app stores an array of quotes within a `localQuotes` array in the `script.js` file. Every time the "New Quote" button is clicked, a random quote from the array is selected and displayed.
2. **Tweet Functionality**: The app also includes a "Tweet" button, which allows the user to share the displayed quote on Twitter.
3. **Loading Spinner**: A loading spinner is shown while the quote is being fetched (though the app uses local quotes, this is a placeholder for future features).
4. **Quote Display**: The quote text is displayed along with the author’s name, and the interface adjusts for longer quotes (e.g., changing the font size or adding a special class for styling).

