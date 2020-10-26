import styled from 'styled-components';
import { colors } from '../../assets/colors';
import { shade } from 'polished';

export const AppTask = styled.div`
    /* max-width: 960px; */
    margin: 0 8vh ${colors.gray1};
    padding: 40px 60px;
    padding-top: 16vh;
    background: ${colors.gray1};
`;

export const Title = styled.h1`
    align-items: center;
    font-size: 44px;
    color: ${colors.organge1};
    max-width: 450px;
    line-height: 46px;
    display: contents;
`;

export const Form = styled.form`
    margin-top: 40px;
    display: flex;
    margin: 15px 10px 0 0;
    img {
        margin-left: 20rem;
        display: inline;
        opacity: 0.5;
        margin: -50px 50px 0px auto;
    }
    input {
        flex: 0.6;
        height: 4.5rem;
        width: 6rem;
        max-width: 400px;
        padding: 0 24;
        border: 0;
        border-radius: 0 5px 5px 0;
        border: 2px solid ${colors.blue1};

        &::placeholder {
            color: ${colors.gray3};
        }
    }

    button {
        width: 6rem;
        height: 4.5rem;
        background-color: ${colors.blue1};
        color: ${colors.organge1};
        border-radius: 5px 0 0 5px;
        font-weight: bold;
        border: 0;
        &:hover {
            background: ${shade(0.5, colors.blue2)};
        }
    }
`;
// export const Button = styled.button`

//     }
// `;
export const NewTask = styled.div`
    button {
        width: 8rem;
        height: 4.5rem;
        background-color: ${colors.blue1};
        color: ${colors.organge1};
        font-size: 20px;
        border-radius: 7px;
        font-weight: bold;
        border: 0;
        &:hover {
            background: ${shade(0.5, colors.blue2)};
        }
    }
    div {
        position: absolute; /* posição absoluta ao elemento pai, neste caso o BODY */
        border-radius: 8px;
        left: 30%;
        top: auto;
        width: 21rem; /* Largura da DIV */
        max-width: 21rem;
        height: 250px; /* Altura da DIV */
        margin-left: -150px;
        margin-top: -125px;
        background-color: ${colors.gray1};
        opacity: 0.7;
        border: solid ${colors.gray3};
        text-align: center;
        z-index: 2000;
        form {
            textarea,
            input {
                display: flex;
                text-align: center;
                font-size: 16px;
                width: 20rem;
                margin: 0.5rem;
                max-width: 21rem;
                height: auto;
                /* margin: 0.5vh 0 0.3rem 0.2rem; */
                justify-content: center;
                background: ${colors.white1};
                border-radius: 30px;
                color: ${colors.organge1};
                border: solid ${colors.gray1};
                resize: unset;
                /* background: ${colors.gray2}; */
                & + textarea {
                    margin-bottom: 1vh;
                    height: 6rem;
                    max-height: 16rem;
                }
            }
            button {
                width: 3rem;
                height: 2.5rem;
                margin: 0.2rem 0.2rem auto auto;
                display: inline;
                opacity: 0.9;
            }
            & + button {
                margin-bottom: 0;
                background-color: ${colors.gray1};
                border: solid ${colors.organge1};
                color: ${colors.blue1};
            }
            a {
                border: 0;
                background: ${colors.gray1};
                margin: 0.4rem 0 auto auto;
                cursor: pointer;
            }
        }
    }
`;
export const Task = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: auto auto auto;
    background: ${colors.gray1};

    form {
        border: ${colors.blue1} solid;
        border-radius: 5px;
        max-width: 22rem;
        max-height: 25rem;
        margin: 1vh 1vh 1vh 0;
        transition: transform 0.3s;
        padding: auto;
        &:hover {
            transform: translateY(-1.5vh);
            border: ${colors.organge1} solid;
        }
        & + a {
            margin: 1vh 1vh 1vh 0;
        }
        textarea,
        input {
            text-align: center;
            font-size: 18px;
            width: 21rem;
            margin: 0.5vh 0 0.3rem 0.2rem;
            background: ${colors.white1};
            border-radius: 30px;
            color: ${colors.organge1};
            border: solid ${colors.gray1};
            resize: unset;
            /* background: ${colors.gray2}; */
            opacity: 0.7;
            & + textarea {
                margin-bottom: 1vh;
                height: 6rem;
                max-height: 16rem;
            }
        }
        button {
            border: 0;
            background: ${colors.gray1};
            margin: 0.2rem 0.2rem auto auto;
            display: inline;
            width: auto;

            /* comportamento: em linha com wrap */

            & + button {
            }
        }
    }
`;
