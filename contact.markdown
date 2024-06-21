---
layout: default
title: "Contact"
permalink: /contact/
---

# Contact Me

<form action="https://formspree.io/f/myyrqzyo" method="POST">
  <label>
    Your name:
    <input type="text" name="name" required>
  </label>
  <br>
  <label>
    Your email:
    <input type="email" name="_replyto" required>
  </label>
  <br>
  <label>
    Your message:
    <textarea name="message" required></textarea>
  </label>
  <br>
  <!-- Honeypot field -->
  <label style="display:none;">
    Do not fill this out:
    <input type="text" name="_honeypot" style="display:none;">
  </label>
  <br>
  <!-- Google reCAPTCHA -->
  <div class="g-recaptcha" data-sitekey="6Ld6nv4pAAAAAEVGRSoU6nwj7efuV0VmTCdVuRd-"></div>
  <br>
  <button type="submit">Send</button>
</form>
