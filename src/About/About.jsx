import React from 'react';
import "./About.css";
import image from'./assets/contact.webp'

export default function About() {
    return (
        <div className='contain'>
            <div className='title'>
            <h1>CONTACT INFO</h1>
               <ul>
                <li>Name : Sairam P</li>
                <li>Mobile No : 8778661395</li>
                <li>Mail : psairam299@gmail.com</li>
                <li>Linkin : <a href="https://www.linkedin.com/in/sairam-p-907a08275" target="_blank">https://www.linkedin.com/in/sairam-p-907a08275</a></li>
                <li>Github : <a href="https://github.com/SAIRAM299" target="_blank">https://github.com/SAIRAM299</a></li>
                <li>Facebook :  <a href="https://www.facebook.com/profile.php?id=100016111265582" target="_blank">https://www.facebook.com/profile.php?id=100016111265582</a></li>
                <li>Instagram : <a href="https://www.instagram.com/_.sai._08/" target="_blank">https://www.instagram.com/_.sai._08/</a></li>
                <li>Whatsapp :<a href="https://www.instagram.com/_.sai._08/" target="_blank">https://wa.link/3hgsd0</a></li>
                <li>Address : NO 6 , Meenakshi cross street , Sengundram.</li>
                <li>City : Singaperumal koil.</li>
                <li>District : Chengalpet.</li>
                <li>Pincode : 603204.</li>
               </ul>


            </div>
           <div className='contact'>
<img src={image}/>
           </div>
        </div>
    );
}


