/*var buildBtn = document.getElementById('build');
buildBtn.addEventListener("click", function (e) {
    var n = document.getElementById('colCount').value;
    var m = document.getElementById('rowCount').value;
    console.log(n, m)
    myTable(n, m)
}, false);
*/

//function myTable(n,m) {
// document.getElementById('wraper').style.display = 'block';
//   document.getElementById('countWraper').style.display = 'none';
for (var i = 0; i < 100; i++) {
    var row = document.querySelector("table").insertRow(-1);
    for (var j = 0; j < 100; j++) {
        row.insertCell(-1).innerHTML = i && j ? "<input class='cell' id='" + j + i + "'/>" : i || j;
    }
}

var inputs = [].slice.call(document.querySelectorAll("input[class='cell']"));
inputs.forEach(function (elm) {
    if (localStorage[elm.id] !== undefined) {
        elm.value = localStorage[elm.id];
    }
    elm.onblur = function (e) {
        localStorage[e.target.id] = e.target.value;
    };
    elm.addEventListener("dblclick", function (event) {
        event.target.style.position = 'relative';
        currentElm = event.target;
        modaTop = event.clientY - event.target.style.height + 'px';
        modaLeft = event.clientX - event.target.style.width + 'px';
        myFunction(currentElm, modaTop, modaLeft);
    });
});

function myFunction(currentElm, modaTop, left) {
    var modal = document.getElementById('myModal'),
        btnApply = document.getElementById('btnApply'),
        span = document.getElementsByClassName("close")[0],
    wraper = document.getElementById('table');
    modal.style.display = "block";
    modal.style.top = modaTop;
    modal.style.left = modaLeft;
    // console.log(modal.offsetLeft, ">",wraper.offsetWidth, "-" , modal.offsetWidth)
    if (modal.offsetLeft > wraper.offsetWidth - modal.offsetWidth) {
        modal.style.left = wraper.offsetWidth - modal.offsetWidth + 'px';
        console.log('bbb')
    }
    if (modal.offsetTop > wraper.offsetHeight - modal.offsetHeight) {
        modal.style.top = wraper.offsetHeight - modal.offsetHeight + 'px';
    }
    btnApply.onclick = function () {
        modal.style.display = "none";
        currentElm.style.color = document.getElementById('color').value;
        currentElm.style.fontSize = document.getElementById('fSize').value + 'px';
        currentElm.parentNode.style.background = document.getElementById('bgColor').value;
        currentElm.style.background = document.getElementById('bgColor').value;
    }

    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}