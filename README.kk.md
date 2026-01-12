# apps.nuros.org

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[English](./README.md) | [Русский](./README.ru.md)

Бұл репозиторийде [apps.nuros.org](https://apps.nuros.org) веб-қосымшалар жинағы сайтының бастапқы коды бар.

## Жұмысты бастау

Жобаны жергілікті машинаңызда іске қосу үшін осы қадамдарды орындаңыз.

1.  **Репозиторийді клондаңыз:**
    ```bash
    git clone https://github.com/nuros/apps.nuros.org.git
    cd apps.nuros.org
    ```

2.  **Тәуелділіктерді орнатыңыз:**
    ```bash
    npm install
    ```

3.  **Даму серверін іске қосыңыз:**
    ```bash
    npm run dev
    ```

Нәтижені көру үшін браузеріңізде [http://localhost:3000](http://localhost:3000) ашыңыз.

## Технологиялар стегі

Бұл жоба заманауи веб-әзірлеу стегін қолдана отырып жасалған.

*   **Фреймворк:** [Next.js](https://nextjs.org/) - Өндіріске арналған React фреймворкі.
*   **Тіл:** [TypeScript](https://www.typescriptlang.org/) - Типтерге арналған синтаксисі бар JavaScript.
*   **UI:** [React](https://reactjs.org/) - Пайдаланушы интерфейстерін жасауға арналған JavaScript кітапханасы.
*   **Стильдеу:** [Tailwind CSS](https://tailwindcss.com/) - Арнайы дизайндарды жылдам жасауға арналған утилита-бірінші CSS фреймворкі.
*   **i18n:** [next-intl](https://next-intl-docs.vercel.app/) - Next.js үшін интернационализация кітапханасы.

## Үлес қосу

Біз үлес қосуды құптаймыз! Егер сіз үлес қосқыңыз келсе, мына қадамдарды орындаңыз:

1.  Репозиторийді форк жасаңыз.
2.  Жаңа мүмкіндік немесе қателіктерді жөндеу үшін жаңа тармақ жасаңыз (`git checkout -b feature/your-feature-name`).
3.  Өзгерістеріңізді енгізіңіз.
4.  Өзгерістеріңізді тіркеңіз (`git commit -m 'feat: Жаңа мүмкіндік қосылды'`).
5.  Өз тармағыңызға жіберіңіз (`git push origin feature/your-feature-name`).
6.  Осы репозиторийдің `main` тармағына Pull Request ашыңыз.

Кодыңыздың жобаның кодтау стандарттарына сәйкес келетініне және тиісті тесттерді қамтитынына көз жеткізіңіз.

## Орналастыру

Қосымшаны әртүрлі платформаларға оңай орналастыруға болады.

Жобаны өндіріске шығару үшін:

```bash
npm run build
```

Содан кейін өндірістік нұсқаны іске қоса аласыз:

```bash
npm run start
```

Платформаға тән орналастыру үшін [Vercel](https://vercel.com/docs), [Netlify](https://docs.netlify.com/) немесе басқа хостинг провайдерлерінің құжаттамасын қараңыз.

## Лицензия

Бұл жоба AGPL 3.0 лицензиясы бойынша лицензияланған - толық ақпаратты [LICENSE](LICENSE) файлынан қараңыз.
