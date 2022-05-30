'use strict';

import throttle from 'lodash.throttle';

const CONTACT_FORM_LOCAL_STORAGE_KEY = 'formData';
const contactFormEl = document.querySelector('.feedback-form');
const formData = {};

const fillContactForm = form => {
  const formDataLclEl = JSON.parse(localStorage.getItem(CONTACT_FORM_LOCAL_STORAGE_KEY));
  const formUnit = form.elements;

  for (const key in formDataLclEl) {
    if (formDataLclEl.hasOwnProperty(key)) {
      formUnit[key].value = formDataLclEl[key];
    }
  }
};

fillContactForm(contactFormEl);

const onContactFocusChange = throttle(event => {
  const { target } = event;

  const formTargetName = target.name;

  const formTarget = target.value;

  formData[formTargetName] = formTarget;
  localStorage.setItem('formData', JSON.stringify(formData));
}, 500);

const submit = event => {
  event.preventDefault();

  const { email, message } = event.target;

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }

  const obj = {
    email: contactFormEl.email.value,
    message: contactFormEl.message.value,
  };

  console.log(obj);
  localStorage.removeItem('formData');
  event.currentTarget.reset();
  l;
};

contactFormEl.addEventListener('submit', submit);

contactFormEl.addEventListener('input', onContactFocusChange);
