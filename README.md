## Description

Create beautiful responsive image galleries with easy to use React components.

## Instalation

`npm i -S react-stylish-gallery`

or

`yarn add react-stylish-gallery`

## Usage

```javascript
import React from 'react'
import { Gallery, Image, Overlay } from 'react-stylish-gallery'

export default () => (
  <Gallery withModal>
    <Image
      src='Your url'
      alt="Image 1"
    >
      <Overlay title="My first image">
    </Image>
    <Image
      src='Your url'
      alt="Image 2"
    >
      <Overlay title="My second image">
    </Image>
  </Gallery>
)
```

## API

### Galley properties

**Description**: Wrap your Image components inside the Gallery. Use it only if you have 2 or more Image components.

| Prop Name | Type    | Default | Requierd | Description                                                                                                   |
|-----------|---------|---------|----------|---------------------------------------------------------------------------------------------------------------|
| withModal | boolean | false   | false    | Defines if the images have modal when. clicked                                                                 |
| infinite  | boolean | false   | false    | Defines if the modal it's infinite (eg. after clicking 'next' on the last image, the first. image will appear) |
| theme     | object  | {}      | false    | Applies style to the Modal component.    


#### Theme object properties

**Note**: This object applies style only to the Modal component!

| Prop Name          | Type   | Default | Unit       | Options                                      | Description                                |
|--------------------|--------|---------|------------|----------------------------------------------|--------------------------------------------|
| animationEntrance  | string |         |            | scaleUp | slideDown | slideRight | slideLeft | Sets the entrance animation of the modal.  |
| animationExit      | string |         |            | sclaeDown | slideDown | slide Right |        | Sets the exit animation of the modal.      |
| animationTime      | number | 0       | s(seconds) |                                              | Sets the time of the animations.           |
| background         | string | #000    |            |                                              | Sets the background of the modal.          |
| rightIconClassName | string |         |            |                                              | Sets the className of the right side icon. |
| leftIconClassName  | string |         |            |                                              | Sets the className of the left side icon.  |
| rightIconName      | string |         |            |                                              | Sets the name of right side icon.          |
| leftIconName       | string |         |            |                                              | Sets the name of the left side icon.       |

### Image properties

**Description**: This is the component which contains the actual image. Adjust the size to change the space occupied by the flex.

| Prop Name | Type   | Default   | Requierd | Definition                                   |
|-----------|--------|-----------|----------|----------------------------------------------|
| src       | string |           | true     | Points to the source of your image           |
| alt       | string |           | true     | Alt in case image url is broke               |
| size      | number | 4         | false    | Size of the image in the row                 |
| height    | number | auto      | false    | Sets the height of the image                 |
| pading    | number | 0         | false    | Sets the padding of the image                |
| theme     | object |  {}       | true     | Applies style to the Image component         |
| className | string |           | false    | Applies style to the Image component         |
| onClick   |function|           | false    | Add custom function when clicking on the image        |

#### Theme object options

| Prop Name | Type   | Default | Unit | Description                                |
|-----------|--------|---------|------|--------------------------------------------|
| padding   | number | 0       | rem  | Set the total padding of the current image |
| height    | number | auto    | px   | Set the height of the current image        |

----------

### Overlay properties

**Description**: Use to add an overlay over the Image component which can also display a text.

| Prop Name | Type   | Default   | Requierd | Description                            |
|-----------|--------|-----------|----------|----------------------------------------|
| title     | string |  | false    | Displays a text over the overlay       |
| theme     | object | {}        | true     | Applies style to the Overlay component |


#### Theme object options

| Prop Name               | Type   | Default | Unit       | Options                                                                  | Description                                         |
|-------------------------|--------|---------|------------|--------------------------------------------------------------------------|-----------------------------------------------------|
| animationName           | string | fadeIn  |            | fadeIn | slideDown | slideUp | slideLeft | slideRight                    | Defines the overlay animation                       |
| animationDuration       | number | 0.4     | s(seconds) |                                                                          | Sets the duration of the animation                  |
| animationTimingFunction | string | ease-in |            | linear | ease | ease-in | ease-out | ease-in-out | step-start | step-end | Sets the animation timing function of the animation |
| background              | string | #000    |            |                                                                          | Sets the background of the overlay                  |
| opacity                 | number | 0.5     |            |                                                                          | Sets the opacity of the background                  |
| fontSize                | number | 3       | rem        |                                                                          | Sets the font size of the title                     |
| color                   | string | #fff    |            |                                                                          | Sets the color of the title                         |
