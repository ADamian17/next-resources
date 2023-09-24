import { useRouter } from 'next/router';
import { useRef } from 'react';

export default function Home() {
  const router = useRouter();
  const emailRef = useRef();
  const feedbackRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataForm = {
      email: emailRef.current.value,
      feedback: feedbackRef.current.value,
    };

    const res = await fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForm),
    });
    const data = await res.json();

    if (data.msg === 'success') {
      router.push('/feedback');
    }
  };

  return (
    <main>
      <h1>Home</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Your email</label>
          <br />
          <input type="email" id="email" ref={emailRef} />
        </div>

        <div>
          <label htmlFor="email">Your Feedback</label>
          <br />
          <textarea id="feedback" rows={5} ref={feedbackRef}></textarea>
        </div>

        <div>
          <input type="submit" value="send feedback" />
        </div>
      </form>
    </main>
  );
}
