# React Todo List

Учебный проект — приложение для управления задачами (todo list) на React.

## Описание проекта

Это простой React-компонент, который позволяет пользователю добавлять новые задачи, просматривать список текущих задач и удалять их. Проект предназначен для практики работы с React, состоянием компонентов и обработкой событий.

## Основные функции

- Добавление новых задач в список
- Просмотр всех текущих задач
- Удаление выбранных задач
- Простая и понятная реализация

## Установка и запуск

1. Создайте новый проект React или используйте существующий:
   
   ```bash
   npx create-react-app my-todo-app
   cd my-todo-app
   ```

2. Создайте файл `TodoApp.jsx` в папке `src/` и вставьте туда код компонента.

3. Импортируйте компонент `TodoApp` в файл `src/App.js` и используйте его:

   ```jsx
   import React from 'react';
   import TodoApp from './TodoApp';

   function App() {
     return (
       <div className="App">
         <TodoApp />
       </div>
     );
   }

   export default App;
   ```

4. Запустите проект командой:

   ```bash
   npm start
   ```

Проект откроется в браузере по адресу `http://localhost:3000`, где вы сможете взаимодействовать с todo-листом.

## Структура проекта

```
MyReactTodo/
│
├── public/
├── src/
│   ├── App.js
│   ├── TodoApp.jsx
│   └── index.js
├── package.json
└── README.md
```


- **Язык программирования:** JavaScript (ES6+)
- **Фреймворк:** React
- **Инструменты:** Node.js, npm
- **ОС:** Windows, Linux, macOS

## Авторы и участники

Разработка и поддержка — ALexandre Gomaskov

## Контактная информация

- GitHub: https://github.com/ваш_никнейм
- Email: alejandrogomas535@gmail.com
- Телефон: +7-928-900-55-56
