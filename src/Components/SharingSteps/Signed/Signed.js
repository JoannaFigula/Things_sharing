import React, {Component} from 'react';

class Signed extends Component{
    render() {
        return(
            <>

            <header className="header-new container">
                <ul className="nav-panel">
                    <li className="logged-user">
                        Witaj Agata
                        <ul className="dropdown">
                            <li><button>Profil</button></li>
                            <li><button>Ustawienia</button></li>
                            <li><button>Moje zbiórki</button></li>
                            <li><button>Wyloguj</button></li>
                        </ul>
                    </li>
                </ul>
                <section className="startHelp container">
                    <div>
                        <h1>
                            Oddaj rzeczy których już nie chcesz<br/>
                            POTRZEBUJĄCYM
                        </h1>
                        <div className="about-decoration-image"> </div>
                        <h2> Wystarczą 4 proste kroki </h2>

                        <ul className="startHelp-btns">
                            <li><button className="btns">Wybierz rzeczy </button></li>
                            <li><button className="btns">Spakuj je w worki</button></li>
                            <li><button className="btns">Wybierz fundację</button></li>
                            <li><button className="btns">Zamów kuriera</button></li>
                        </ul>
                    </div>
                </section>
            </header>

                </>

        )
    }

}

export default Signed;