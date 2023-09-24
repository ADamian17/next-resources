import ReactDOM, { createPortal } from 'react-dom';

import classes from './notification.module.scss';

type NotificationProps = {
  title: string;
  message: string;
  status?: "pending" | "success" | "error"
}

const Notification: React.FC<NotificationProps> = (props) => {
  const { title, message, status } = props;

  let statusClasses = {
    success: classes.success,
    error: classes.error,
    pending: classes.pending
  };

  const cssClasses = `${classes.notification} ${status && statusClasses[status]}`;

  return ReactDOM.createPortal((
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  ), document.getElementById('notification')!);
}

export default Notification;
