# Modern Login Landing Page

A responsive, split-screen login page featuring a modern aesthetic, custom asset integration, and interactive form elements. This project mimics a specific design reference using HTML5, Tailwind CSS, and vanilla JavaScript.

## 🚀 Features

- #### Responsive Split-Screen Design:
  - **Desktop**: Full-width layout with a visual sidebar on the left and a login form on the right.
  - **Mobile**: The visual sidebar automatically hides to prioritize the login form for smaller screens.

- **Custom Assets**: Integrates a specific astronaut illustration (```bg-astronaut-lp.jpg```) as the primary visual.

- #### Interactive UI:

  - **Password Toggle**: Users can show/hide their password visibility using the eye icon.
  - **Loading State**: The login button displays a spinner animation during form submission simulation.
  - **Floating Inputs**: Focus states with custom branding colors.

- **Modern Styling**: Built with **Tailwind CSS** for utility-first styling and **FontAwesome** for icons.

## 🛠️ Tech Stack

- **HTML5**: Semantic markup.
- **Tailwind CSS (CDN)**: Used for rapid, responsive styling without needing a complex build step.
- **JavaScript**: Handles form interaction (password toggle, submission logic).
- **FontAwesom**e: Provides the icons for social login and input fields.
- **Google Fonts**: Uses 'Poppins' for typography.

## 📂 Project Structure

The project is contained within a single file for simplicity, though it references external assets.

```
astronaut-login-page/
│
├── index.html                          # Contains HTML structure
├── README.md                           # Project documentation
└── assets/                             # Optional assets folder
    ├── css/                            # CSS configuration
    ├── js/                             # JS logic
    └── img/
        └── bg-astronaut-lp.jpg         # Background image for the left panel
```

## 🔧 How to Run

1. **Clone or Download** the repository to your local machine.
2. Ensure the image file ```bg-astronaut-lp.jpg``` is in the same directory as ```index.html```.
3. Open ```index.html``` in any modern web browser (Chrome, Firefox, Safari, Edge).

**Note**: Since Tailwind CSS is loaded via CDN, an active internet connection is required for the styles and icons to load correctly.

## 🎨 Customization

You can easily customize the theme colors by modifying the Tailwind configuration script tag of ```index.js```:

```
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: '#7E2553', // Change this hex code to your preferred color
                    // ...
                }
            }
        }
    }
}
```

## 📄 License

This project is open-source and available for personal or educational use.