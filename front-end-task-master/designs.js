function makeGrid(height, width) {
    const table = document.getElementById("pixelCanvas");
    var grid = '';

    for (var i = 0; i < height; i++) {
        grid += '<tr class="row-' + i + '">';
        for (var j = 0; j < width; j++) {
            grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
        }
        grid += '</tr>';
    }
    table.innerHTML = grid;
    addClickEventToCells();
}
function addClickEventToCells() {
    const colorPicker = document.getElementById("colorPicker");
    const cells = document.getElementsByClassName('cell');
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function (event) {
            var clickedCell = event.target;
            clickedCell.style.backgroundColor = colorPicker.value;
        });
    }
}
function formSubmission() {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
}
document.getElementById('sizePicker').onsubmit = function () {
    formSubmission();
};
makeGrid(5, 5);