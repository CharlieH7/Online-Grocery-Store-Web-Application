function sendEmail() {
  var name = document.getElementById("name").value;
  var address = document.getElementById("address").value;
  var suburb = document.getElementById("suburb").value;
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var date = new Date();


  Email.send({
    SecureToken: "05c03e4d-4f2c-40ef-bb2a-3a9ca6cb5e2f",
    To: document.getElementById("email").value,
    From: "hope91824@gmail.com",
    Subject: "Confirming your order",
    Body: `<p>Dear ${name},</p>
    <p>Thank you for your order. <p>We have received your order on ${date}</p><p>Your items will be shipped to the following address:</p>
    <p>${address}, ${suburb}, ${state}, ${country}</p>
    <p>Your phone number is ${phone} and your email is ${email}.</p>
    <p>Best regards,</p><p>Fresh Choice Grocery</p>`,
  }).then((window.location.href = "thankyou.html"));
}
