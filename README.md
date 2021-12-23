**Project deploy** <br> https://gazuz33.github.io/Trenager//authorization/index.html
# Тренажер

**Разработать ряд классов и пользовательский интерфейс автоматизированной системы измерения физиологических показателей**

Для измерения физиологических показателей при медицинских обследованиях в процессе физической нагрузки различной интенсивности используются всевозможные датчики для:

- Измерения кровяного давления
- Измерения температуры кожи
- Измерения влажности кожи
- Измерения электрической проводимости кожи
- Измерения частоты пульса сердечного ритма

Цель автоматизации состоит в том, чтобы схематически отображать размещение датчиков на теле человека и их показатели в режиме реального времени.

Визуально изображения датчиков должны отличаться. Также необходимо отображать состояние датчиков: работает корректно, не исправен, выключен.

Система должна обеспечить реализацию следующих функций:

- Регистрация новых пациентов – ФИО, возраст, пол
- Выводить на экран список всех пациентов
- Регистрация нового обследования – дата регистрации, тип физической нагрузки (бег, ходьба, вело, силовые упражнения и т.д.), перечень измеряемых физиологических показателей
- Активизация сеанса обследования
- Установка датчиков в соответствии со списком измеряемых физиологических показателей в процессе данного обследования
- Активизация и предварительный опрос датчиков
- Старт сеанса обследования
- Вывод на экран в режиме реального времени измеряемых физиологических показателей, как показано на рисунке ниже. Вид отображения и размещения на Ваш выбор.


Пациент: **Прилука Анатолий Ефимович**
Возраст: 37
Пол: мужской
Дата обследования: 25.12.2009
Тип физической нагрузки: бег со скоростью 8 км/час в течение 15 минут

**Use case диаграмма проекта**
![use case](documentation/usecase.png)

**Activity диаграммы проекта**

![act1](documentation/admin_list.png)
![act2](documentation/admin_reg.png)
![act3](documentation/Doctor.png)
