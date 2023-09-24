import { useRef } from 'react';
import classes from './newsletter-registration.module.css';
import useNotification from '../../store/useNotification';

function NewsletterRegistration() {
  const emailRef = useRef();
  const { showNotification } = useNotification((state) => state);

  const registrationHandler = async (event) => {
    event.preventDefault();

    try {
      const email = emailRef.current.value;

      showNotification({
        message: 'Registering for news letter',
        status: 'pending',
        title: 'Signing up...',
      });

      await fetch('/api/news-letter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      showNotification({
        message: 'Successfully registered for news letter',
        status: 'success',
        title: 'Success!',
      });
    } catch (error) {
      showNotification({
        message: 'Something went wrong',
        status: 'error',
        title: 'Error!',
      });
    }
  };

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
