import React from 'react';
import styled from 'styled-components';

const InfoBlockStyle = styled.div`
    font-size: 20px;
    position: absolute;
    width: calc(100% - 10rem);
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    .form {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 60px;
        grid-row-gap: 20px;
      }
      
      .grp-input {
        width: 100%;
        position: relative;
        height: 50px;
        overflow: hidden;
      }
      
      .grp-input input {
        width: 100%;
        height: 100%;
        border: 0; 
        padding-top: 20px;
        outline: none;
      }
      
      .grp-input label {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        border-bottom: 1px solid black;
      }
      
      .grp-input label::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -2px;
        height: 100%;
        width: 100%;
        border-bottom: 3px solid blue;
        transform: translateX(-100%);
        transition: all .5s ease;
      }
      
      .content-name {
        position: absolute;
        bottom: 5px;
        left: 0;
        transition: all .3s ease;
      }
      
      .grp-input input:focus + .label-name .content-name, .grp-input input:valid + .label-name .content-name {
        transform: translateY(-150%);
        font-size: 14px;
        color: blue;
      }
      
      .grp-input input:focus + .label-name::after, .grp-input input:valid + .label-name::after {
        transform: translateX(0%)
      }
      
      .grp-input_message {
        margin-top: 70px;
        grid-column: 1/3;
      }
      
      .grp-input input[type="checkbox"] {
        width: 20px;
        height: 20px;
        border: 0; 
        padding-top: 20px;
        outline: none;
      }
      
      .grp-input_checkbox label {
        position: relative;
      }
      
`

const InfoBlock = ({ submitCart, prevStep, className }) => {
    return (
        <InfoBlockStyle>
                <div class="wrapper-title">
                    <h1>Оставьте вашу информацию</h1>
                </div>
                <div class="form">
                    <div class="grp-input">
                        <input id="name" type="text" name="name" autocomplete="off" required />
                        <label for="name" class="label-name">
                            <span class="content-name">Name</span>
                        </label>
                    </div>

                    <div class="grp-input">
                        <input id="name" type="text" name="name" autocomplete="off" required />
                        <label for="name" class="label-name">
                            <span class="content-name">Name</span>
                        </label>
                    </div>

                    <div class="grp-input">
                        <input id="name" type="text" name="name" autocomplete="off" required />
                        <label for="name" class="label-name">
                            <span class="content-name">Name</span>
                        </label>
                    </div>

                    <div class="grp-input grp-input_message">
                        <input id="name" type="text" name="name" autocomplete="off" required />
                        <label for="name" class="label-name">
                            <span class="content-name">Name</span>
                        </label>
                    </div>

                    <div class="grp-input grp-input_checkbox">
                        <input id="name" type="checkbox" name="name" autocomplete="off" required />
                        <label for="name" class="">
                            <span class="content-name">Name</span>
                        </label>
                    </div>

                </div>

                <div class="grp-btn">
                    <button>Вернуться</button>
                    <button>Отправить заказ</button>
                </div>
        </InfoBlockStyle>
    );
}

export default InfoBlock;
