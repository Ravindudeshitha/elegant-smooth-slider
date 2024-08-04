
# Elegant Smooth Slider

![npm](https://img.shields.io/npm/v/elegant-smooth-slider) 

![license](https://img.shields.io/npm/l/elegant-smooth-slider)

#

Elegant Smooth Slider is a customizable image slider component for React applications. It allows you to display an array of images with various details and provides a smooth sliding effect.


### Component Preview

<div style="display: flex; justify-content: space-around; ">
  <img src="https://github.com/user-attachments/assets/08f9dff6-1c08-4d36-88a7-5818e24ada71" alt="screenshot" style="height=300 " />
  <img src="https://github.com/user-attachments/assets/f2ffe01a-670e-47e6-8ee1-17c3055881a8" alt="screenshot" style="height=300 " />
  <img src="https://github.com/user-attachments/assets/b25dcdf3-0130-4881-9a82-49a9bd5e592a" alt="screenshot" style="height=300 " />
</div>


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


<!-- ## Elegant-smooth-slider Props Views
```jsx
  Default View
```
  <img src="https://github.com/user-attachments/assets/a9d89101-9c57-43a8-a689-9422debddd86" alt="screenshot" style="height=300 " />

```jsx
  imageTint: true,
```
  <img src="https://github.com/user-attachments/assets/cc844114-f5d0-4260-bc36-fd47d822e19c" alt="screenshot" style="height=300 " />

```jsx
  slidArrowButton: false,
```
  <img src="https://github.com/user-attachments/assets/d79046e8-5b37-44b2-9a9b-cdd7fc4efffb" alt="screenshot" style="height=300 " />

```jsx
  slideContent: false,
```
  <img src="https://github.com/user-attachments/assets/b428f978-a4e7-4efb-8c01-a18cb9a3079e" alt="screenshot" style="height=300 " />

```jsx
  contentTitle: false,
```
  <img src="https://github.com/user-attachments/assets/dbe6e41a-fe4a-409b-b1a1-23a31dcec3bf" alt="screenshot" style="height=300 " />

```jsx
  contentDescription: false,
```
  <img src="https://github.com/user-attachments/assets/840617a8-e941-4c1b-ae8d-c6b2ff693dc5" alt="screenshot" style="height=300 " />

```jsx
  contentLink: false,
```
  <img src="https://github.com/user-attachments/assets/b8e3eaf9-8572-4b2c-832e-3a4b004b8e13" alt="screenshot" style="height=300 " />

```jsx
  subImages: false,
```
  <img src="https://github.com/user-attachments/assets/637840ea-4f83-456e-a36e-27d6605b3a91" alt="screenshot" style="height=300 " />


```jsx
  subImagePosition: 'bottom',
```
<div style="display: flex; justify-content: space-around; ">
  <img src="https://github.com/user-attachments/assets/a9d89101-9c57-43a8-a689-9422debddd86" alt="screenshot" style="height=300 " />
  <img src="https://github.com/user-attachments/assets/6edc82fb-44ed-4095-842f-dbba259746c2" alt="screenshot" style="height=300 " />
  <img src="https://github.com/user-attachments/assets/4d59c7c3-76c0-4740-871c-dbf5491be993" alt="screenshot" style="height=300 " />
</div>

```jsx
  subImagePosition: 'center',
```
<div style="display: flex; justify-content: space-around; ">
  <img src="https://github.com/user-attachments/assets/8b22684d-a6ca-4668-958c-0f89abb40cf7" alt="screenshot" style="height=300 " />
  <img src="https://github.com/user-attachments/assets/52bb0fa1-0859-45c5-afc8-e86186cad100" alt="screenshot" style="height=300 " />
  <img src="https://github.com/user-attachments/assets/a23ed002-8dad-4a8a-bf79-e5a5e76691b5" alt="screenshot" style="height=300 " />
</div>

```jsx
  subImagePosition: 'top',
```
<div style="display: flex; justify-content: space-around; ">
  <img src="https://github.com/user-attachments/assets/b88e439a-a955-4d4e-ad2c-864ffa78f22d" alt="screenshot" style="height=300 " />
  <img src="https://github.com/user-attachments/assets/d7ff8950-f0ed-4ebf-98f6-3206a43bdce5" alt="screenshot" style="height=300 " />
  <img src="https://github.com/user-attachments/assets/e03c39f9-f988-4da5-9c94-8b1149412820" alt="screenshot" style="height=300 " />
</div> -->