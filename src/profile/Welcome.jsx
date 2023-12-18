import React from 'react';
import './Welcome.css'
import img from './assets/mypic.jpg'
import facebook from './assets/fb.png'
import instagram from './assets/ins.png'
import github from './assets/gh.png'
import linkin from './assets/lin.png'
import resume from './assets/my Resume.pdf'


export default function Welcome(){
    return (
        <div className='contain'>
            <header className="head">
       <a href="" className="sai"> <h1>SAIRAM P</h1></a>
        <nav className="navi">
            <a class="homy">HOME</a>
            <a href="">CONTACT</a>
            <a href="">PROJECTS</a>
            <a href="">EDUCATION</a>
            <a href="">INTERNS</a>
        </nav>
    </header>

    <section className="home">
        <div className="dubby"><img src={img}/></div>

        <div className="welcome">
            <h1>Hi, I'M SAIRAM</h1>
            <h3>Front-End Developer</h3>
            <p>As a dedicated and passionate frontend developer, I am eager to embark on a dynamic career where I can leverage my skills in HTML, CSS, and JavaScript to create user-
                friendly web applications. I am seeking a challenging and growth-oriented environment where I can apply my academic knowledge and hands-on experience.
            </p>
            <div className="icon">
                <a href="https://www.facebook.com/profile.php?id=100016111265582" target="_blank"><img src={facebook} alt='fb.logo'/></a>
                <a href="https://www.instagram.com/_.sai._08/" target="_blank"><img src={instagram}/></a>
                <a href="https://www.linkedin.com/in/sairam-p-907a08275" target="_blank"><img src={linkin}/></a>
                <a href="https://github.com/SAIRAM299" target="_blank"><img src={github}/></a>
            </div>
            <a href={resume} target="_blank" class="button">RESUME</a>
        </div>
    </section>

        </div>
    );
}


