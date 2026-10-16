
const shopName = "Xien Fitness Industry";
const currentYear = new Date().getFullYear();

let runningTotal = 0;

// Display the shop name
const shopNameElement = document.getElementById("shop-name");

if (shopNameElement) {
    shopNameElement.textContent = shopName;
}

// Display the current copyright year
const copyrightElement = document.getElementById("copyright");

if (copyrightElement) {
    copyrightElement.textContent = `© ${currentYear} ${shopName}`;
}

// Calculate the number of membership cards
const membershipCards = document.querySelectorAll(".product-card");
runningTotal = membershipCards.length;

// Display the calculated result
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
        `Available membership plans: ${runningTotal}`;
}

// Three labelled console messages
console.log("Shop name:", shopName);
console.log("Current year:", currentYear);
console.log("Membership plan count:", runningTotal);
