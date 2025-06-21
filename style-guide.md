# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

> 💡 These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.

## Colors

### Primary

- Orange: hsl(26, 100%, 55%)
- Pale orange: hsl(25, 100%, 94%)

### Neutral

- Very dark blue: hsl(220, 13%, 13%)
- Dark grayish blue: hsl(219, 9%, 45%)
- Grayish blue: hsl(220, 14%, 75%)
- Light grayish blue: hsl(223, 64%, 98%)
- White: hsl(0, 0%, 100%)
- Black (with 75% opacity for lightbox background): hsl(0, 0%, 0%)

## Typography

### Body Copy

- Font size (paragraph): 16px

### Font

- Family: [Kumbh Sans](https://fonts.google.com/specimen/Kumbh+Sans)
- Weights: 400, 700

> 💎 [Upgrade to Pro](https://www.frontendmentor.io/pro?ref=style-guide) for design file access to see all design details and get hands-on experience using a professional workflow with tools like Figma.



html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->

  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
  
  <title>Frontend Mentor | E-commerce product page</title>

  <!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->
  <style>
    .attribution { font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); }
  </style>
</head>
<body>

  Collections
  Men
  Women
  About
  Contact

  Sneaker Company

  Fall Limited Edition Sneakers

  These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.

  $125.00
  50%
  $250.00

  0
  Add to cart
  
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>
</body>
</html>












/..............



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container {
            background-color: beige;
            height: 250px;
            width: 200px;
            border: 2px black solid;
            padding: 15px;
            margin-top: 200px;
            position: relative;
            z-index: 2;
            display: none;

        }

        .clickhere {
            padding: 10px;
            border: 2px black solid;
            background-color: beige;
            z-index: 2;
            margin-top: 20px;


        }

        .overlay {
            background-color: black;
            opacity: 0.5;
            height: 50em;
            width: 95em;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            display: none;
        }
    </style>
</head>

<body>
    <button class="clickhere">click here for the popup</button>

    <div class="overlay">

    </div>

    <center>
        <div class="container">
            <h1 class="X"  style="text-align: right;cursor: pointer;font-size: 20px;">X</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis eligendi perspiciatis repellendus in
                beatae molestiae nesciunt dolore praesentium quam architecto aspernatur cumque aliquid voluptatibus,
                aperiam ex minus repellat ut tempore.</p>
        </div>

    </center>


    <script>
        var clickhere = document.querySelector(".clickhere")
        var container = document.querySelector(".container")
        var overlay=document.querySelector(".overlay")

        var X=document.querySelector(".X")

        clickhere.addEventListener("click",function(){
            container.style.display="block"
            overlay.style.display="block"
        })

        X.addEventListener("click",function(){
            container.style.display="none"
            overlay.style.display="none"
        })
        

        

    </script>
</body>

</html>