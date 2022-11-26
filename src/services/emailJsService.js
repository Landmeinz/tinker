import React, { useState, useRef } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";

export const emailTinker = (formCurrent) => {
    emailjs
      .sendForm(
        "service_9tkdfov",
        "template_send_to_tinker",
        formCurrent,
        "wYwftsR5miSZDs5fb"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  }; // emailTinker

  export const emailConfirmation = (formCurrent) => {
    emailjs
      .sendForm(
        "service_9tkdfov",
        "template_send_confirm",
        formCurrent,
        "wYwftsR5miSZDs5fb"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  }; // emailConfirmation