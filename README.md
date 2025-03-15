# Background Circles Component

![Background Circles Preview](/public/image.png)

A beautiful, responsive animated background circles component with multiple color variants for modern web applications. This component is part of the Kokonut UI library.

## Features

- ✨ Animated glowing circles with smooth transitions
- 🎨 Multiple color variants (8 different color schemes)
- 📱 Fully responsive design for all device sizes
- 🌓 Optimized for performance
- 🧩 Easy to integrate into any Next.js or React project

## Demo

Check out the live demo: [Background Circles Demo](https://background-circles-demo.vercel.app)

## Installation

```bash
# Using npm
npm install @kokonut-ui/background-circles

# Using yarn
yarn add @kokonut-ui/background-circles

# Using pnpm
pnpm add @kokonut-ui/background-circles
```

## Usage

```jsx
import { BackgroundCircles } from '@kokonut-ui/background-circles';

export default function HomePage() {
  return (
    <BackgroundCircles 
      title="Your Title Here" 
      description="Your description here"
      variant="primary" // Choose from: primary, secondary, tertiary, quaternary, quinary, senary, septenary, octonary
    />
  );
}
```

## Available Variants

The component comes with 8 different color variants:

- `primary`: Emerald/Cyan gradient
- `secondary`: Violet/Fuchsia gradient
- `tertiary`: Orange/Yellow gradient
- `quaternary`: Purple/Pink gradient
- `quinary`: Red/Rose gradient
- `senary`: Blue/Sky gradient
- `septenary`: Gray gradient
- `octonary`: Red/Rose gradient (default)

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "Background Circles" | The main title displayed in the center |
| `description` | string | "Optional Description" | The description text displayed below the title |
| `className` | string | undefined | Additional CSS classes to apply to the container |
| `variant` | string | "octonary" | The color variant to use |

## Development

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/abhishekabysm/glowing-effect.git
cd glowing-effect

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)

## Authors

- Abhishek - [@abhishekabysm](https://github.com/abhishekabysm) (Instagram: [@abhishekabysm](https://instagram.com/abhishekabysm))
- Coding Tutor - [@coding.tutor](https://github.com/aditya-obj) (Instagram: [@coding.tutor](https://instagram.com/coding.tutor))

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Project Link

[https://github.com/abhishekabysm/glowing-effect](https://github.com/abhishekabysm/glowing-effect)

---

Part of [Kokonut UI](https://kokonut-ui.com) - Beautiful UI components for modern web applications.
