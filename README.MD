HTML Code Explanation
=====================

### `index.html`

This is the main HTML file for the People Over Profit - Boycott Divest Sanction (BDS) Web Application.

### `<!DOCTYPE html>` and `<html lang="en">`

These lines declare the document type as HTML5 and specify the language as English.

### `<head>`

The `<head>` section contains metadata about the document.

### `<meta charset="UTF-8">`

Specifies the character encoding as UTF-8.

### `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

Sets the viewport settings for mobile devices.

### `<title>People Over Profit</title>`

Sets the title of the page.

### `<link rel="stylesheet" href="css/style.css">`

Links to an external stylesheet (`css/style.css`) that provides styles for the HTML elements.

### `<body>`

The `<body>` section contains the content of the HTML document.

### `<div class="container">`

A container element that holds all the content.

### `<h1>Boycott Divest Sanction [B.D.S]</h1>`

Displays the title "Boycott Divest Sanction [B.D.S]".

### `<div id="company-list"></div>`

An empty div element that will display the list of companies.

### `<form id="add-company-form">`

A form for adding new companies.

### `<label>` and `<input>` elements

These elements are used to collect user input for company name, logo URL, and description.

### `<button type="submit">Add Company</button>`

A submit button to add a new company.

### `<form id="edit-company-form" style="display: none;">`

A form for editing existing companies (hidden by default).

### `<input>` elements

These elements are used to collect user input for company name, logo URL, and description.

### `<button type="submit">Update Company</button>`

A submit button to update an existing company.

### `<button type="button" onclick="cancelEdit()">Cancel</button>`

A cancel button to cancel the edit operation.

### `<script src="js/script.js"></script>`

Links to an external JavaScript file (`js/script.js`) that provides functionality for the application.


# CSS Code Explanation
=====================

This CSS code is designed to style a web page that displays a list of companies with their logos, names, and descriptions. It also includes a form for adding new companies.

## Body Styles

The body styles set the overall layout and design of the page. The `font-family` property sets the font family to 'Segoe UI', Tahoma, Geneva, Verdana, and sans-serif as a fallback. The `background-color` property sets the background color to bisque. The `margin` and `padding` properties reset the margin and padding to 0. The `display` property sets the display property to flex, which allows us to center the container horizontally and vertically. The `justify-content` and `align-items` properties center the container both horizontally and vertically. The `min-height` property sets the minimum height of the body to 100vh, which means the container will take up the full height of the viewport.

## Container Styles

The container styles define the layout and design of the container element. The `width` and `max-width` properties set the width of the container to 80% and a maximum width of 900px. The `background-color` property sets the background color to lightblue. The `padding` property sets the padding to 20px. The `border-radius` property sets the border radius to 10px. The `box-shadow` property adds a subtle shadow effect to the container.

## Company List Styles

The company list styles define the layout and design of the company list element. The `display` property sets the display property to grid, which allows us to create a grid layout for the company list. The `grid-template-columns` property sets the grid template columns to repeat auto-fit, which means the grid will automatically fit the columns within the container's width. The `gap` property sets the gap between grid items to 20px.

## Company Styles

The company styles define the layout and design of individual company elements. The `background-color` property sets the background color to beige. The `padding` property sets the padding to 15px. The `border-radius` property sets the border radius to 8px. The `box-shadow` property adds a subtle shadow effect to the company element. The `transition` property sets the transition effect to transform 0.2s ease-in-out, which creates a smooth animation effect when the company element is hovered.
n/b the transitions are used coz they make the doc lively
## Form Styles

The form styles define the layout and design of the form element. The `margin-bottom` property sets the margin bottom to 20px. The `label` styles define the layout and design of form labels. The `input` and `textarea` styles define the layout and design of form input fields. The `button` styles define the layout and design of form buttons.

## Media Queries

The media queries define the layout and design of the page for smaller devices such as tablets and phones. The `@media` rule sets the maximum width to 768px, and the `.container` styles define the layout and design of the container element for smaller devices.
