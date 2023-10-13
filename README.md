# Circular Progress Bar Plugin Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)

## 1. Introduction<a name="introduction"></a>

The Circular Progress Bar plugin is a simple JavaScript plugin created by MD Asad. It allows you to easily create and display circular progress animations on your web page. The plugin is designed to be flexible and customizable, making it suitable for a variety of use cases, such as showcasing progress, skills, or any other data that can be represented with a percentage.

## 2. Installation<a name="installation"></a>

To use the Circular Progress Bar plugin, you need to include two files in your HTML document:

- **circularProgressBar.css**: This CSS file provides the styles for the circular progress bars.
- **circularProgressBar.js**: This JavaScript file contains the plugin logic.

Here is an example of how to include these files in your HTML document:

```
<html lang="en">
  <head>
    <!-- ... other meta tags and title ... -->
    <link rel="stylesheet" href="./circularProgressBar.css" />
  </head>
  <body>
    <!-- ... your content ... -->
    <script src="./circularProgressBar.js"></script>
  </body>
</html>

```

3. Usage<a name="usage"></a>
   To use the Circular Progress Bar plugin on your web page, follow these steps:

Include the necessary CSS and JavaScript files as described in the installation section.

Create a container element with the class "circular-progress" to represent each circular progress bar. For example:

```
<div class="circular-progress"
  data-fill="#00AFE5"
  data-start-value="0"
  data-end-value="95"
  data-speed="100"
>
  <span class="progress-value">0%</span>
</div>
```

You can add as many circular progress bars as needed within your content.

Customize the circular progress bars by setting the following attributes:

- **data-fill:** The fill color for the circular progress bar. use hex color.
- **data-start-value:** The initial value of the progress (usually 0%).
- **data-end-value:** The target value that the progress should reach (e.g., 95%).
- **data-speed:** The animation speed in milliseconds (e.g., 100).

Initialize the **Circular Progress Bar** by calling the **observeElement** function in your JavaScript

code. Pass the id of the HTML element you want to observe for visibility. For example:

```
<script>
  observeElement("welcome");
</script>
```

**Note**
Passing the section id welcome so that when user scroll to the section, It will start showing progress bar. But this is optional. Otherwise, it will start immedeatly when page loads.

Thank you for using the Circular Progress Bar plugin. If you have any questions or need further assistance, please visit the [author&#39;s website](http://asadpro.com/) for more information and support.

Enjoy adding interactive circular progress bars to your web pages!

## Find Me:

**[http://asadpro.com](http://asadpro.com)**

Have a great day.

Asad
