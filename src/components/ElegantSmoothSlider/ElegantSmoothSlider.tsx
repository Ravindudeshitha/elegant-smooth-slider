import { useEffect, useRef } from 'react';
import './elegantSmoothSlider.css';
import ArrowButtons from '../ArrowButtons/ArrowButtons';

export interface SlideProps extends React.HTMLAttributes<HTMLElement> {
    slides?: SlideItem[];
    automatedSlides?: boolean;
    automatedDelay?: number;
    slideButtonBackground?: string;
    slideButtonIconColor?: string;
    slideButtonBackgroundHover?: string;
    slideButtonIconColorHover?: string;
    buttontype?: 'primary' |'secondary';
    imageTint?: boolean;
    slidArrowButton?: boolean;
    slideContent: boolean;
    contentTitle?: boolean;
    contentDescription?: boolean;
    contentLink?: boolean;
    contentTitleColor?: string;
    contentDescriptionColor?: string;
    linkButtonColor?: string;
    linkButtonColorHover?: string;
    linkButtonTextColor?: string;
    linkButtonTextColorHover?: string;
    subImages?: boolean;
    subImagePosition?: SubImagePosition;
}

type SubImagePosition = 'top' | 'center' | 'bottom';

type SlideItem = {
    img: string;
    title?: string;
    description?: string;
    link?: string;
    buttonName?: string;
    titleColor?: string;
    titleColorHover?: string;
    descreptionColor?: string;
    descreptionColorHover?: string;
    buttonColor?: string;
    buttonColorHover?: string;
    buttonNameColor?: string;
    buttonNameColorHover?: string;
}

const ElegantSmoothSlider: React.FC<SlideProps> = ({
    slides = [],
    automatedSlides= false,
    automatedDelay = 3,
    slideButtonBackground,
    slideButtonIconColor,
    slideButtonBackgroundHover,
    slideButtonIconColorHover,
    buttontype,
    imageTint = false,
    slidArrowButton = true,
    slideContent= true,
    contentTitle = true,
    contentDescription = true,
    contentLink = true,
    contentTitleColor = "#f0f0f0",
    contentDescriptionColor = "#f0f0f0",
    linkButtonColor,
    linkButtonColorHover,
    linkButtonTextColor,
    linkButtonTextColorHover,
    subImages = true,
    subImagePosition = 'center',
}) => {
    const slideRef = useRef<HTMLDivElement>(null);

    const handleNext = () => {
        if (slideRef.current) {
            const items = slideRef.current.children;
            if (items.length > 0) {
                const firstChild = items[0];
                if (firstChild) {
                    slideRef.current.appendChild(firstChild);
                }
            }
        }
    };

    const handlePrev = () => {
        if (slideRef.current) {
            const items = slideRef.current.children;
            if (items.length > 0) {
                const lastChild = items[items.length - 1];
                if (lastChild) {
                    slideRef.current.prepend(lastChild);
                }
            }
        }
    };

    useEffect(() =>{
        let interval: NodeJS.Timeout | null = null;

        if (automatedSlides) {
            interval = setInterval(handleNext, automatedDelay * 1000);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [automatedSlides])

    return (
        <div className='slide_container'>
            <div className='container'>
                <div className="slide_images" ref={slideRef}>{/* slide */}
                    {slides.map((item, index) => (
                        <div
                            className={
                                `slide 
                                ${!subImages && 'subImage'}
                                ${subImagePosition}`
                            }/* item */
                            style={{
                                backgroundImage: imageTint
                                    ?   `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url(${item.img})`
                                    :   `url(${item.img})`
                            }}
                            key={index}
                        >
                            {slideContent && 
                                <div className="slide_content">
                                    <div className="title" style={{color: contentTitleColor}}>{contentTitle && item.title}</div>
                                    <div className="description" style={{color: contentDescriptionColor}}>{contentDescription && item.description}</div>
                                    {contentLink && item.link &&  
                                        <div className='slide_button'
                                            
                                        >
                                            <a href={item.link} style={{
                                                backgroundColor: linkButtonColor || "#e6e6e6",
                                                color: linkButtonTextColor || "#0f0f0f",
                                            }}
                                            onMouseEnter={(e) =>{
                                                (e.currentTarget as HTMLElement).style.backgroundColor = linkButtonColorHover || "#0f0f0f";
                                                (e.currentTarget as HTMLElement).style.color = linkButtonTextColorHover || "#e6e6e6";
                                            }}
                                            onMouseLeave={(e) =>{
                                                (e.currentTarget as HTMLElement).style.backgroundColor = linkButtonColorHover || "#e6e6e6";
                                                (e.currentTarget as HTMLElement).style.color = linkButtonTextColor || "#0f0f0f";
                                            }}>
                                                See More
                                            </a>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    ))}
                </div>
                <div className="slide_arrow_button">
                    {slidArrowButton && 
                        <ArrowButtons 
                            slideButtonBackground={slideButtonBackground}
                            slideButtonIconColor={slideButtonIconColor}
                            slideButtonBackgroundHover={slideButtonBackgroundHover} 
                            slideButtonIconColorHover={slideButtonIconColorHover}
                            onPrevClick={handlePrev} 
                            onNextClick={handleNext}
                            buttontype={buttontype}
                        />
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default ElegantSmoothSlider;
