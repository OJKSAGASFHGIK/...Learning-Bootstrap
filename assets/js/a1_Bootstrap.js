document.getElementById("id1TextColumnsHTML").textContent =
`<div class="row">
    <div class="col-2"><div>a</div></div>
    <div class="col-4"><div>a</div></div>
    <div class="col-6"><div>a</div></div>
    <div class="col"><div></div></div>
</div>`;

document.getElementById("id1TextColumnsCSS").textContent =
`.section2 .row { margin: 0; }`;

//
document.getElementById("id2BreakpointsHTML").textContent =
`<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-2">
    <div class="col">
        <div></div>
    </div>
    <div class="col">
        <div></div>
    </div>
    <div class="col">
        <div></div>
    </div>
    <div class="col">
        <div></div>
    </div>
</div>`;

document.getElementById("id2BreakpointsCSS").textContent =
`.section2 .row div div { margin: 1vh 0; }`;

//
document.getElementById("id4TableHTML").textContent =
`-Stylish table codes:
table 
table table-dark
table table-hover
table table-bordered
table table-sm
table table-group-divider

-Others:
table-active = Just for leave more visible. Ex: <thead class='table-active'>
table-responsive = For add a side scroll bar (you can use table-responsive-lg if you want want stablish this condition for big windows)`;