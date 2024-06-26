document.addEventListener("DOMContentLoaded", function() {
    const sidebarHTML = `
    <div class="sidebar">
        <h1><a href="index.html">Jake Wolfert</a></h1>
        <ul>
            <li><a href="arcteryxthetruetest.html">Arcteryx The True Test</a></li>
            <li><a href="bestthing.html">Best Thing</a></li>
            <li><a href="bigwidebody.html">Big Wide Body</a></li>
            <li><a href="boilerroomxvalentino.html">Boiler Room x Valentino</a></li>
            <li><a href="buzzkillbummer.html">Buzzkill Bummer</a></li>
            <li><a href="caretoo.html">Care Too</a></li>
            <li><a href="douknowhatimean.html">Do U Know What I Mean</a></li>
            <li><a href="fetish.html">Fetish</a></li>
            <li><a href="gang.html">Gang</a></li>
            <li><a href="gladlyfading.html">Gladly Fading</a></li>
            <li><a href="kingofthehillpartii.html">King of The Hill Part II</a></li>
            <li><a href="lonely.html">Lonely</a></li>
            <li><a href="mirage.html">Mirage</a></li>
            <li><a href="newgirl.html">New Girl</a></li>
            <li><a href="nohalo.html">No Halo</a></li>
            <li><a href="orangejuice.html">Orange Juice</a></li>
            <li><a href="pie.html">Pie</a></li>
            <li><a href="pickpocket.html">Pickpocket</a></li>
            <li><a href="takeitback.html">Take It Back</a></li>
            <li><a href="tellyou.html">Tell You</a></li>
            <li><a href="tombstonegrey.html">Tombstone Grey</a></li>
            <li><a href="triggeroflove.html">Trigger of Love</a></li>
            <li><a href="uaffectme.html">U Affect Me</a></li>
            <li><a href="whatyousay.html">What You Say</a></li>   
        </ul>
    </div>`;
    document.querySelector('.container').insertAdjacentHTML('afterbegin', sidebarHTML);
});

function addContactButton() {
    const button = document.createElement('button');
    button.textContent = 'CONTACT';
    button.className = 'contact-btn';
    document.body.appendChild(button);
}

// Call the function when the window loads
window.onload = addContactButton;