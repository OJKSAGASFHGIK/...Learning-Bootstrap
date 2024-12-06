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


//
document.getElementById("id8Buttons").innerHTML =
`&lt;div&gt;
    &lt;button class=&quot;<span style="color: red;">btn btn-primary</span>&quot;&gt;Click&lt;/button&gt;
    &lt;button class=&quot;<span style="color: red;">btn btn-outline-primary</span>&quot;&gt;Click&lt;/button&gt;
    &lt;a href=&quot;#&quot; class=&quot;<span style="color: red;">btn btn-secondary</span>&quot;&gt;Link&lt;/a&gt;
&lt;/div&gt;

&lt;div class=&quot;<span style="color: red;">btn-group</span>&quot; style=&quot;margin-top:1vh&quot;&gt;
    &lt;button class=&quot;btn btn-outline-danger&quot; <span style="color: red;">data-bs-toggle=&quot;button&quot;</span>&gt;Click&lt;/button&gt;
    &lt;button class=&quot;btn btn-outline-danger&quot;&gt;Click&lt;/button&gt;
    &lt;button class=&quot;btn btn-outline-danger&quot;&gt;Click&lt;/button&gt;
&lt;/div&gt;

&lt;div class=&quot;<span style="color: red;">btn-group-vertical</span>&quot; style=&quot;margin-top:1vh&quot;&gt;
    &lt;button class=&quot;btn btn-outline-danger&quot; data-bs-toggle=&quot;button&quot;&gt;Click&lt;/button&gt;
    &lt;button class=&quot;btn btn-outline-danger&quot;&gt;Click&lt;/button&gt;
    &lt;button class=&quot;btn btn-outline-danger&quot;&gt;Click&lt;/button&gt;
&lt;/div&gt;`;

//
document.getElementById("id9Alerts").innerHTML =
`&lt;div class=&quot;<span style="color:red">alert alert-success alert-dismissible fade show</span>&quot; role=&quot;alert&quot;&gt;
    &lt;h3&gt;Alert&lt;/h3&gt;
    &lt;a href=&quot;#&quot; class=&quot;<span style="color:red">alert-link</span>&quot;&gt;Go here to find out more&lt;/a&gt;
    &lt;button class=&quot;<span style="color:red">btn-close</span>&quot; <span style="color:red">aria-label=&quot;close&quot; data-bs-dismiss=&quot;alert&quot;</span>&gt;&lt;/button&gt;
&lt;/div&gt;`;