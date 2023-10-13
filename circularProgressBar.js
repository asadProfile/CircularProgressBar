/***
 * Author: MD Asad
 * Author URL: http://asadpro.com
 * You can use this anywhere,
 * Thanks for using this
 */

// Function to start circular progress animations
function startCircularProgressAnimations() {
  const circularProgressElements =
    document.querySelectorAll(".circular-progress");

  circularProgressElements.forEach((circularProgress) => {
    const progressValue = circularProgress.querySelector(".progress-value");
    const fill = circularProgress.getAttribute("data-fill");
    let progressStartValue = parseInt(
      circularProgress.getAttribute("data-start-value")
    );
    const progressEndValue = parseInt(
      circularProgress.getAttribute("data-end-value")
    );
    const speed = parseInt(circularProgress.getAttribute("data-speed"));
    const speedFactor = (progressEndValue - progressStartValue) / 2; // Calculate a speed factor

    const updateProgress = () => {
      if (progressStartValue <= progressEndValue) {
        progressStartValue++;
        progressValue.textContent = `${progressStartValue}%`;
        progressValue.style.color = fill;
        circularProgress.style.background = `conic-gradient(${fill} ${
          progressStartValue * 3.6
        }deg, #ededed 0deg)`;
        // Calculate varying speed based on progress
        const dynamicSpeed =
          speed -
          Math.abs(
            progressStartValue - (progressStartValue + progressEndValue) / 2
          ) *
            (speed / speedFactor);

        if (progressStartValue < progressEndValue) {
          setTimeout(updateProgress, dynamicSpeed);
        }
      }
    };

    updateProgress();
  });
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

let isObserving = false;

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startCircularProgressAnimations();
      observer.disconnect(); // Stop observing once animations start
    }
  });
}, options);

// Function to observe an element by its ID
function observeElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    observer.observe(element); // Start observing the specified element
    isObserving = true;
  }
}

// Check if observeElement has been called, and run animations accordingly
if (!isObserving) {
  startCircularProgressAnimations();
}
/***
 * Author: MD Asad
 * Author URL: http://asadpro.com
 * You can use this anywhere,
 * Thanks for using this
 */
