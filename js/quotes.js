// 명언 모음
const quotes = [
    {
        quote : "나 요즘 배가 엄청나옴, 돼지야,,",
        author : "김덕하",
    },
    {
        quote : "코로나만 풀리면 24시간 카페공부다!",
        author : "권지훈",
    },
    {
        quote : "예? 예~? 예ㅔ에에에?",
        author : "이강민",
    },
    {
        quote : "미래에 네이버웹툰 작가가 될거야!! - 잠수,,",
        author : "김지섭",
    },
    {
        quote : "MBTI 머에요~~?",
        author : "권지훈",
    },
    {
        quote : "원랜디 하러가셔야죠~?",
        author : "조성우",
    },
    {
        quote : "헐, 니들 언제옴? 서비스줄게ㅎㅎ",
        author : "이민호",
    },
    {
        quote : "내얼굴은 조인성이야,,,인정~?",
        author : "김덕하",
    },
    {
        quote : "포켓몬고의 최고봉이 될거야! 나는 신암동 포켓마스터 이슬!",
        author : "조성우",
    },
    {
        quote : "머리가 더 길면 저는 예수가 될거에요,,",
        author : "이정우",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote =  quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;