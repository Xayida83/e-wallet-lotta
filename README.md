# E-Wallet Lotta
## Description
**E-wallet** is a web application that allows users to manage their payment cards. Users can add new cards, edit them, activate or deactivate them, and delete inactive cards. The app also includes theme customization, allowing users to switch between different themes like dark, light, and seasonal modes.

## **Features**
### Navigation and Pages

  **1. Home (/):**
  
  - Displays a list of all the user's cards (maximum of 4 cards).
  - Contains an Add New Card button, which navigates to /addcard.
  - Shows the active card at the top of the list and allows the user to delete inactive cards.
  - Each card can be clicked to navigate to /card/:id to view, edit, or activate the card.

  **2. Add Card (/addcard):**
  
  - Provides a form to add a new card with fields for:
    -  Cardholder name
    -  Card number (16 digits)
    -  Expiration date (month/year)
    -  CVC code (3 digits)
    -  Card issuer (e.g., Visa, MasterCard, Ankademin)
  - A preview of the card updates dynamically based on the user's input.
  
  **3. Card Details (/card/:id):**
  
  -  Shows all the details of the selected card.
  -  Users can edit card information if the card is inactive.
  -  Users can activate or delete the card if it is inactive.
  
  **4. Settings (/settings):**
  
  -  Users can switch between different themes (dark, light, holiday/seasonal).
  -  Users can also delete all inactive cards.

### Card Validation

-  The card number must be exactly 16 digits.
-  The expiration date must not be a past date.
-  Cardholder names cannot contain numbers.
-  The CVC code must be exactly 3 digits.

### State Management with Redux

-  Redux is used for managing the application state, such as adding, deleting, and activating cards.
-  The active card is stored in the Redux state and displayed at the top of the card list.
-  Theme selection and settings are managed via Redux (using a settingsSlice).

### Styling and Themes

-  Styled-components are used to apply dynamic styles based on the selected theme.
-  The application includes three themes: dark, light, and seasonal.
- **Polished** is used for color manipulation, including hover effects and gradients.

### Technologies

-  **React:** Component-based UI.
-  **React Router:** For handling client-side routing.
-  **Redux:** For state management across the app.
-  **Styled-components:** For dynamic and theme-based styling.
-  **Polished:** For advanced color manipulation in CSS.

### Project Structure

```bash
src/
│
├── components/          # Reusable components (Card, Button, etc.)
├── pages/               # Main pages (Home, AddCard, CardDetails, Settings)
├── redux/               # Redux slices and store configuration
├── theme/               # Theme-related files for styled-components
└── App.js               # Main App component with routing

```

### Future Development
-  Add more card issuers with customizable designs.
-  Implement further security features for card management.
-  Enhance the user experience with more advanced UI/UX features.
-  Apply variables for all commonly used properties such as colors, font sizes, margins, and paddings to ensure flexibility and easy updates.
