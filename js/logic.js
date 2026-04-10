   function verifyWithdrawal() {
    let  pricePurchase= Number(document.getElementById("purchasePrice").value);
    let hasDiscountCoupon = (document.getElementById("hasCoupon").value === "true");

    
// if you have a discount coupon, you get a 40% of discount

    if (hasDiscountCoupon === true && pricePurchase >= 50 && pricePurchase < 100) {
        document.getElementById("finalPrice").textContent = pricePurchase - (pricePurchase * 0.5);
    }else if (hasDiscountCoupon === true && pricePurchase >= 100) {
        document.getElementById("finalPrice").textContent = pricePurchase - (pricePurchase * 0.6);
    }else if (pricePurchase >= 100 && hasDiscountCoupon === false) {
        document.getElementById("finalPrice").textContent =  pricePurchase - (pricePurchase * 0.2);
    }else if (pricePurchase >= 50 && hasDiscountCoupon === false) {
        document.getElementById("finalPrice").textContent = pricePurchase - (pricePurchase * 0.1);
    }else if (hasDiscountCoupon === true) {
        document.getElementById("finalPrice").textContent = pricePurchase - (pricePurchase * 0.4);
    }else {
        document.getElementById("finalPrice").textContent = pricePurchase;

    }
}
