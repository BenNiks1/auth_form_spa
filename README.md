# SPA Authorization form

## Frontend UI/UX

### Описание

SPA форма авторизации через почту и пароль с возможностью регистрации, восстановления пароля. В данном приложении так же присутствует возможность смены языка.

- [Внешний вид](#внешний-вид)
- [Сценарии](#сценарии)
- [Экраны](#экраны)
  - [Авторизация](#авторизация)
  - [Регистрация](#регистрация)
  - [Восстановление пароля](#восстановление-пароля)

---

### Внешний вид

Интерфейс выполнен в свободной манере на усмотрение frontend разработчика.

---

### Сценарии

Пользовательские сценарии:

1. Авторизация
   1. Форма запрашивает email и пароль у пользователя
   2. У пользователя есть возможность перейти в сценарии регистрации и восстановления пароля
   3. Пользователь нажимает на кнопку "Войти"
   4. Экран успешной авторизации
2. Регистрация
   1. Пользователь нажимает "Создать аккаунт"
   2. Форма запрашивает имя, почту, пароль, подтверждение пароля у пользователя
   3. Пользователь заполняет форму и нажимает кнопку "Подтвердить"
   4. Экран авторизации с нотификацией об успешной регистрации
3. Восстановление пароля
   1. Пользователь нажимает "Забыл пароль"
   2. Форма запрашивает почту у пользователя
   3. Пользователь заполняет форму и нажимает кнопку "Подтвердить"
   4. Экран авторизации с нотификацией о восстановлении пароля
4. Изменения языка
   1. Под формой всегда есть выпадающий список с возможностью изменить язык интерфейса. Доступные языки:
      - Русский
      - Английский
5. Темы
   1. Над формай находятся 2 функциональные кнопки для смены цветовой темы

---

### Экраны

### Авторизация

1. Первый экран с приветствием пользователя, полем для ввода почты и пароля, кнопкой "Войти".

   1. **Заголовок:** Добро пожаловать в Inc. SPA From
   2. **Заголовок второго уровня:** Авторизация
   3. **Текст под заголовком**: Введите почту и пароль для авторизации
   4. **Поле ввода почты** - Поле с типом "email" и текстом "Почта" в placeholder. При активации поля появляется лейбл на границе инпута с надписью "Почта".

      - В случае несоответствия почты, появляется ошибка "Вы ввели неверную почту или пароль, попробуйте еще раз.".

   5. **Поле ввода пароля** - Поле с типом "password" и текстом "Пароль" в placeholder. При активации поля появляется лейбл на границе инпута с надписью "Пароль". Внутри поля есть функциональная кнопка для отображения пароля.

      - В случае несоответствия пароля, появляется ошибка "Вы ввели неверную почту или пароль, попробуйте еще раз.".

   6. **Кнопка "Забыли пароль?"** - Сразу под полем ввода почты находится кнопка для перехода на экран восстановления пароля (см. пункт [Восстановление пароля](#восстановление-пароля)).
   7. **Кнопка "Войти** - Функциональная кнопка, по нажатию на которую происходит авторизация.

      - В случае пустых полей ввода, появляется ошибка "Вы ввели неверную почту или пароль, попробуйте еще раз.".

   8. **Кнопка "Создать аккаунт"** - Функциональная кнопка, по нажатию на которую происходитпереход на экран регистрации (см. пункт [Регистрация](#регистрация)).
   9. **Переход со страницы регистрации** - Появляется уведомление об успешной регистрации
   10. **Переход со страницы восстановления пароля** - Появляется уведомление об успешном восстановлении.

2. Второй экран с уведомлением об успешной авторизации
   1. **Заголовок:** Добро пожаловать в Inc. SPA From
   2. **Заголовок второго уровня:** Авторизация прошла успешно

### Регистрация

1. Экран регистрации включает в себя поля для ввода имени пользователя, почты, пароля, подтверждения пароля, кнопка регистрации

   1. **Заголовок:** Добро пожаловать в Inc. SPA From
   2. **Заголовок второго уровня:** Регистрация
   3. **Текст под заголовком**: Заполните форму для регистрации
   4. **Поле ввода ФИО** - Поле с типом "name" и текстом "ФИО" в placeholder. При активации поля появляется лейбл на границе инпута с надписью "ФИО".
   5. **Поле ввода почты** Поле с типом "email" и текстом "Почта" в placeholder. При активации поля появляется лейбл на границе инпута с надписью "Почта".
      - В случае некорректно введенной почты, появляется ошибка "Неправильный формат почты"
   6. **Поле ввода пароля** Поле с типом "password" и текстом "Пароль" в placeholder. При активации поля появляется лейбл на границе инпута с надписью "Пароль". Требования к паролю: символы верхнего и нижнего регистров, числа, минимум 8 символов.
      - В случае несоответствия требованиям проля, появляется ошибка "Некорректный пароль. Используйте заглавные буквы и цифры, минимум 8 символов"
   7. **Поле повторного ввода пароля** Поле с типом "password" и текстом "Повторите пароль" в placeholder. При активации поля появляется лейбл на границе инпута с надписью "Повторите пароль".
      - В случае несоответствия паролей, появляется ошибка с текстом "Пароль не совпадает"
   8. **Кнопка регистрации** По нажатию на кнопку происходит переход на экран авторизации (см. пункт [Авторизация - 1.9](#авторизация)
      - В случае пустых полей формы появляется ошибка "Обязательное поле"

### Восстановление пароля

1. Экран встановления пароля включает в себя поле для ввода почты и кнопку продолжить
   1. **Заголовок:** Восстановление пароля
   2. **Поле ввода почты** Поле с типом "email" и текстом "Почта" в placeholder. При активации поля появляется лейбл на границе инпута с надписью "Почта".
   3. **Кнопка восстановления** Кнопка с текстом "Далее". По нажатию на кнопку происходит переход на экран авторизации (см. пункт [Авторизация - 1.10](#авторизация))
