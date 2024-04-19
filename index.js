// Function to track froyo flavors
function trackFroyoFlavors() {
    // Prompt user for froyo flavors
    let userInput = prompt("Enter froyo flavors separated by commas:","vanilla,vanilla,vanilla,strawberry,coffee,coffee");

    // Parse user input into an array of froyo flavors
    let flavorsArray = userInput.split(",").map(flavor => flavor.trim());

    // Object to track observed flavors
    let observedFlavors = {};

    // Iterate through the array of flavors
    for (let flavor of flavorsArray) {
        // Update the observed flavors object
        if (observedFlavors[flavor]) {
            observedFlavors[flavor]++;
        } else {
            observedFlavors[flavor] = 1;
        }
    }

    // Log the observed flavors object
    console.log("Observed Flavors: " );
    console.log(observedFlavors);
    
}

// Call the function to track froyo flavors
trackFroyoFlavors();
