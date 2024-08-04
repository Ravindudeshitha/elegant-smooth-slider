
# Elegant Smooth Slider

![npm](https://img.shields.io/npm/v/elegant-smooth-slider) 

![license](https://img.shields.io/npm/l/elegant-smooth-slider)

#

Elegant Smooth Slider is a customizable image slider component for React applications. It allows you to display an array of images with various details and provides a smooth sliding effect.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [API](#api)
- [License](#license)
## Installation

You can install this package using npm:

```bash
npm install elegant-smooth-slider
```
Or using yarn

```bash
yarn add elegant-smooth-slider
```
## Usage


```jsx
import React from 'react';
import ElegantSmoothSlider from 'elegant-smooth-slider';

const data = [
    { 
        img: "https://elegant-smooth-slider/img1.jpg", 
        title: "Elegant Smooth Slider ", description: "Elegant Smooth Slider is a customizable image slider component", 
        link: "https://elegant-smooth-slider/" 
    },
    
];

const App = () => {
  return (
    <div>
      <ElegantSmoothSlider 
        slides={data}
        automatedSlides={true}      {* Slide automated or not *}
        automatedDelay= {3}   {* Delay time in seccond ( if you want)*}
        slideButtonBackground="#e6e6e6"
        slideButtonIconColor="#000000"
        slideButtonBackgroundHover="#cccccc"
        slideButtonIconColorHover="#333333"
        buttontype="primary"        {* 'primary'  or  'secondary' *}
        imageTint={true}
        slidArrowButton={true}
        slideContent={true}
        contentTitle={true}
        contentDescription={true}
        contentLink={true}
        contentTitleColor="#f0f0f0"
        contentDescriptionColor="#f0f0f0"
        linkButtonColor="#e6e6e6"
        linkButtonColorHover="#cccccc"
        linkButtonTextColor="#000000"
        linkButtonTextColorHover="#333333"
        subImages={true}            
        subImagePosition="bottom"        {* 'bottom'  ,  'center' , 'top' *}
      />
    </div>
  );
};

export default App;


```
## ElegantSmoothSlider (Props)

|Name|Type|Default| Description|
|:-|:-|:-|:-|
|slides	|array|	NO Default|	Array of slide items.|
|automatedSlides	|boolean	|true	|Whether slides should auto-slide (optional).|
|automatedDelay |number| 3s| Delay od slide animation in seccond (optional).|
|slideButtonBackground	|string	|#e6e6e6	|Background color of slide buttons (optional).|
|slideButtonIconColor	|string	|#000000	|Icon color of slide buttons (optional).|
|slideButtonBackgroundHover	|string	|#cccccc	|Hover background color of slide buttons (optional).|
|slideButtonIconColorHover	|string	|#333333	|Hover icon color of slide buttons (optional).|
|buttontype	|string	|'primary'	|Type of button ('primary' or 'secondary') (optional).|
|imageTint	|boolean	|false	|Whether images should have a tint (optional).|
|slidArrowButton	|boolean	|true	|Whether to show slide arrow buttons (optional).|
|slideContent	|boolean	|true	|Whether to display content (title, description) (optional).|
|contentTitle	|boolean	|true	|Whether to display the content title (optional).|
|contentDescription	|boolean	|true	|Whether to display the content description (optional).|
|contentLink	|boolean	|true	|Whether to display the content link (optional).|
|contentTitleColor	|string	|#f0f0f0	|Color of the content title (optional).|
|contentDescriptionColor	|string	|#f0f0f0	|Color of the content description (optional).|
|linkButtonColor	|string	|#e6e6e6	|Background color of link buttons (optional).|
|linkButtonColorHover	|string	|#cccccc	|Hover background color of link buttons (optional).|
|linkButtonTextColor	|string	|#000000	|Text color of link buttons (optional).|
|linkButtonTextColorHover	|string	|#333333	|Hover text color of link buttons (optional).|
|subImages	|boolean	|true	|Whether to display sub-images (optional).|
|subImagePosition	|string	|'bottom'	|Position of sub-images ('bottom' , 'center' or 'top')   (optional).|



## Slide Items Types 

|Key	|Type	|Default	|Description|
|:-|:-|:-|:-|
|img	|string	|N/A	|Image link|
|title	|string	|N/A	|Title of the slide (optional)|
|description	|string	|N/A	|Description of the slide (optional)|
|link	|string	|N/A	|URL link for the slide (optional)|
|buttonName	|string	|N/A	|Name of the button (optional)|
|titleColor	|string	|N/A	|Color of the title (optional)|
|titleColorHover	|string	|N/A	|Hover color of the title (optional)|
|descriptionColor	|string	|N/A	|Color of the description (optional)|
|descriptionColorHover	|string	|N/A	|Hover color of the description (optional)|
|buttonColor	|string	|N/A	|Color of the button (optional)|
|buttonColorHover	|string	|N/A	|Hover color of the button (optional)|
|buttonNameColor	|string	|N/A	|Color of the button name (optional)|
|buttonNameColorHover	|string	|N/A	|Hover color of the button name (optional)|


### Example Of Array Of Data

```jsx
    [
        { 
            img: "https://elegant-smooth-slider/img1.jpg", 
            title: "Elegant Smooth Slider ", description: "Elegant Smooth Slider is a customizable image slider component", 
            link: "https://elegant-smooth-slider/",
            buttonName: "See More",
            titleColor:
            titleColorHover:
            descriptionColor:
            descriptionColorHover:
            buttonColor:
            buttonColorHover:
            buttonNameColor:
            buttonNameColorHover:
        },
        
    ];

```
<div style="display: flex; justify-content: space-around;">
  <img src="https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg" alt="screenshot" width="300" height="200" />
  <img src="https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg" alt="screenshot" width="300" height="200" />
</div>