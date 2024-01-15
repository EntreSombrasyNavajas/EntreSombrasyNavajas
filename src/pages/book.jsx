import Head from 'next/head';
import { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';

const MyBook = (props) => {

    const book = useRef(null)
    const [page, setPage] = useState(0)

    const totalPage = 99

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

        if (page == totalPage - 1) {
            return totalPage - 1
        }

        return page
    }

    const calculateRightPage = () => {
        if (page == 0) {
            return 1
        }

        if (page == totalPage - 1) {
            return totalPage - 1
        }

        return page + 1
    }


    return (
        <div className="main-wrapper">

            <Head>
                <title>Entre Sombras Y Navajas - Book</title>
            </Head>

            <div className="left"></div>

            <div className="content">
                <main>
                    <HTMLFlipBook width={482} height={680} ref={book} onFlip={onFlip}>
                        <div></div>
                        {
                            Array(totalPage - 1).fill(0).map((_, i) => (
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

                        <span className="total-page">/ {totalPage - 1}</span>
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

            <style jsx>{`
                .main-wrapper {
                    font-family: 'Century Gothic', sans-serif;
                    background-image: url('img/fondo.png');
                    min-height: 100vh;
                    display: grid;
                    grid-template-columns: 1fr auto 1fr;
                    color: #fff;
                }

                .content {
                    width: 964px;
                    margin: auto;
                }
                
                main {
                    padding: 1rem 0;
                }

                .controlls {
                    display: grid;
                    grid-template-columns: 1fr auto 1fr;
                }

                .change-page {
                    position: relative;
                    padding: 0 4rem;
                }

                .change-page {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 1rem;
                }

                .total-page {
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    padding: 1rem;
                    font-size: 1.2rem;
                }

                button {
                    background: transparent;
                }

                img {
                    width: 100%;
                }

                .row-icon {
                    height: 2.8rem;
                }

                .number-page {
                    border: 1px solid #fff;
                    border-radius: 0.5rem;
                    height: 3rem;
                    width: 3rem;
                    display: grid;
                    place-items: center;
                    font-size: 1.5rem;
                }

                .next-page .row-icon {
                    transform: rotate(180deg);
                }
                
                .entre {
                    width: 20rem;
                    box-sizing: border-box;
                    padding: 2rem;
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
            `}</style>
        </div>
    );
}

export default MyBook