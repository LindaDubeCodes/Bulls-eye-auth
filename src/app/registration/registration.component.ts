import { Component } from '@angular/core';

@Component({
  selector: 'registration-page',
  template: ` <div class="sign-up">
    <div class="overlap-group-wrapper">
      <div class="overlap-group">
        <h3 class="first-heading">Create New Account.</h3>

        <label for="" class="first-name-label">First Name</label>
        <input type="text" placeholder="Musa" class="first-name" required />

        <label for="" class="lastname-label">Last Name</label>
        <input type="text" placeholder="Vilakati" class="last-name" required />

        <label for="" class="password-label">Password</label>
        <input
          type="password"
          placeholder="musa123"
          class="password"
          required
        />

        <label for="" class="email-label">Email</label>
        <input
          type="email"
          placeholder="musa@email.com"
          class="email"
          required
        />

        <div class="login-link">
          <p class="text-wrapper">Already A Member? <a href="#">Log In</a></p>
        </div>

        <button type="submit" class="submit-button">Create Account</button>
      </div>
    </div>
  </div>`,
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {}
