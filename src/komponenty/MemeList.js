import React from 'react'
import '../style/MemeList.css'
import wuefista from '../img/wf.jpg'
import starwars from '../img/starwars.jpg'
import ikea from '../img/ikea.jpg'
import kochanowski from '../img/kochanowski.jpg'
import matematyka from '../img/matematyka.jpg'
import sen from '../img/sen.jpg'
import sleep from '../img/sleep.jpg'
import smietnik from '../img/smietnik.jpg'
import trojka from '../img/trojka.jpg'
import sprawdzian from '../img/sprawdzian.jpg'
import pain from '../img/pain.jpg'
import droga from '../img/droga.jpg'
import drzwi from '../img/drzwi.jpg'
import salto from '../img/salto.jpg'
import jezus from '../img/jezus.jpg'
import teacher from '../img/teacher.jpg'

import Meme from './Meme'

const MemeList = () => {


    return (
        <main>
        <section className="memes">
            {/* Lista memów */}
            <Meme src={wuefista} alt="mem z wufeistą"/>
            <Meme src={starwars} alt="mem z starwars"/>
            <Meme src={ikea} alt="mem z ikeą"/>
            <Meme src={kochanowski} alt="mem z Kochanowskim"/>
            <Meme src={matematyka} alt="mem z matematyką"/>
            <Meme src={sen} alt="mem z snem"/>
            <Meme src={sleep} alt="mem z spaniem"/>
            <Meme src={smietnik} alt="mem z smietnikiem"/>
            <Meme src={trojka} alt="mem z trojka"/>
            <Meme src={sprawdzian} alt="mem z sprawdzianem"/>
            <Meme src={pain} alt="mem z bólem"/>
            <Meme src={droga} alt="mem z drogą"/>
            <Meme src={drzwi} alt="mem z drzwiami"/>
            <Meme src={salto} alt="mem z saltem"/>
            <Meme src={jezus} alt="mem z Jezusem"/>
            <Meme src={teacher} alt="mem z nauczycielem"/>
        </section>
        </main>
    );
}

export default MemeList