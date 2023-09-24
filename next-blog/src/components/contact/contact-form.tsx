import { useEffect, useRef, useState } from 'react';
import styles from './contact-form.module.scss';
import Notification from '../ui/notification';
type ReqStatusType = "pending" | "success" | "error";
const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  /* pending success error */
  const [reqStatus, setReqStatus] = useState<ReqStatusType>()
  let notification = {
    status: '',
    title: '',
    message: ''
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (reqStatus === "success" || reqStatus === "error") {
      timer = setTimeout(() => {
        setReqStatus(undefined)
      }, 3000)
    }

    return () => {
      if (timer) clearTimeout(timer);
    }
  }, [reqStatus])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setReqStatus("pending");

      const res = await fetch('/api/contact', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          message,
        })
      })

      if (!res.ok) {
        throw 'something went wrong'
      }

      setEmail('')
      setMessage('')
      setName('')
      setReqStatus("success")
    } catch (error) {
      setReqStatus("error")
    }
  }

  switch (reqStatus) {
    case "pending":
      notification = {
        ...notification,
        status: "pending",
        title: "Sending message...",
        message: "Your message is on its ways!"
      }
      break;
    case "success":
      notification = {
        ...notification,
        status: "success",
        title: "Success!",
        message: "Message sent successfully!"
      }
      break;
    case "error":
      notification = {
        ...notification,
        status: "error",
        title: "Error!",
        message: "Something went wrong!"
      }
      break;
    default:
      break;
  }

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              value={email}
            />
          </div>
        </div>

        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              value={name}
            />
          </div>
        </div>

        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            value={message}
          ></textarea>
        </div>

        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {
        notification.status && <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status as ReqStatusType}
        />
      }
    </section>
  )
}

export default ContactForm;