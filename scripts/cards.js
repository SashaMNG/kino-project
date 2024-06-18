// массив данных карточек


const initialCards = [
    {
        name: "Хороший год",
        link: "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/26a099c6-f326-45ce-9e57-1dfa61937009/300x450",
        info: {
            year: "2007",
            type: "фильм",
            genre: "драма, мелодрама, комедия",
        }
    },
    {
        name: "Сибирский цирюльник",
        link: "https://avatars.mds.yandex.net/get-kinopoisk-image/4486454/6e2adc7b-6270-4f67-9a96-660f00dd8d37/300x450",
        info: {
            year: "1998",
            type: "фильм",
            genre: "драма, мелодрама, комедия, история",
        }
    },
    {
        name: "Дьявол носит Prada",
        link: "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/39a5e5e5-fea5-4c18-964e-40c4dfa7c995/300x450",
        info: {
            year: "2006",
            type: "фильм",
            genre: "драма, комедия",
        }
    },
    {
        name: "Реальная любовь",
        link: "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/6efae789-2a6f-4d0a-935c-ea4bf30585df/300x450",
        info: {
            year: "2003",
            type: "фильм",
            genre: "мелодрама, комедия, драма",
        }
    },
    {
        name: "Зеленая миля",
        link: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/300x450",
        info: {
            year: "1999",
            type: "фильм",
            genre: "драма, фэнтези, криминал",
        }
    },
    {
        name: "Служебный роман",
        link: "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/fd4e75bb-a6fe-46ef-86cd-0f470334fcbd/300x450",
        info: {
            year: "1977",
            type: "фильм",
            genre: "мелодрама, комедия, драма",
        }
    },
    {
        name: "Аббатство Даунтон",
        link: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/cf350a22-5464-40ed-9530-e06b4f99dd27/300x450",
        info: {
            year: "2010-2015",
            type: "сериал",
            genre: "драма, мелодрама, история",
        }
    },
    {
        name: "Граф Монте-Кристо",
        link: "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/527bff69-dc58-45b1-bb5a-fd63ba387816/300x450",
        info: {
            year: "1998",
            type: "сериал",
            genre: "триллер, мелодрама, приключения, история",
        }
    },
    {
        name: "Лучшее предложение",
        link: "https://avatars.mds.yandex.net/get-kinopoisk-image/4716873/b90b179d-b5f7-454c-80b3-60884a5ecd5f/300x450",
        info: {
            year: "2012",
            type: "фильм",
            genre: "триллер, драма, криминал",
        }
    },
    {
        name: "Тайна Коко",
        link: "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/6e11a16e-c9e7-491f-9162-01098a7d8dd9/300x450",
        info: {
            year: "2017",
            type: "мультфильм",
            genre: "приключения, семейный, музыка",
        }
    },
    {
        name: "Жизнь и приключения Мишки Япончика",
        link: "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/62bf9db8-a343-437c-aa63-bc40f3516cd0/300x450",
        info: {
            year: "2011",
            type: "сериал",
            genre: "криминал, драма, мелодрама",
        }
    },
    {
        name: "Игра престолов",
        link: "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/dd78edfd-6a1f-486c-9a86-6acbca940418/300x450",
        info: {
            year: "2011-2019",
            type: "сериал",
            genre: "фэнтези, драма, боевик, мелодрама",
        }
    },
    {
        name: "Теория большого взрыва",
        link: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/5067dbe3-760d-45b6-826d-f22a283d408b/300x450",
        info: {
            year: "2007-2019",
            type: "сериал",
            genre: "комедия, мелодрама",
        }
    },
    {
        name: "Острые козырьки",
        link: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/e1ec4209-569e-4745-a324-b180af8097ef/300x450",
        info: {
            year: "2013-2022",
            type: "сериал",
            genre: "драма, криминал",
        }
    },
    {
        name: "Белый воротничок",
        link: "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/c339c87f-12fd-4128-83fb-1c65b79621f2/300x450",
        info: {
            year: "2009-2014",
            type: "сериал",
            genre: "детектив, криминал, драма, комедия",
        }
    },
    {
        name: "Форс-мажоры",
        link: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/dbf10d8c-83cf-4822-b99f-23a9704c11b3/300x450",
        info: {
            year: "2011-2019",
            type: "сериал",
            genre: "драма, комедия",
        }
    },
    {
        name: "Ограбление по-итальянски",
        link: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/7673fc11-be11-45f7-a997-f757a04b0cd9/300x450",
        info: {
            year: "2003",
            type: "фильм",
            genre: "боевик, триллер, криминал",
        }
    },
    {
        name: "Практикантка",
        link: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/a9f2a9b3-bd59-450e-9cca-0315049af673/300x450",
        info: {
            year: "2016",
            type: "сериал",
            genre: "детектив, комедия, криминал",
        }
    },
]