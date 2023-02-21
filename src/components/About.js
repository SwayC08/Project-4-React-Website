import './About.css';

const About = () =>{
    return(
        <main className='About'>
            <h2>I enjoy the following activities in my spare time:</h2>
            <section class="camping">
                <h3>Camping</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSXA_iRSIft4H1gjt5Fc6CDhXc2vIo_Dkfbw&usqp=CAU" alt="Camping Picture"/>
                <p class="indent">The great outdoors is always calling out to me! A break from technology is soothing to my soul. Bibendum at varius vel pharetra. Cursus risus at ultrices mi tempus. Nam at lectus urna duis convallis convallis tellus. Purus ut faucibus pulvinar elementum integer.</p>
            </section>
            <section class="traveling">
                <h3 >Traveling</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_NkYJv_wYNJcApP-j8IVPEAXv1ecgFFJDBg&usqp=CAU" alt="Traveling Picture"/>
                <p class="indent">Visiting and experiencing new places gives me a thrill. Sed odio morbi quis commodo odio aenean. Nunc sed augue lacus viverra vitae congue. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Ut consequat semper viverra nam libero justo. </p>
            </section>
            <section class="B-K">
                <h3>Biking and Kayaking</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqdI71DrzwVE30eTEcoSIh9PxTHoYEUDZzmA&usqp=CAU" alt="Biking and Kayaking Picture"/>
                <p class="indent">My favorite exercise activities are biking and kayaking. Enim facilisis gravida neque convallis a. Nisl nunc mi ipsum faucibus. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Convallis convallis tellus id interdum.</p>
            </section>
        </main>
    )
}

export default About;