import Head from 'next/head';
import { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';

const MyBook = (props) => {

    const book = useRef(null)
    const [page, setPage] = useState(0)

    const totalPage = 98

    const NextPage = () => {
        book.current.pageFlip().flipNext()
    }

    const PreviewPage = () => {
        book.current.pageFlip().flipPrev()
    }
    
    const onFlip = (e) => {
        setPage(e.data)
    }

    const toFirst = () => {
        book.current.pageFlip().flip(0)
    }

    const toLast = () => {
        book.current.pageFlip().flip(totalPage - 1)
    }

    const calculateLeftPage = () => {
        if (page == 0) {
            return 1
        }

        return page + 1
    }

    const calculateRightPage = () => {
        if (page == 0) {
            return 1
        }

        if (page == totalPage - 1) {
            return totalPage
        }

        return page + 2
    }


    return (
        <div className="page">
            <Head>
                <title>Entre Sombras Y Navajas - Book</title>
            </Head>

            <div className="main-wrapper">
                <div className="left"></div>

                <div className="content">
                    <main>
                        <HTMLFlipBook width={486} minWidth={300} height={680} showCover={true} size="stretch" ref={book} onFlip={onFlip}>
                            {
                                Array(totalPage).fill(0).map((_, i) => (
                                    <div className="demoPage" key={i}>
                                        <img src={`pages/Pedro-Navaja---Entre-Sombras-y-Navajas_${i + 1}.webp`} alt="" />
                                    </div>
                                ))
                            }
                        </HTMLFlipBook>
                    </main>

                    <div className="controlls">
                        <button className="first" onClick={toFirst}>
                            <img className="row-icon" src="icon/doble-row.svg" alt="" />
                        </button>

                        <div className="change-page">
                            <span className="number-page number-page-left">{calculateLeftPage()}</span>

                            <button className="before-page" onClick={PreviewPage}>
                                <img className="row-icon" src="icon/row.svg" alt="" />
                            </button>

                            <button className="next-page" onClick={NextPage}>
                                <img className="row-icon" src="icon/row.svg" alt="" />
                            </button>

                            <span className="number-page number-page-right">{calculateRightPage()}</span>

                            <span className="total-page">/ {totalPage}</span>
                        </div>

                        <button className="last" onClick={toLast}>
                            <img className="row-icon" src="icon/doble-row.svg" alt="" />
                        </button>
                    </div>
                </div>

                <div className="right">
                    <img className="entre" src="img/entre.png" alt="" />
                    <img className="logo" src="img/logo.svg" alt="" />
                </div>
            </div>
            <style jsx>{`

                :root {
                    --size: 1;
                }

                .page {
                    display: grid;
                    align-items: center;
                    min-height: 100dvh;
                    background-image: url('img/fondo.png');
                    background-size: cover;
                }

                .main-wrapper {
                    font-family: 'Century Gothic', sans-serif;
                    display: grid;
                    grid-template-columns: 1fr auto 1fr;
                    color: #fff;
                }

                .content {
                    width: 972px;
                    padding: 2rem;
                }
                
                main {
                    padding: 1rem 0;
                }

                .controlls {
                    padding: 0 1rem;
                    display: grid;
                    grid-template-columns: 1fr auto 1fr;
                }

                .change-page {
                    position: relative;
                    padding: 0 4em;
                }

                .change-page {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 1em;
                }

                .total-page {
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    padding: 1em;
                    font-size: 1.2em;
                }

                button {
                    background: transparent;
                }

                img {
                    width: 100%;
                }

                .row-icon {
                    height: 2.8em;
                }

                .number-page {
                    border: 1px solid #fff;
                    border-radius: 0.5rem;
                    height: 3em;
                    width: 3em;
                    display: grid;
                    place-items: center;
                    font-size: 1.5em;
                }

                .next-page .row-icon {
                    transform: rotate(180deg);
                }
                
                .entre {
                    width: 18rem;
                    box-sizing: border-box;
                    padding-right: 2rem;
                }

                .logo {
                    position: absolute;
                    right: 1rem;
                    bottom: 1rem;
                    width: 10rem;
                }

                .first {
                    justify-self: start;
                }

                .last {
                    justify-self: end;
                }
                
                .last .row-icon {
                    transform: rotate(180deg);
                }

                .right {
                    position: relative;
                    display: grid;
                    align-items: center;
                    justify-content: center;
                }

                @media screen and (max-width: 1330px) {
                    .content {
                        width: 800px;
                    }

                    .entre {
                        width: 16rem;
                    }
    
                    .logo {
                        width: 8rem;
                    }
                }

                @media screen and (max-width: 1160px) {
                    .content {
                        width: 700px;
                    }

                    .entre {
                        width: 14rem;
                    }
    
                    .logo {
                        width: 6rem;
                    }
                }

                @media screen and (max-width: 990px) {
                    .left {
                        display: none;
                    }

                    .content {
                        width: 600px;
                        margin: auto;
                        padding: 0 2rem 2rem 2rem;
                    }

                    .main-wrapper {
                        grid-template-columns: 1fr;
                    }

                    .entre {
                        padding: 1rem;
                    }

                    .right {
                        padding-top: 1rem;
                        grid-row: 1;
                        display: flex;
                        justify-content: space-around;
                    }
                    
                    .logo {
                        position: relative;
                        right: 0rem;
                        bottom: 0rem;
                    }
                    
                    .controlls {
                        font-size: 12px;
                    }
                }

                @media screen and (max-width: 670px) {
                    .content {
                        box-sizing: border-box;
                        width: 100%;
                    }

                    main {
                        padding-top: 0;
                    }
                }

                @media screen and (max-width: 500px) {
                    .controlls {
                        font-size: 10px;
                    }
                }

                @media screen and (max-width: 420px) {
                    .controlls {
                        font-size: 8px;
                    }

                    .entre {
                        width: 12rem;
                    }
    
                    .logo {
                        width: 4rem;
                    }
                }

                @media screen and (max-width: 360px) {
                    .controlls {
                        font-size: 7px;
                    }
                }
            `}</style>
        </div>
    );
}

export default MyBook