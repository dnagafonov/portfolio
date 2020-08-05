import Autoservice from '@assets/images/autoservice.png';
import ReactSVG from '@assets/images/react.svg';
import ReduxSVG from '@assets/images/redux.svg';
import NodeSVG from '@assets/images/node.svg';
import FigmaSVG from '@assets/images/figma.svg';
import Telegram from '@assets/images/telegram.svg';
import Instagram from '@assets/images/instagram.svg';
import LinkedIn from '@assets/images/linkedIn.svg';
import Github from '@assets/images/github.svg';

export const languages = {
    ENG: {
        header: {
            links: [
                { name: "Home", to: "me" },
                { name: "About me", to: "about-me" },
                { name: "Skills", to: "skills" },
                { name: "Portfolio", to: "portfolio" },
                { name: "Contacts", to: "contacts" }
            ]
        },
        me: {
            name: "Denis Agafonov",
            info: ["Junior Front-end developer", "18 years old, Minsk"]
        },
        aboutMe: {
            header: "About me",
            notes: [
                "Hello, I'm Denis – JavaScript developer from Minsk. I'm interested in developing and everything connected with it.",
                "Ready to implement excellent projects with wonderful people."
            ]
        },
        skills: {
            header: "Skills",
            technologies: [
                { name: "React", path: ReactSVG, stars: 5 },
                { name: "Redux", path: ReduxSVG, stars: 5 },
                { name: "NodeJS", path: NodeSVG, stars: 3 },
                { name: "Figma", path: FigmaSVG, stars: 3 },
            ]
        },
        portfolio: {
            header: "Portfolio",
            projects: [
                { name: "Upgrade PC", path: "https://i.ibb.co/n8tQfF8/img.png", link: "https://github.com/dnagafonov/upgrade-pc"},
                { name: "Online autoservice store", path: Autoservice, link:"https://github.com/dnagafonov/coursework-kpiyap" }
            ]
        },
        contacts: {
            header: "Contacts",
            note: "Want to know more or just chat? You are welcome!",
            button: {
                href: "https://t.me/dnagafonov",
                msg: "Send message"
            },
            noteBack: "Visit my profiles on Github, Telegram, LinkedIn, Instagram",
            links: [
                { img: Github, link: "https://github.com/dnagafonov" },
                { img: Telegram, link: "https://t.me/dnagafonov" },
                { img: Instagram, link: "https://www.instagram.com/dnagafonov" },
                { img: LinkedIn, link: "https://www.linkedin.com/in/denis-agafonov-2213061a2/" },
            ]
        }
    },
    RU: {
        header: {
            links: [
                { name: "Главная", to: "me" },
                { name: "Обо мне", to: "about-me" },
                { name: "Навыки", to: "skills" },
                { name: "Портфолио", to: "portfolio" },
                { name: "Контакты", to: "contacts" }
            ]
        },
        me: {
            name: "Денис Агафонов",
            info: ["Junior Front-end разработчик", "18 лет, Минск"]
        },
        aboutMe: {
            header: "Обо мне",
            notes: [
                "Привет, меня зовут Денис, я – JavaScript разработчик из Минска. Я интересуюсь всем, что связано с программированием.",
                "Готов воплощать потрясающие проекты с замечательными людьми!"
            ]
        },
        skills: {
            header: "Навыки",
            technologies: [
                { name: "React", path: ReactSVG, stars: 5 },
                { name: "Redux", path: ReduxSVG, stars: 5 },
                { name: "NodeJS", path: NodeSVG, stars: 3 },
                { name: "Figma", path: FigmaSVG, stars: 3 },
            ]
        },
        portfolio: {
            header: "Портфолио",
            projects: [
                { name: "Upgrade PC", path: "https://i.ibb.co/n8tQfF8/img.png", link: "https://github.com/dnagafonov/upgrade-pc"},
                { name: "Онлайн магазин для заказа автозапчастей или автомобильных услуг", path: Autoservice, link:"https://github.com/dnagafonov/coursework-kpiyap" }
            ]
        },
        contacts: {
            header: "Контакты",
            note: "Хочешь узнать больше, или просто пообщаться? Тогда тебе сюда!",
            button: {
                href: "https://t.me/dnagafonov",
                msg: "Отправить сообщение"
            },
            noteBack: "Посети мои аккаунты на Github, Telegram, LinkedIn, Instagram",
            links: [
                { img: Github, link: "https://github.com/dnagafonov" },
                { img: Telegram, link: "https://t.me/dnagafonov" },
                { img: Instagram, link: "https://www.instagram.com/dnagafonov" },
                { img: LinkedIn, link: "https://www.linkedin.com/in/denis-agafonov-2213061a2/" },
            ]
        }
    },
    active: "ENG"
};