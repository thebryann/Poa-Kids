import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    .titulo {
        font-size: 30px;
        line-height: 30px;
        color: #323232;
    }

    /* CARROCEL */
    #slider_container {
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
    .slick-dots {
        position: absolute;
        bottom: 15px;
    }
    .slick-dots li button:before {
        content: '▄▄';
        color: white !important;
        font-size: 11px !important;
        opacity: 1;
    }
    .slick-dots li.slick-active button:before {
        color: #DD3C88!important;
        font-size: 11px !important;
        opacity: 1;
    }
    .slick-slide {
        outline: none;
    }


    /* OPÇÕES */
    .opcoes_titulo {
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        color: #323232;
    }

    /* OPÇÕES TAMANHO */
    .radio_tam {
        cursor: pointer;
        user-select: none;
    }
    .radio_tam input {
        display: none;
    }
    .radio_tam .checkmark {
        display: inline-block;
        width: 70px;
        padding: 10px 0;
        border-radius: 10px;
        border: 2px solid white;
        background-color: #40AEBF;
        color: #FFFFFF;
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        transition: .4s;
    }
    .radio_tam:hover > .checkmark {
        opacity: .7 !important;
    }
    .radio_tam input:checked ~ .checkmark {
        background-color: #EF5FA3;
    }

    /* OPÇÕES QUANTIDADE */
    .opcoes_qtd > .opcoes_titulo > span {
        font-weight: normal;
        font-size: 16px;
        line-height: 18px;
        text-transform: uppercase;
        color: #F986BC;
    }

    #opcoes_qtd_total {
        font-weight: bold;
        font-size: 30px;
        line-height: 30px;
        text-transform: uppercase;
        color: #F986BC;
    }


    /* OPÇÕES DESCRIÇÃO */
    .opcoes_descricao p {
        font-size: 16px;
        line-height: 26px;
        color: #000000;
    }

    /* SEÇÃO DE COMPRA */
    .fora_estoque {
        font-family: 'Montserrat';
        font-size: 28px;
        color: #9c9c9c;
        border: 1px solid #9c9c9c;
        border-radius: 6px;
        padding: 1rem;
    }



    /* MEDIA QUERY */
    @media screen and (min-width: 0px) {
        .divide_tela {
            width: 100%;
        }
    }
    @media screen and (min-width: 576px) {}
    @media screen and (min-width: 768px) {
        .btn_comprar, .btn_add_carrinho {
            width: 49%;
        }
    }
    @media screen and (min-width: 992px) {
        .divide_tela {
            width: 50%;
        }

        .radio_cor .checkmark {
            height: 30px;
            width: 30px;
        }
        .radio_tam .checkmark {
            width: 55px;
            padding: 4px 0;
            font-size: 16px;
            line-height: 24px;
            border-radius: 6px;
        }
        .control_number {
            width: 110px;
        }
        .control_number > * {
            font-size: 18px;
            height: 35px;
            width: 35px;
        }
    }
`;