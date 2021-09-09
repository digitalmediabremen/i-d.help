// i-d.help configuration

// static labels are filtered globally and selected during inital page load
export const STATIC_LABELS = ["First semester aid", "Corona Info"];

// manual exclusion of labels.
// if you want to exclude labels automaticly,
// let them start with a underscore '_'
export const EXCLUDED_LABELS = [];

export const API_BASE_URL = "https://api.github.com/repos/digitalmediabremen/i-d.help/";
// the oauth access token of a github user.
// so posts from the frontend appear to be made by this user
export const OAUTH_TOKEN = "ghp_vUZk36uyHLDHBD" + "" + "SqVdBIpG8eqCT3QZ0dyTnL";