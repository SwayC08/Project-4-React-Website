import './Portfolio.css';

const Portfolio = () => {
    return (
        <main className='Portfolio'>
            <h2>My portfolio consists of the following projects:</h2>
            <section class="first-project">
                <h3>1<sup>st</sup> Project: Website Development</h3>
                <img src="https://dynamicxperts.com/wp-saadali/uploads/2022/05/Web-Designers-Web-Design-1.jpg" alt="Website construction picture"/>
                <p class="indent">I created a personal website, using only HTML & CSS, to showcase my skills and display my personal projects.</p>
                <p class="indent"> Here is a link to the site: <a href="https://storied-mooncake-2c670a.netlify.app/index.html" alt="Personal Site Link" target="_blank">My Personal Site</a></p>
            </section>
            <section class="second-project">
                <h3>2<sup>nd</sup> Project: Cookie Clicker Game </h3>
                <img src="https://www.spinutech.com/webres/Image/web-design-development/articles/Web%20Dev-Blog.png" alt="Application construction picture"/>
                <p class="indent"> I created a cookie clicker game using JavaScript functions and logic.</p>
                <p class="indent"> Here is a link to the site: <a href="https://serene-lebkuchen-a632ea.netlify.app" alt="Cookie Clicker Game Link" target="_blank">Cookie Clicker Game</a></p>
                
            </section>
            <section class="third-project">
                <h3>3<sup>rd</sup> Project: TicTacToe Game</h3>
                <img src="https://www.impactbnd.com/hs-fs/hubfs/development-terms-featurd.jpg?length=1200&name=development-terms-featurd.jpg" alt="Software construction picture"/>
                <p class="indent"> I created a TicTacToe game using JavaScript</p>
                <p class="indent"> Here is a link to the site: <a href="https://rad-snickerdoodle-6254c2.netlify.app/" alt="TicTacToe Game Link" target="_blank">TicTacToe Game</a></p>
            </section>
        </main>
    )
}

export default Portfolio;