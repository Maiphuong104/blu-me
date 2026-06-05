function fnct(){
    const variable = document.getElementById('variable');
    const fontSize = document.getElementById('fontSize');
    const lineHeight = document.getElementById('lineHeight');
    const customAxis = document.getElementById('customAxis');
    
    const fontSizeValue = document.getElementById('fontSizeValue');
    const lineHeightValue = document.getElementById('lineHeightValue');
    const customAxisValue = document.getElementById('customAxisValue');

    function updateStyles() {
        variable.style.fontSize = `${fontSize.value}px`;
        variable.style.lineHeight = lineHeight.value;
        variable.style.fontVariationSettings = `"BLUM" ${customAxis.value}`;
        
        fontSizeValue.textContent = fontSize.value;
        lineHeightValue.textContent = lineHeight.value;
        customAxisValue.textContent = customAxis.value;
    }

    fontSize.addEventListener('input', updateStyles);
    lineHeight.addEventListener('input', updateStyles);
    customAxis.addEventListener('input', updateStyles);

    // Initial update

    updateStyles();


	var showButton = document.getElementById("showButton");
    var hiddenText = document.getElementById("hiddenText");
    console.log("Here");
    // Ẩn đoạn text ban đầu
    try{hiddenText.style.display = "none";} catch {};

    showButton.addEventListener("click", function() {
        if (hiddenText.style.display === "none") {
            hiddenText.style.display = "block";
        } else {
            hiddenText.style.display = "none";
        }
        console.log("Fired");
    });

    var showButton2 = document.getElementById("showButton2");
    var hiddenText2 = document.getElementById("hiddenText2");
    // Ẩn đoạn text ban đầu
    try{hiddenText2.style.display = "none";} catch {};
    showButton2.addEventListener("click", function() {
        if (hiddenText2.style.display === "none") {
            hiddenText2.style.display = "block";
        } else {
            hiddenText2.style.display = "none";
        }
    });

    var showButton3 = document.getElementById("showButton3");
    var hiddenText3 = document.getElementById("hiddenText3");
    // Ẩn đoạn text ban đầu
    try{hiddenText3.style.display = "none";} catch {};
    showButton3.addEventListener("click", function() {
        if (hiddenText3.style.display === "none") {
            hiddenText3.style.display = "block";
        } else {
            hiddenText3.style.display = "none";
        }
    });

    var showButton4 = document.getElementById("showButton4");
    var hiddenText4 = document.getElementById("hiddenText4");
    // Ẩn đoạn text ban đầu
    try{hiddenText4.style.display = "none";} catch {};
    showButton4.addEventListener("click", function() {
        if (hiddenText4.style.display === "none") {
            hiddenText4.style.display = "block";
        } else {
            hiddenText4.style.display = "none";
        }
    });

    var showButton5 = document.getElementById("showButton5");
    var hiddenText5 = document.getElementById("hiddenText5");
    // Ẩn đoạn text ban đầu
    try{hiddenText5.style.display = "none";} catch {};

    showButton5.addEventListener("click", function() {
        if (hiddenText5.style.display === "none") {
            hiddenText5.style.display = "block";
        } else {
            hiddenText5.style.display = "none";
        }
    });

    var showButton6 = document.getElementById("showButton6");
    var hiddenText6 = document.getElementById("hiddenText6");
    // Ẩn đoạn text ban đầu
    try{hiddenText6.style.display = "none";} catch {};

    showButton6.addEventListener("click", function() {
        if (hiddenText6.style.display === "none") {
            hiddenText6.style.display = "block";
        } else {
            hiddenText6.style.display = "none";
        }


    });

}