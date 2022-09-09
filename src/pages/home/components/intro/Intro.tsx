import { 
    ShoppingCart,
    Coffee,
    Timer,
    Package
} from 'phosphor-react';

import imgIntro from '../../../../assets/intro-image.svg';

import { 
    IntroContainer, 
    IntroItemContainer, 
    IntroText, 
    IntroItem, 
    IntroItemIcon, 
    IntroImg
} from './intro.styles';


export function Intro() {
    return (
        <IntroContainer>
            <IntroText>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>

                <IntroItemContainer>
                    <IntroItem>
                        <IntroItemIcon itemColor="yellowDark">
                            <ShoppingCart weight="fill" />
                        </IntroItemIcon>
                        <span>Compra simples e segura</span>
                    </IntroItem>
                    <IntroItem>
                        <IntroItemIcon itemColor="baseText">
                            <Package weight="fill" />
                        </IntroItemIcon>
                        <span>Embalagem mantém o café intacto</span>
                    </IntroItem>
                    <IntroItem>
                        <IntroItemIcon itemColor="yellow">
                            <Timer weight="fill" />
                        </IntroItemIcon>
                        <span>Entrega rápida e rastreada</span>
                    </IntroItem>
                    <IntroItem>
                        <IntroItemIcon itemColor="purple">
                            <Coffee weight="fill" />
                        </IntroItemIcon>
                        <span>O café chega fresquinho até você</span>
                    </IntroItem>
                </IntroItemContainer>
            </IntroText>
            <IntroImg>
                <img src={imgIntro} />
            </IntroImg>
        </IntroContainer>
    )
}