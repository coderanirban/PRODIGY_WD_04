/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
     e.preventDefault()
     
     //serviceID - templateID - #form - publickey
     emailjs.sendForm('service_ejouy0w','template_hb9ixzb','#contact-form','2_Eru7OTwwAVXGVxc')
        .then(() => {
        //show sent message
        contactMessage.textContent = ' Message sent successfully ✅'

        //Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        //Clear input fields
        contactForm.reset()
     }, () => {
        //show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
     })
}

contactForm.addEventListner('submit', sendEmail)

