import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';

const MyBook = (props) => {

    const book = useRef(null)

    const [page, setPage] = useState(0)

    const totalPage = 98

    useEffect(() => {
        setTimeout(() => {
            if (window) {
                (function(a){
                    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) {
                        book.current.pageFlip().pages.app.setting.flippingTime = 1
                    }
                })(navigator.userAgent || window.opera);
            }
        }, 100);
    }, [])
    

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
                        <HTMLFlipBook flippingTime={flippingTime} width={486} minWidth={300} height={680} minHeight={420} showCover={true} size="stretch" ref={book} onFlip={onFlip}>
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