import React from 'react'

export default function Navbar () {
    return (
        <div>
            <nav class="border fixed split-nav">
  <div class="nav-brand">
    <h4><a href="#">Kiswahili Ipsum</a></h4>
  </div>
  <div class="collapsible">
    <input id="collapsible2" type="checkbox" name="collapsible2" />
    <label for="collapsible2">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </label>
    <div class="collapsible-body">
      <ul class="inline">
        <li><a href="https://chriswesonga.herokuapp.com/">Portfolio</a></li>
        <li><a href="https://www.linkedin.com/in/christopher-s-wesonga-410b341a/">Linked In</a></li>
        <li><a href="https://github.com/ckomodo">Github</a></li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}
