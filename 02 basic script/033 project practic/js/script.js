/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        promoGenre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list');

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    deleteAdv(adv);


    const makeChanges = () => {
        promoGenre.textContent = 'драма';

        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };
    makeChanges();


    const sortArr = (arr) => {
        arr.sort();
    };


    function createMoviesList(films, parent) {
        parent.innerHTML = '';

        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} - ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMoviesList(films, parent);
            });
        });
    }
    createMoviesList(movieDB.movies, movieList);


    // practic 33
    const addForm = document.querySelector('form.add'),
        input = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = input.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substr(0, 22)}...`;
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMoviesList(movieDB.movies, movieList);
        }

        if (favorite) {
            console.log("Добавляем любимый фильм");
        }


        e.target.reset();


        // if (input.value.length > 5) {
        //     const inputFilm = input.value.substr(0, 22) + '...';
        //     movieDB.movies.push(inputFilm);
        // } else {
        //     movieDB.movies.push(input.value);
        // }

        // if (checkbox.checked == true) {
        //     console.log("Добавляем любимый фильм");
        // }
        // const inputFilm = input.value.substr(0, 22) + '...';
        // movieDB.movies.push(inputFilm);
    });






});