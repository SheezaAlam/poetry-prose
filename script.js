class SpecialHeader extends HTMLElement{
    connectedCallback() {  
        this.innerHTML = `
            <header>
                <h2 class="name">Poetry & Prose</h2>
                <nav class="navigation">
                    <a href="index.html">Home</a>
                    <a href="poems.html">Poetry</a>
                    <a href="prose.html">Prose</a>
                    <a href="about.html">About</a>
                    <a href="contact.html">Contact</a>
                </nav>
            </header>
        `;
    }
}

customElements.define('special-header',SpecialHeader);

