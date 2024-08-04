import React, { Component } from 'react';
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
    buttontype?: 'primary' | 'secondary';
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
    descriptionColor?: string;
    descriptionColorHover?: string;
    buttonColor?: string;
    buttonColorHover?: string;
    buttonNameColor?: string;
    buttonNameColorHover?: string;
}

class ElegantSmoothSlider extends Component<SlideProps> {
    interval: NodeJS.Timeout | null = null;

    componentDidMount() {
        const { automatedSlides, automatedDelay } = this.props;
        if (automatedSlides) {
            this.interval = setInterval(this.handleNext, (automatedDelay || 3) * 1000);
        }
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    handleNext = () => {
        const slideContainer = document.querySelector('.slide_images');
        if (slideContainer) {
            const items = slideContainer.children;
            if (items.length > 0) {
                const firstChild = items[0];
                if (firstChild) {
                    slideContainer.appendChild(firstChild);
                }
            }
        }
    };

    handlePrev = () => {
        const slideContainer = document.querySelector('.slide_images');
        if (slideContainer) {
            const items = slideContainer.children;
            if (items.length > 0) {
                const lastChild = items[items.length - 1];
                if (lastChild) {
                    slideContainer.prepend(lastChild);
                }
            }
        }
    };

    render() {
        const {
            slides = [],
            slideButtonBackground,
            slideButtonIconColor,
            slideButtonBackgroundHover,
            slideButtonIconColorHover,
            buttontype,
            imageTint = false,
            slidArrowButton = true,
            slideContent = true,
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
        } = this.props;

        return (
            <div className='slide_container'>
                <div className='container_section'>
                    <div className="slide_images">{/* slide */}
                        {slides.map((item, index) => (
                            <div
                                className={
                                    `slide 
                                    ${!subImages && 'subImage'}
                                    ${subImagePosition}`
                                }/* item */
                                style={{
                                    backgroundImage: imageTint
                                        ? `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url(${item.img})`
                                        : `url(${item.img})`
                                }}
                                key={index}
                            >
                                <div className='image_overlay'></div>
                                {slideContent &&
                                    <div className="slide_content">
                                        <div className="title" style={{ color: contentTitleColor }}>{contentTitle && item.title}</div>
                                        <div className="description" style={{ color: contentDescriptionColor }}>{contentDescription && item.description}</div>
                                        {contentLink && item.link &&
                                            <div className='slide_button'>
                                                <a href={item.link} style={{
                                                    backgroundColor: linkButtonColor || "#e6e6e6",
                                                    color: linkButtonTextColor || "#0f0f0f",
                                                }}
                                                    onMouseEnter={(e) => {
                                                        (e.currentTarget as HTMLElement).style.backgroundColor = linkButtonColorHover || "#0f0f0f";
                                                        (e.currentTarget as HTMLElement).style.color = linkButtonTextColorHover || "#e6e6e6";
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        (e.currentTarget as HTMLElement).style.backgroundColor = linkButtonColor || "#e6e6e6";
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
                                onPrevClick={this.handlePrev}
                                onNextClick={this.handleNext}
                                buttontype={buttontype}
                            />
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ElegantSmoothSlider;
