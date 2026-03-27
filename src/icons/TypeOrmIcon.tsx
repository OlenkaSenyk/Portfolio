import type {SVGAttributes} from "react";

export default function TypeOrmIcon({width, height, className}: SVGAttributes<SVGSVGElement>) {
    return (
        <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 318.000000 230.000000"
            preserveAspectRatio="xMidYMid meet"
            className={className}
        >
            <g transform="translate(0.000000,230.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path d="M960 2214 c-223 -32 -363 -84 -517 -193 -199 -141 -347 -353 -416
                        -599 -19 -67 -21 -102 -21 -277 0 -187 2 -205 26 -285 140 -452 498 -741 964
                        -776 227 -17 564 80 564 163 0 9 -190 207 -430 448 -330 331 -430 436 -430
                        455 0 19 100 124 430 455 240 241 430 439 430 448 0 87 -388 191 -600 161z"/>
                <path d="M1594 1688 c-401 -400 -514 -519 -514 -538 0 -19 112 -137 509 -534
                        435 -435 512 -509 537 -509 25 0 98 70 531 509 411 416 503 514 503 536 0 22
                        -89 116 -502 532 -277 278 -514 508 -527 512 -21 5 -82 -52 -537 -508z"/>
            </g>
        </svg>
    )
}