# apps.nuros.org

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

This repository contains the source code for the [apps.nuros.org](https://apps.nuros.org) website, a collection of web applications.

[Русский](./README.ru.md) | [Қазақша](./README.kk.md)

---

## Getting Started

Follow these steps to get the project up and running on your local machine.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/nuros/apps.nuros.org.git
    cd apps.nuros.org
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

This project is built using a modern web development stack.

*   **Framework:** [Next.js](https://nextjs.org/) - A React framework for production.
*   **Language:** [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types.
*   **UI:** [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
*   **i18n:** [next-intl](https://next-intl-docs.vercel.app/) - An internationalization library for Next.js.

## Contributing

We welcome contributions! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'feat: Add some feature'`).
5.  Push to your branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request to the `main` branch of this repository.

Please ensure your code adheres to the project's coding standards and includes appropriate tests.

## Deployment

The application can be easily deployed to various platforms.

To build the project for production:

```bash
npm run build
```

You can then run the production build:

```bash
npm run start
```

For platform-specific deployment, refer to the documentation for [Vercel](https://vercel.com/docs), [Netlify](https://docs.netlify.com/), or other hosting providers.

## License

This project is licensed under the AGPL 3.0 License - see the [LICENSE](LICENSE) file for more details.