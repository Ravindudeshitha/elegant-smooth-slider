import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import './arrowButton.css';
 
type ButtonType = 'primary' |'secondary';

type Props = {
    slideButtonBackground?: string;
    slideButtonIconColor?: string;
    slideButtonBackgroundHover?: string;
    slideButtonIconColorHover?: string;
    onPrevClick: () => void;
    onNextClick: () => void;
    buttontype?: ButtonType;
}

const ArrowButtons: React.FC<Props> = ({ 
    slideButtonBackground, 
    slideButtonIconColor, 
    slideButtonBackgroundHover, 
    slideButtonIconColorHover,
    onPrevClick,
    onNextClick,
    buttontype,
}) =>{

    const colorSets: Record<ButtonType, {
        background: string;
        iconColor: string;
        backgroundHover: string;
        iconColorHover: string;
    }> ={
        primary: {
            background: '#b5d5ff',
            iconColor: '#2e3846',
            backgroundHover: '#2e3846',
            iconColorHover: '#b5d5ff',
        },
        secondary: {
            background: '#c6bdd4',
            iconColor: '#4c4655',
            backgroundHover: '#4c4655',
            iconColorHover: '#c6bdd4',
        }
    };

    const colors = colorSets[buttontype || 'primary'];

    return(
        <div className='slide_arrow_buttons'>
            <button
                className='prev'
                onClick={onPrevClick}
                style={{
                    backgroundColor: slideButtonBackground || colors.background,
                    color: slideButtonIconColor || colors.iconColor
                }}
                onMouseEnter={(e) =>{
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = slideButtonBackgroundHover || colors.backgroundHover;
                    (e.currentTarget as HTMLButtonElement).style.color = slideButtonIconColorHover || colors.iconColorHover;
                }}
                onMouseLeave={(e) =>{
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = slideButtonBackground || colors.background;
                    (e.currentTarget as HTMLButtonElement).style.color = slideButtonIconColor || colors.iconColor;
                }}
            >
                <IoIosArrowBack className='arrowIcons'/>
            </button>
            <button
                className='next'
                onClick={onNextClick}
                style={{
                    backgroundColor: slideButtonBackground || colors.background,
                    color: slideButtonIconColor || colors.iconColor
                }}
                onMouseEnter={(e) =>{
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = slideButtonBackgroundHover || colors.backgroundHover;
                    (e.currentTarget as HTMLButtonElement).style.color = slideButtonIconColorHover || colors.iconColorHover;
                }}
                onMouseLeave={(e) =>{
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = slideButtonBackground || colors.background;
                    (e.currentTarget as HTMLButtonElement).style.color = slideButtonIconColor || colors.iconColor;
                }}
            >
                <IoIosArrowForward className='arrowIcons' />
            </button>
        </div>
    );
};

export default ArrowButtons;