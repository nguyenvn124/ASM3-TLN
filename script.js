const btnSubmit = document.querySelector('.btn-submit');
btnSubmit.addEventListener("click", function() {
  const emailValue = document.getElementById("email").value.toLocaleLowerCase(); 
  const regex = 
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const errormail = document.querySelector('.error-email');
  const check = emailValue.match(regex);
  const sectionContent = document.querySelector('#personal-info .section-content');
  const submitEmail = document.querySelector('.Submit-email');
  if (check) {
    sectionContent.style.display = 'block';
    submitEmail.style.display = 'none';
    errormail.innerHTML = '';
  } 
  else {
    errormail.innerHTML = ('Please enter valid email !');
  }
});

function handleOnMouse(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.style.display = "inline-block";
}
function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.style.display = "none";
}

function handleViewMore(element) {
  const parentElement = element.closest(".parent");
  const viewMore = parentElement.querySelector(".view-more");
  const experienceContent = parentElement.querySelectorAll(".experience-content");

  if (viewMore.innerHTML == "View more") {
    experienceContent.forEach((element) => {
      element.style.display = 'block';
    });
    viewMore.innerHTML = "Less more";
  } else {
    experienceContent.forEach((element) => {
      element.style.display = 'none';
    });
    viewMore.innerHTML = "View more";
  }
}