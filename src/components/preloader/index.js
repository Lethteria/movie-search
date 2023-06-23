import React from "react";
import styles from "./preloader.module.scss"

export default function Preloader(){
    return(
        <div className={styles.wrap}>
            <div className={styles.loaderWrap}>

                <svg version="1.1"  x="0px" y="0px" width="25%" viewBox="0 0 100 100" enableBackground="new 0 0 100 100"  preserveAspectRatio="xMidYMid">
                    <g>
                        <path mask="url(#lds-flat-gear-94ec7473823b6)" fill="none" stroke="#333333" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d=" M32.4,36C18.1,51.8,4.1,69.5,21.8,87.5"/>
                        <circle fill="#919293" stroke="#333333" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" cx="50" cy="50" r="22.5"/>
                    </g>
                <g >
                    <g transform="rotate(96.9231)" transform-origin="center center">
                        <animateTransform attributeName="transform" type="rotate" values="0;360" keyTimes="0;1" dur="2.6s"
                                          repeatCount="indefinite"></animateTransform>

                        <path fill="#D2D2D3" transform="scale(0.65)" transform-origin="center center" stroke="#333333" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d=" M50,12.5c-20.7,0-37.5,16.8-37.5,37.5S29.3,87.5,50,87.5S87.5,70.7,87.5,50S70.7,12.5,50,12.5z M65.7,32.3c3.6-2.1,8.2-0.8,10.2,2.7 c2.1,3.6,0.8,8.2-2.7,10.2s-8.2,0.8-10.2-2.7C60.9,38.9,62.1,34.3,65.7,32.3z M34.3,67.7c-3.6,2.1-8.2,0.8-10.2-2.7 c-2.1-3.6-0.8-8.2,2.7-10.2c3.6-2.1,8.2-0.8,10.2,2.7C39.1,61.1,37.9,65.7,34.3,67.7z M37,42.5c-2.1,3.6-6.7,4.8-10.2,2.7 S21.9,38.6,24,35c2.1-3.6,6.7-4.8,10.2-2.7C37.9,34.3,39.1,38.9,37,42.5z M50,80c-4.1,0-7.5-3.4-7.5-7.5S45.9,65,50,65 s7.5,3.4,7.5,7.5S54.1,80,50,80z M45,50c0-2.8,2.2-5,5-5s5,2.2,5,5s-2.2,5-5,5S45,52.8,45,50z M50,35c-4.1,0-7.5-3.4-7.5-7.5 S45.9,20,50,20s7.5,3.4,7.5,7.5S54.1,35,50,35z M76,65c-2.1,3.6-6.7,4.8-10.2,2.7s-4.8-6.7-2.7-10.2c2.1-3.6,6.7-4.8,10.2-2.7 C76.8,56.8,78.1,61.4,76,65z"/>
                    </g>
                </g>

                </svg>

            </div>
        </div>
    )
}