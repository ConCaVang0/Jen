import React, { useState } from 'react';
import styles from './login.module.css'; // Import your CSS module
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS if not already imported

const LoginForm = () => {
  const [loginVisible, setLoginVisible] = useState(true);
  const [phoneValue, setPhoneValue] = useState('');

  const switchToLogin = () => {
    const x = document.getElementById("login");
    if (x !== null) {
      x.style.left = "4px";
      setLoginVisible(true);
    }
  };

  const switchToRegister = () => {
    const y = document.getElementById("register");
    if (y !== null) {
      y.style.right = "5px";
      setLoginVisible(false);
    }
  };

  const handlePhoneInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, '');
    setPhoneValue(numericValue);
  };

  const login = () => {
    const x = document.getElementById("login");
    const y = document.getElementById("register");
    const a = document.getElementById("loginBtn");
    const b = document.getElementById("registerBtn");

    if (x !== null && y !== null && a !== null && b !== null) {
      x.style.left = "4px";
      y.style.right = "-520px";
      a.className += " " + styles['white-btn']; // Append styles from module
      b.className = styles.btn; // Use styles from module
      x.style.opacity = '1';
      y.style.opacity = '0';
    }
  };

  const register = () => {
    const x = document.getElementById("login");
    const y = document.getElementById("register");
    const a = document.getElementById("loginBtn");
    const b = document.getElementById("registerBtn");

    if (x !== null && y !== null && a !== null && b !== null) {
      x.style.left = "-510px";
      y.style.right = "5px";
      a.className = styles.btn; // Use styles from module
      b.className += " " + styles['white-btn']; // Append styles from module
      x.style.opacity = '0';
      y.style.opacity = '1';
    }
  };

  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <p>LOGO .</p>
        </div>
        <div className={styles.nav_menu} id="navMenu"></div>
        <div className={styles.snav_button}>
          <button className={`${styles.btn} ${loginVisible ? styles['white-btn'] : ''}`} id="loginBtn" onClick={switchToLogin}>
            Sign In
          </button>
          <button className={`${styles.btn} ${loginVisible ? '' : styles['white-btn']}`} id="registerBtn" onClick={switchToRegister}>
            Sign Up
          </button>
        </div>
      </nav>

      <div className={styles['form-box']}>
        <div className={`${styles['login-container']} ${loginVisible ? '' : styles.hidden}`} id="login">
          <header>Login</header>
          <div className={styles['input-box']}>
            <input
              type="text"
              className={styles['input-field']}
              placeholder="Username or Email"
            />
            <i className={`bx bx-user ${styles.icon}`}></i>
          </div>
          <div className={styles['input-box']}>
            <input
              type="password"
              className={styles['input-field']}
              placeholder="Password"
            />
            <i className={`bx bx-lock-alt ${styles.icon}`}></i>
          </div>
          <div className={styles['input-box']}>
            <input
              type="submit"
              className={styles.submit}
              value="Sign In"
            />
          </div>
          <div className={styles['two-col']}>
            <div className={styles.one}>
              <input type="checkbox" id="login-check" />
              <label htmlFor="login-check"> Remember Me</label>
            </div>
            <div className={styles.two}>
              <label><a href="#">Forgot password?</a></label>
            </div>
          </div>
          <div className={styles.top}>
            <span>Don't have an account?<a href="#" onClick={register}>Sign Up</a></span>
            <span>Or Sign Up with
              <div className={`${styles['Icon-Singup']} d-flex`}>
                <a href="#"><i className={`bx bxl-facebook-circle ${styles.icon}`}></i></a>
                <a href="#"><i className={`bx bxl-google ${styles.icon}`}></i></a>
                <a href="#"><i className={`bx bxl-twitter ${styles.icon}`}></i></a>
              </div>
            </span>
          </div>
        </div>

        <div className={`${styles['register-container']} ${loginVisible ? styles.hidden : ''}`} id="register">
          <header>Sign Up</header>
          <div className={styles['two-forms']}>
            <div className={styles['input-box']}>
              <input
                type="text"
                className={styles['input-field']}
                placeholder="FirstName"
              />
              <i className={`bx bx-user ${styles.icon}`}></i>
            </div>
            <div className={styles['input-box']}>
              <input
                type="text"
                className={styles['input-field']}
                placeholder="LastName"
              />
              <i className={`bx bx-user ${styles.icon}`}></i>
            </div>
          </div>
          <div className={styles['input-box']}>
            <input
              type="text"
              className={styles['input-field']}
              placeholder="Email"
            />
            <i className={`bx bx-envelope ${styles.icon}`}></i>
          </div>
          <div className={styles['input-box']}>
            <input
              type="tel"
              className={styles['input-field']}
              placeholder="Phone Number"
              id="phone-input"
              value={phoneValue}
              onChange={handlePhoneInputChange}
            />
            <i className={`bx bx-phone ${styles.icon}`}></i>
          </div>
          <div className={styles['input-box']}>
            <input
              type="text"
              className={styles['input-field']}
              placeholder="Address"
            />
            <i className={`bx bx-home-alt ${styles.icon}`}></i>
          </div>
          <div className={styles['input-box']}>
            <input
              type="password"
              className={styles['input-field']}
              placeholder="Password"
            />
            <i className={`bx bx-lock-alt ${styles.icon}`}></i>
          </div>
          <div className={styles['input-box']}>
            <input
              type="password"
              className={styles['input-field']}
              placeholder="Confirm Password"
            />
            <i className={`bx bx-lock-alt ${styles.icon}`}></i>
          </div>
          <div className={styles['input-box']}>
            <input
              type="submit"
              className={styles.submit}
              value="Register"
            />
          </div>
          <div className={styles['two-col']}>
            <div className={styles.one}>
              <input type="checkbox" id="register-check" />
              <label htmlFor="register-check"> Remember Me</label>
            </div>
            <div className={styles.two}>
              <label><a href="#">Terms & conditions</a></label>
            </div>
          </div>
          <div className={styles.top}>
            <span>Have an account? <a href="#" onClick={login}>Login</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
