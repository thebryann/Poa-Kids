import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    /* CARROCEL */
    /* #slider_container {
        position: relative;
        display: flex;
        flex-direction: row;
    }

    .slider_box_img > img {
        width: 100%;
    }

    #slider_box {
        width: 100%;
    }

    #prev, #next {
        position: absolute;
        bottom: 30px;

        cursor: pointer;
        z-index: 999;
    }

    #next {
        right: 40px;
    }

    #prev {
        right: 85px;
    } */

    .slick-slide {
        outline: none; /* Remove a borda que aparece quando seleciona um slide */
    }


    /* SETA DOS DESTAQUES */
    #passeios_seta {
        position: absolute;
        right: 0px;
        top: 50%;
        padding: 15px;
        background: rgba(255, 255, 255, .9);
        border-radius: 50px 0px 0px 50px;
        width: 90px;
        text-align: center;
        z-index: 999;
    }
    #passeios_seta > svg {
        position: relative;
        animation: anim_seta 1s forwards infinite alternate;
    }
    .esconde_seta {
        animation: anim_apaga_seta 1s forwards;
    }

    @keyframes anim_apaga_seta {
        from {
            opacity: 1;
            visibility: visible;
        }

        to {
            opacity: 0;
            visibility: hidden;
        }
    }

    @keyframes anim_seta {
        from {
            left: -10px;
        }

        to {
            left: 10px;
        }
    }


    /* CATEGORIAS */
    .categoria_item {
        flex-grow: 1;
        background: #ccc;
        border-radius: 10px;
        text-align: center;
        margin: 0 10px 10px 0;
        transition: .4s;
    }
    .categoria_item:hover {
        opacity: .8;
    }
    .categoria_item > a {
        font-size: 24px;
        line-height: 29px;
        color: #FFFFFF;
    }
    .categoria_item > a:hover {
        text-decoration: none;
    }
    .categoria_item:nth-child(01) { background-color: #DD3C88; }
    .categoria_item:nth-child(02) { background-color: #539AEE; }
    .categoria_item:nth-child(03) { background-color: #FABC19; }
    .categoria_item:nth-child(04) { background-color: #7CD950; }
    .categoria_item:nth-child(05) { background-color: #EE5353; }
    .categoria_item:nth-child(06) { background-color: #F986BC; }
    .categoria_item:nth-child(07) { background-color: #DD3C88; }
    .categoria_item:nth-child(08) { background-color: #539AEE; }
    .categoria_item:nth-child(09) { background-color: #FABC19; }
    .categoria_item:nth-child(10) { background-color: #7CD950; }
    .categoria_item:nth-child(11) { background-color: #EE5353; }
    .categoria_item:nth-child(12) { background-color: #F986BC; }


    /* MEDIA QUERY */
    @media screen and (min-width: 0px) {}
    @media screen and (min-width: 576px) {}
    @media screen and (min-width: 768px) {
        .container-sm {
            padding-right: 15px;
        }
    }
    @media screen and (min-width: 992px) {}
`;