function sendEmail() {
    Email.send({
        SecureToken : "05c03e4d-4f2c-40ef-bb2a-3a9ca6cb5e2f",
        To : document.getElementById("email").value,
        From : 'hope91824@gmail.com',
        Subject : "Confirming your order",
        Body : "Thank you for your order. We will contact you shortly."
    }).then(
        window.location.href = "thankyou.html"
    );
}