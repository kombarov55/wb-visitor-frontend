const content = JSON.parse(window.localStorage.getItem("content"))

export default function() {
    return content;
}