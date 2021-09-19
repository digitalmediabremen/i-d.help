import React from "react";

// i-d.help configuration

// static labels are filtered globally and selected during inital page load
export const STATIC_LABELS = ["Deutsch", "Englisch"];

// manual exclusion of labels.
// if you want to exclude labels automaticly,
// let them start with a underscore '_'
export const EXCLUDED_LABELS = [];

export const API_BASE_URL =
    "https://api.github.com/repos/digitalmediabremen/i-d.help/";
// the oauth access token of a github user.
// so posts from the frontend appear to be made by this user
export const OAUTH_TOKEN = "ghp_vUZk36uyHLDHBD" + "" + "SqVdBIpG8eqCT3QZ0dyTnL";

export const getCSSVariableOverwrites = () => {
    const RANDOM_COLORS = [
        ["255,0,255", "255,255,255"],
        ["204,204,255", "255,55,0"],
        ["255,255,153", "102,51,102"],
        ["255,165,0", "255,255,255"],
        ["106,90,205", "255,255,255"],
        ["240,240,255", "20,155,130"],
        ["20,155,130", "240,240,255"],
    ];
    const randomPick =
        RANDOM_COLORS[Math.floor(Math.random() * RANDOM_COLORS.length)];
    const [backgroundColor, foregroundColor] = randomPick;
    return {
        "--headline": foregroundColor,
        "--text": foregroundColor,
        "--textFilter": backgroundColor,
        "--filter": foregroundColor,
        "--background": backgroundColor,
    };
};

export const getIntroTextComponent = () => () => {
    return (
        <>
            Toll, ihr habt uns gefunden!
            <br />
            Hier könnt ihr Orientierung, Infos und Kontakte zu den Themen
            Integriertes Design, HfK und Bremen suchen und finden. <br />
        </>
    );
};

export const getHeaderTextComponent = () => () => {
    return (
        <>
            Willkommen im Integrierten Design, schön, dass ihr da seid! <br />
            Auf dieser Website findet ihr Informationen zur Orientierungswoche
            und zum Studium und Bremen und generell. Hier gibt’s Infoservice vom
            Feinsten: Wir, der Fachschaftsrat ID, sind für euch da und
            beantworten eure Fragen. Alle.
            <br />
            Fragt! Fragt! Fragt! Fragt! <br />
            Egal was!
        </>
    );
};
