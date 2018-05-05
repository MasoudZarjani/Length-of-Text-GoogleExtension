document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', main);
});

function main() {
    var text = document.getElementById("tt1").value;
    var div = document.getElementById('show');
    div.innerHTML = text.length;
}