// i-d.help configuration

// static labels are filtered globally and selected during inital page load
export const STATIC_LABELS = ["Bachelor", "Master"];

// manual exclusion of labels.
// if you want to exclude labels automaticly,
// let them start with a underscore '_'
export const EXCLUDED_LABELS = [];

export const API_BASE_URL = "https://api.github.com/repos/digitalmediabremen/i-d.help/";
// the oauth access token of a github user.
// so posts from the frontend appear to be made by this user
export const OAUTH_TOKEN = "ghp_vUZk36uyHLDHBD" + "" + "SqVdBIpG8eqCT3QZ0dyTnL";

export const getCSSVariableOverwrites = () => {
    return {
        "--headline": "0,  255, 255",
        "--text": "255,  255, 255",
        "--textFilter": "14, 140, 133",
        "--filter": "255,  255, 255",
        "--background": "0, 140, 0",
        "--font": "haptik, monospace",
    }   
}