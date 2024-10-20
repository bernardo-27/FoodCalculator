function clickpares() {
    let pares = document.getElementsByName("pares");
    let paresToppings = document.getElementsByName("paresToppings");
    let paresDrinks = document.getElementsByName("paresDrinks");
    let selectedPares = 0;
    let selectedToppings = 0;
    let selectedDrinks = 0;
    let grandTotal = 0;

    for (var i = 0; i < pares.length; i++) {
        if (pares[i].checked) {
            selectedPares = pares[i].value;
            break;
        }
    }

    for (var i = 0; i < paresToppings.length; i++) {
        if (paresToppings[i].checked) {
            selectedToppings = paresToppings[i].value;
            break;
        }
    }
    
    for (var i = 0; i < paresDrinks.length; i++) {
        if (paresDrinks[i].checked) {
            selectedDrinks = paresDrinks[i].value;
            break;
        }
    }

    grandTotal = Number(selectedPares) + Number(selectedToppings) + Number(selectedDrinks);
    document.getElementById("total").innerHTML = "Php " + grandTotal.toFixed(2);

    var selectedFlavor = document.querySelector('input[name="pares"]:checked');
    if (selectedFlavor) {
        var flavorID = selectedFlavor.id;
        var flavorImage = document.getElementById('i' + flavorID);
        var imgSizeElements = document.querySelectorAll('.imgToppings');

        if (flavorImage && imgSizeElements.length > 0) {
            var imgSrc = flavorImage.src;

            imgSizeElements.forEach(function(newImgElement) {
                newImgElement.src = imgSrc;
            });
        } else {
            console.error('Image elements not found');
        }
    } else {
        alert('Please select a Pares Size before Toppings and Drinks.');
    }
}