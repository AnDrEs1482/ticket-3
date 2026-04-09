   function verifyWithdrawal() {
    let  pricePurchase= Number(document.getElementById("pricePurchase").value);
    let haveDiscountCoupon = (document.getElementById("haveCoupon").value === "true");

    
// if you have a discount coupon, you get a 40% of discount

    if (haveDiscountCoupon === true && pricePurchase >= 50 && pricePurchase < 100) {
        document.getElementById("totalAmount").textContent = pricePurchase - (pricePurchase * 0.5);
    }else if (haveDiscountCoupon === true && pricePurchase >= 100) {
        document.getElementById("totalAmount").textContent = pricePurchase - (pricePurchase * 0.6);
    }else if (pricePurchase >= 100 && haveDiscountCoupon === false) {
        document.getElementById("totalAmount").textContent =  pricePurchase - (pricePurchase * 0.2);
    }else if (pricePurchase >= 50 && haveDiscountCoupon === false) {
        document.getElementById("totalAmount").textContent = pricePurchase - (pricePurchase * 0.1);
    }else if (haveDiscountCoupon === true) {
        document.getElementById("totalAmount").textContent = pricePurchase - (pricePurchase * 0.4);
    }else {
        document.getElementById("totalAmount").textContent = pricePurchase;

    }
}
