
```markdown
# EleKars - EV Car Booking

## Overview

EleKars is a single-page Next.js website designed for booking electric vehicle (EV) rides. The project utilizes Tailwind CSS for styling and includes a user-friendly form for booking rides. The site features a dynamic header and USP's to enhance user experience.

## Features

- Responsive design with Tailwind CSS
- User-friendly enquiry form for booking EV rides
- Clear presentation of unique selling points (USP) and booking form
- SEO optimized for better search engine ranking

## Prerequisites

- Node.js (version 14 or later)
- npm or yarn
- Next.js (version 13 or later)
- Tailwind CSS

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/elekars.git
cd elekars
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Tailwind CSS

Tailwind CSS is already set up in this project. You can customize the styling by modifying the `tailwind.config.js` file and updating the `globals.css` file as needed.

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Navigate to `http://localhost:3000` in your browser to view the application.

## Usage

1. **Header**: Displays images on the left and right with centered text "EleKars". Includes a scrolling text banner for promotional messages.
2. **Enquiry Form**: Fill out the form with the following details:
   - Name
   - Mobile Number
   - Date & Time of Journey
   - Location From
   - Location To
   - Trip Type (One Way or Round Trip)
3. **Submission**: Form data is managed using React state and logged to the console upon submission.

## Configuration

You can customize the project by modifying the following files:

- `src/components/Header.js`: Contains the header component with images and text.
- `src/components/EnquiryForm.js`: Contains the enquiry form and its associated logic.
- `src/styles/globals.css`: Contains global styles and Tailwind CSS configurations.

## Deployment

To deploy the application, you can build the project and deploy it to your preferred hosting provider:

```bash
npm run build
# or
yarn build
```

Upload the generated `/.next` folder and the `public` folder to your hosting provider.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
```

### Customization
- **Replace** `https://github.com/your-username/elekars.git` with the actual URL of your GitHub repository.

This README provides a clear overview of your project, its features, and instructions for getting started. You can further customize it based on any additional features or configuration details you may have.
