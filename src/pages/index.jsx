import Head from 'next/head';

const Index = () => {

    return (
        <div className="wrapper">

            <Head>
                <title>Entre Sombras Y Navajas - AR</title>

                <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
                <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"/>
                <link rel="manifest" href="favicon/site.webmanifest"/>
                <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>

            <header>
                <img className="logo" src="icon/logo-white.svg" alt=""/>
            </header>
            <main>
                <a className="link" href="https://www.facebook.com/fbcameraeffects/testit/312994871640656/MzYxMmYxOGVkNzA3NzZkYzg5Njc3Y2NiMDVmZWNlNjQ=/?source=test_link" target="_blank" rel="noopener noreferrer">
                    <img className="main-image" src="img/pedro-navaja.webp" alt="portada del filtro de pedro Navaja"/>
                    <div className="link-background">
                        <img className="manita" src="icon/Manita.svg" alt=""/>
                    </div>
                </a>
                <p className="texto">
                    Sumérgete en la experiencia de la realidad aumentada de la novela gráfica
                    <br/>
                    “Entre sobras y navajas - Pedro Navaja”
                </p>
            </main>
            <footer>
                <div className="link-list">
                    <a className="contact-link" href="https://www.instagram.com/knartsim/" target="_blank" rel="noopener noreferrer">
                        <img src="icon/instagram.svg" alt=""/>
                        <p>@knartsim</p>
                    </a>
                    <a className="contact-link" href="mailto:karenEmai">
                        <img src="icon/email.svg" alt=""/>
                        <p>karenEmai</p>
                    </a>
                </div>

            </footer>
            <div className="wrapper-line">
                <div className="line"></div>
            </div>

            <style jsx>{`
                .wrapper {
                    margin: auto;
                    background-color: black;
                    min-height: 100dvh;
                    font-family: 'Century Gothic', sans-serif;
                    color: white;
                    max-width: 750px;
                    display: grid;
                    grid-template-rows: auto auto auto 1fr;
                }

                header {
                    background-color: white;
                    display: grid;
                    place-items: center;
                }

                .logo {
                    height: 5rem;
                    padding: 1rem;
                }


                .main-image {
                    width: 100%;
                }

                .texto {
                    text-align: center;
                    padding: 2rem 2rem;
                    font-size: 12px;
                    line-height: 1.5;
                }

                .link {
                    display: block;
                    position: relative;
                }

                .link-background {
                    width: 5rem;
                    height: 5rem;
                    position: absolute;
                    display: grid;
                    place-items: center;
                    right: 2rem;
                    bottom: .5rem;
                    background-color: rgba(0, 0, 0, 0.699);
                    border-radius: 50%;
                }

                .manita {
                    width: 4rem;
                    animation: manita .7s alternate-reverse infinite;
                }


                footer {
                    padding: 0rem 2rem;
                }

                .contact-link {
                    display: grid;
                    grid-template-columns: auto 1fr;
                    color: white;
                    font-size: 12px;
                    align-items: center;
                    grid-gap: .3rem;
                }

                .contact-link > img {
                    height: 2rem;
                }

                .contact-link > p {
                    font-weight: bolder;
                }

                .link-list {
                    border-left: white 4px solid;
                    padding-left: .5rem;
                }

                .wrapper-line {
                    width: 100%;
                    box-sizing: border-box;
                    padding: 4rem 2rem;
                    align-self: flex-end;
                    justify-self: center;
                }

                .line {
                    height: 2px;
                    width: 100%;
                    border: 1px solid rgba(255, 255, 255, 0.498);
                }

                @keyframes manita {
                    from {
                        width: 3.5rem;
                    }

                    to {
                        width: 4rem;
                    }
                }

                @media screen and (max-width: 350px) {
                    .logo {
                        height: 3rem;
                        padding: 1rem;
                    }

                    .link-background {
                        transform: scale(.7);
                        right: 1rem;
                        bottom: 0rem;
                    }
                    
                }

                @media screen and (max-width: 280px) {
                    .texto {
                        font-size: 8px;
                    }

                    .contact-link {
                        font-size: 8px;
                    }
                }
            `}</style>
        </div>
    )
}

export default Index
