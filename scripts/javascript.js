document.getElementById("main-action-button").onclick = function () {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

const links = document.querySelectorAll(".menu-item > a");
links.forEach(link => {
    link.onclick = function() {
        document.getElementById(link.getAttribute("data-link")).scrollIntoView({ behavior: "smooth" });
    };
});
const buttons = document.querySelectorAll(".products-item .button");
buttons.forEach(button => {
    button.onclick = function() {
        document.getElementById("order").scrollIntoView({ behavior: "smooth" });
    };
});
const prices = document.querySelectorAll(".products-item-price");
document.getElementById("change-currency").onclick = function (e) {
    const currentCurrency = e.target.innerText; 
    let newCurrency = "$";
    let coefficient = 1;
    if (currentCurrency === "$") {
        newCurrency = "₽";
        coefficient = 90;
    } else if (currentCurrency === "₽") {
        newCurrency = "BYN";
        coefficient = 3; 
    }  else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }
    e.target.innerText = newCurrency;
    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency; 
    };
};

const product = document.querySelector(".order-form-inputs input:nth-child(1)");
const name = document.querySelector(".order-form-inputs input:nth-child(2)");
const phone = document.querySelector(".order-form-inputs input:nth-child(3)");
const orderButton = document.querySelector(".order-form-inputs .violet-button");

orderButton.onclick = function () {
    let hasError = false;

    [product, name, phone].forEach(item => {
        if (!item.value) {
            item.style.borderColor = "red";
            hasError = true;
        } else {
            item.style.borderColor = "";
        }
    });

    if (!hasError) {
        [product, name, phone].forEach(item => {
            item.value = "";
        });
        alert("Спасибо за Ваш заказ!");
    }
};
