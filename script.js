const shopName = "Xien Fitness Industry";
const currentYear = new Date().getFullYear();

let runningTotal = 0;

// 1. Display the shop name
const shopNameElement = document.getElementById("shop-name");

if (shopNameElement) {
    shopNameElement.textContent = shopName;
}

// 2. Display the copyright year
const copyrightElement = document.getElementById("copyright");

if (copyrightElement) {
    copyrightElement.textContent = `© ${currentYear} ${shopName}`;
}

// 3. Count membership cards on the page
const membershipCards = document.querySelectorAll(".product-card");
runningTotal = membershipCards.length;

let membershipCountElement = document.getElementById("membership-count");

if (!membershipCountElement) {
    membershipCountElement = document.createElement("p");
    membershipCountElement.id = "membership-count";

    const membershipSection = document.querySelector(".membership-cards");

    if (membershipSection) {
        membershipSection.insertAdjacentElement("afterend", membershipCountElement);
    }
}

if (membershipCountElement) {
    membershipCountElement.textContent =
        `Membership plans on this page: ${runningTotal}`;
}

// 4. STOCK STATUS DECISION
const stockCount = 5;
let stockMessage = "";

if (stockCount > 10) {
    stockMessage = "In stock";
} else if (stockCount >= 1 && stockCount <= 10) {
    stockMessage = "Only a few left";
} else if (stockCount === 0) {
    stockMessage = "Sold out";
} else {
    stockMessage = "Stock count unavailable";
}

// 5. FREE DELIVERY CHECK
const orderTotal = 1200;
const isMember = true;

const qualifiesForFreeDelivery = orderTotal >= 1000 && isMember;

const deliveryFee = qualifiesForFreeDelivery ? 0 : 150;
const finalTotal = orderTotal + deliveryFee;

// 6. SHOP OPEN OR CLOSED
const isShopOpen = true;

const shopStatus = isShopOpen ? "Open today" : "Closed today";

// 7. DISPLAY ALL THREE DECISIONS ON THE PAGE
function displayResult(id, message) {
    let element = document.getElementById(id);

    if (!element) {
        element = document.createElement("p");
        element.id = id;

        const container = document.querySelector("main") ||
                          document.querySelector(".hero") ||
                          document.body;

        container.appendChild(element);
    }

    element.textContent = message;
}

displayResult("stock-status", `Stock status: ${stockMessage}`);

displayResult(
    "delivery-result",
    `Order: ₱${orderTotal.toFixed(2)} | Delivery fee: ₱${deliveryFee.toFixed(2)} | Final total: ₱${finalTotal.toFixed(2)}`
);

displayResult("shop-status", shopStatus);

// 8. LABELLED CONSOLE MESSAGES
console.log("Shop name:", shopName);
console.log("Current year:", currentYear);
console.log("Membership plan count:", runningTotal);
console.log("Stock status:", stockMessage);
console.log("Free delivery:", qualifiesForFreeDelivery);
console.log("Final total:", finalTotal);
console.log("Shop status:", shopStatus);
