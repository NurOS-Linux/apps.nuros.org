# apps.nuros.org

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[English](./README.md) | [Қазақша](./README.kk.md)

Этот репозиторий содержит исходный код для сайта [apps.nuros.org](https://apps.nuros.org), коллекции веб-приложений.

## Начало работы

Выполните следующие шаги, чтобы запустить проект на вашей локальной машине.

1.  **Клонируйте репозиторий:**
    ```bash
    git clone https://github.com/nuros/apps.nuros.org.git
    cd apps.nuros.org
    ```

2.  **Установите зависимости:**
    ```bash
    npm install
    ```

3.  **Запустите сервер для разработки:**
    ```bash
    npm run dev
    ```

Откройте [http://localhost:3000](http://localhost:3000) в вашем браузере, чтобы увидеть результат.

## Стек технологий

Этот проект разработан с использованием современного стека веб-разработки.

*   **Фреймворк:** [Next.js](https://nextjs.org/) - Фреймворк React для продакшена.
*   **Язык:** [TypeScript](https://www.typescriptlang.org/) - JavaScript с синтаксисом для типов.
*   **UI:** [React](https://reactjs.org/) - Библиотека JavaScript для создания пользовательских интерфейсов.
*   **Стилизация:** [Tailwind CSS](https://tailwindcss.com/) - CSS-фреймворк, ориентированный на утилиты, для быстрого создания пользовательских дизайнов.
*   **i18n:** [next-intl](https://next-intl-docs.vercel.app/) - Библиотека интернационализации для Next.js.

## Внесение вклада

Мы приветствуем ваш вклад! Если вы хотите внести свой вклад, пожалуйста, следуйте этим шагам:

1.  Форкните репозиторий.
2.  Создайте новую ветку для вашей фичи или исправления ошибки (`git checkout -b feature/your-feature-name`).
3.  Внесите свои изменения.
4.  Закоммитьте свои изменения (`git commit -m 'feat: Добавлена новая функция'`).
5.  Отправьте изменения в свою ветку (`git push origin feature/your-feature-name`).
6.  Откройте Pull Request в ветку `main` этого репозитория.

Пожалуйста, убедитесь, что ваш код соответствует стандартам кодирования проекта и включает соответствующие тесты.

## Развертывание

Приложение можно легко развернуть на различных платформах.

Для сборки проекта для продакшена:

```bash
npm run build
```

Затем вы можете запустить продакшен-сборку:

```bash
npm run start
```

Для развертывания на конкретной платформе обратитесь к документации [Vercel](https://vercel.com/docs), [Netlify](https://docs.netlify.com/) или других провайдеров хостинга.

## Лицензия

Этот проект лицензирован по лицензии AGPL 3.0 - подробности см. в файле [LICENSE](LICENSE).
