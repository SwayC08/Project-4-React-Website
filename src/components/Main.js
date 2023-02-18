import './Main.css';

const Main = () => {
    return (
        <main>
            <h2>Developer, Explorer, Student.</h2>
            <section>
                <p class="intro">I am an entry level web developer who is looking to advance my skill through freelance collaboration and work projects.</p>
                <p class="quote"><em>"The only time you lose is when you quit." <br /> - Cesar Chavez</em></p>
            </section>
            <section class="skill-list">
                <h3>Skills:</h3>
                <ul class="skill">
                    <li>
                        <img src="https://cdn-icons-png.flaticon.com/128/2656/2656443.png" alt="XML Logo" />
                        <a href="https://en.wikipedia.org/wiki/XML" alt="Wikipedia XML Link" target="_blank">XML</a>
                    </li>
                    <li>
                        <img src="https://cdn-icons-png.flaticon.com/128/1051/1051277.png" alt="HTML Logo"/>
                        <a href="https://en.wikipedia.org/wiki/HTML" alt="Wikipedia HTML Link" target="_blank">HTML</a>
                    </li>
                    <li>
                        <img src="https://cdn-icons-png.flaticon.com/128/732/732190.png" alt="CSS Logo"/>
                        <a href="https://en.wikipedia.org/wiki/CSS" alt="Wikipedia CSS Link" target="_blank">CSS</a>
                    </li>
                    <li>
                        <img src="https://cdn-icons-png.flaticon.com/128/1199/1199124.png" alt="JavaScript Logo"/>
                        <a href="https://en.wikipedia.org/wiki/JavaScript" alt="Wikipedia JavaScript Link" target="_blank">Java<br/>Script</a>
                    </li>
                </ul>
            </section>
        </main>
    )
};

export default Main;