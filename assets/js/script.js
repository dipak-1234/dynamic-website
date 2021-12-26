$('.image-carousel').owlCarousel({
    items: 1,

    loop: true,
    dots: false,
    smartSpeed: 1500,
    autoplay: true
})

$('.cards-carousel').owlCarousel({
    items: 1,

    loop: true,
    smartSpeed: 1500,
    autoplay: true,
    responsive: {
        992 : {
            items: 3
        },
        768 : {
            items: 2
        }
    }
})

$('.expert-member-carousel').owlCarousel({
    items: 1,

    dotsEach: true,
    loop: true,
    rewindNav: true,
    smartSpeed: 1500,
    autoplay: true,
    responsive: {
        992 : {
            items: 3
        },
        768 : {
            items: 2
        }
    }
})

$('.banner-carousel').owlCarousel({
    items: 1,

    nav: true,
    // loop: false,
    rewind: true,
    smartSpeed: 1500,
    autoplay: true,
    afterAction: function() {
        if (this.itemsAmount > this.visibleItems.length) {
           $('.owl-next').show();
           $('.owl-prev').show();
     
           $('.owl-next').removeClass('disabled');
           $('.owl-prev').removeClass('disabled');
           if (this.currentItem == 0) {
              $('.owl-prev').addClass('disabled');
           }
           if (this.currentItem == this.maximumItem) {
              $('.owl-next').addClass('disabled');
           }
     
        } else {
           $('.owl-next').hide();
           $('.owl-prev').hide();
        }
     }
})

$(document).ready(function() {
    // Cycles through each of the links in the nav
    $('.nav-item a').each(function() {
        // compares the href of the nav and element to the URL page
        if (this.href == window.location.href) {
            //If they match, add class name to the parent li element
            $(this).addClass('active')
        }
    })
})

const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const city = document.getElementById('city');
const comment = document.getElementById('comment');

// add event
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
});

const validate = () => {
    // to avoid spaces in between words
    const nameVal = name.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const cityVal = city.value.trim();
    const commentVal = comment.value.trim();
    
    // validate username
    if (nameVal === "") {
        setErrorMsg(name, '* Name cannot be blank');
    } else if (nameVal.length <= 2) {
        setErrorMsg(name, '* Name must be min 3 characters');
    } else {
        setSuccessMsg(name);
    }
    
    // validate phone
    if (phoneVal === "") {
        setErrorMsg(phone, '* Phone Number cannot be blank');
    } else if (phoneVal.length != 10) {
        setErrorMsg(phone, '* Not a valid phone number');
    } else {
        setSuccessMsg(phone);
    }
    
    // validate email
    if (emailVal === "") {
        setErrorMsg(email, '* Email cannot be blank');
    } else if (!isEmail(emailVal)) {
        setErrorMsg(email, '* Not a valid Email');
    } else {
        setSuccessMsg(email);
    }
    
    // validate password
    if (cityVal === "") {
        setErrorMsg(city, '* City cannot be blank');
    } else {
        setSuccessMsg(city);
    }
    
    // validate confirm password
    if (commentVal === "") {
        setErrorMsg(comment, '* Comment cannot be blank');
    } else {
        setSuccessMsg(comment);
    }
}
// defining setErrorMsg() function
function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-group error";
    small.innerText = errormsgs;
}
// defining setSuccessMsg() function
function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-group success";
}