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

//
document.getElementById("id10Cards").innerHTML =
`&lt;div class=&quot;<span style="color:red">card-group</span>&quot; style=&quot;margin: 9px 27px&quot;&gt;
    &lt;div class=&quot;card&quot;&gt;
        &lt;img class=&quot;<span style="color:red">card-img-top</span>&quot; src=&quot;assets/img/a2Background.svg&quot; alt=&quot;&quot;&gt;
        &lt;div class=&quot;<span style="color:red">card-body</span>&quot; &gt;     
            &lt;h2 class=&quot;<span style="color:red">card-title</span>&quot;&gt;Title&lt;/h2&gt;
            &lt;p class=&quot;<span style="color:red">card-subtitle</span>&quot;&gt;Subtitle&lt;/p&gt;
            &lt;div class=&quot;<span style="color:red">card-text</span>&quot;&gt;Text-Content&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class=&quot;card&quot;&gt;
        &lt;div class=&quot;card-body&quot; &gt;     
            &lt;h2 class=&quot;card-title&quot;&gt;Title&lt;/h2&gt;
            &lt;p class=&quot;card-subtitle&quot;&gt;Subtitle&lt;/p&gt;
            &lt;div class=&quot;card-text&quot;&gt;Text-Content&lt;/div&gt;
        &lt;/div&gt;
        &lt;img class=&quot;<span style="color:red">card-img-bottom</span>&quot; src=&quot;assets/img/a2Background.svg&quot; alt=&quot;&quot;&gt;
    &lt;/div&gt;
    
    &lt;div class=&quot;card&quot;&gt;
        &lt;img class=&quot;card-img-top&quot; src=&quot;assets/img/a2Background.svg&quot; alt=&quot;&quot;&gt;
        &lt;div class=&quot;card-body <span style="color:red">card-img-overlay</span>&quot; &gt;     
            &lt;h2 class=&quot;card-title&quot;&gt;Title&lt;/h2&gt;
            &lt;p class=&quot;card-subtitle&quot;&gt;Subtitle&lt;/p&gt;
            &lt;div class=&quot;card-text&quot;&gt;Text-Content&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    
    &lt;div class=&quot;card&quot;&gt;
        &lt;h2 class=&quot;<span style="color:red">card-header</span>&quot;&gt;Header&lt;/h2&gt;
        &lt;div class=&quot;card-body&quot; &gt;     
            &lt;h3 class=&quot;card-title&quot;&gt;Title&lt;/h3&gt;
            &lt;p class=&quot;card-subtitle&quot;&gt;Subtitle&lt;/p&gt;
            &lt;div class=&quot;card-text&quot;&gt;Text-Content&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;<span style="color:red">card-footer</span>&quot;&gt;Footer&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;`;

//
document.getElementById("id11Modals").innerHTML =
`&lt;div class=&quot;container-fluid&quot;&gt;
    &lt;button class=&quot;<span style="color:red">btn btn-primary</span>&quot; <span style="color:red">data-bs-toggle=&quot;modal&quot; data-bs-target=&quot;#modal1&quot;</span>&gt;
        Open
    &lt;/button&gt;

    &lt;div class=&quot;<span style="color:red">modal modal-md fade</span>&quot; id=&quot;<span style="color:red">modal1</span>&quot;&gt;
        &lt;div class=&quot;<span style="color:red">modal-dialog modal-dialog-scrollable modal-fullscreen-md-down</span>&quot;&gt;
            &lt;div class=&quot;<span style="color:red">modal-content</span>&quot;&gt;
                &lt;div class=&quot;<span style="color:red">modal-header</span>&quot;&gt;
                    &lt;h2&gt;Header&lt;/h2&gt;
                    &lt;button class=&quot;<span style="color:red">btn-close</span>&quot; <span style="color:red">data-bs-dismiss=&quot;modal&quot;</span>&gt;&lt;/button&gt;
                &lt;/div&gt;
                &lt;div class=&quot;<span style="color:red">modal-body</span>&quot;&gt;Body&lt;/div&gt;
                &lt;div class=&quot;<span style="color:red">modal-footer</span>&quot;&gt;
                    &lt;button class=&quot;<span style="color:red">btn btn-primary</span>&quot; <span style="color:red">data-bs-dismiss=&quot;modal&quot;</span>&gt;Close&lt;/button&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;`;

//
document.getElementById("id12Nav").innerHTML =
`&lt;div &gt;
    &lt;nav class=&quot;<span style="color:red">navbar navbar-expand-sm navbar-dark bg-dark</span>&quot;&gt;
        &lt;div class=&quot;container&quot;&gt;
            &lt;a href=&quot;&quot; class=&quot;<span style="color:red">navbar-brand</span>&quot;&gt;Brand&lt;/a&gt;

            &lt;button class=&quot;<span style="color:red">navbar-toggler</span>&quot; <span style="color:red">data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#a1navItems&quot;
                aria-controls=&quot;nav&quot; aria-label=&quot;Expand navigation&quot;</span>&gt;
                &lt;span class=&quot;<span style="color:red">navbar-toggler-icon</span>&quot;&gt;&lt;/span&gt;
            &lt;/button&gt;
            &lt;div class=&quot;<span style="color:red">collapse navbar-collapse</span>&quot; id=&quot;a1navItems&quot;&gt;
                &lt;ul class=&quot;navbar-nav&quot;&gt;
                    &lt;li class=&quot;<span style="color:red">nav-item</span>&quot;&gt;&lt;a href=&quot;#&quot; class=&quot;<span style="color:red">nav-link active</span>&quot;&gt;Section active&lt;/a&gt;&lt;/li&gt;
                    &lt;li class=&quot;nav-item&quot;&gt;&lt;a href=&quot;#&quot; class=&quot;<span style="color:red">nav-link</span>&quot;&gt;Section 2&lt;/a&gt;&lt;/li&gt;
                    &lt;li class=&quot;nav-item&quot;&gt;&lt;a href=&quot;#&quot; class=&quot;nav-link&quot;&gt;Section 3&lt;/a&gt;&lt;/li&gt;
                    &lt;li class=&quot;nav-item&quot;&gt;&lt;a href=&quot;#&quot; class=&quot;<span style="color:red">nav-link disabled</span>&quot;&gt;Section disabled&lt;/a&gt;&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/nav&gt;
    &lt;div class=&quot;container&quot;&gt;
        Text
    &lt;/div&gt;
&lt;/div&gt;`;

//
document.getElementById("id14StackUtilities").innerHTML =
`&lt;div&gt;
    &lt;div class=&quot;<span style="color:red">vstack gap-3</span>&quot; style=&quot;margin: 9px;&quot;&gt;
        &lt;div class=&quot;box&quot; style=&quot;height: 10vh; width: 100%;&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;box&quot; style=&quot;height: 10vh; width: 100%;&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;<span style="color:red">hstack gap-3</span>&quot; style=&quot;margin: 9px;&quot;&gt;
        &lt;div class=&quot;box&quot; style=&quot;height: 10vh; width: 100%;&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;box&quot; style=&quot;height: 10vh; width: 100%;&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;box&quot; style=&quot;height: 10vh; width: 100%;&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;`;

//
document.getElementById("id15BorderUtilities").innerHTML =
`
&lt;div class=&quot;row row-cols-6 gy-2 gx-2&quot; style=&quot;margin:0&quot;&gt;
    &lt;div class=&quot;col&quot;&gt;
        &lt;div class=&quot;<span style="color:red">border border-primary border-3 rounded-3</span>&quot;&gt;Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Placeat.&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;col&quot;&gt;
        &lt;div class=&quot;border border-primary border-3 <span style="color:red">rounded-pill</span>&quot;&gt;Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Cupiditate.&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;col&quot;&gt;
        &lt;div class=&quot;col border border-primary border-3 <span style="color:red">rounded-circle</span>&quot;&gt;Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Tempora!&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;col&quot;&gt;
        &lt;div class=&quot;col border border-primary border-3 <span style="color:red">rounded-bottom</span>&quot;&gt;Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Tempora!&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;col&quot;&gt;
        &lt;div class=&quot;col <span style="color:red">border-top</span> border-primary border-3&quot;&gt;Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Tempora!&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;col&quot;&gt;
        &lt;div class=&quot;col <span style="color:red">border-bottom</span> border-primary border-3&quot;&gt;Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Tempora!&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
`;