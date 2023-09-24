import { useContext } from 'react';
import useNotification from '../../store/useNotification';

import classes from './notification.module.css';

function Notification(props) {
  const { hideNotification } = useNotification((state) => state);

  const { title, message, status } = props;

  let statusClasses = {
    success: classes.success,
    error: classes.error,
    pending: classes.pending,
  };

  const activeClasses = `${classes.notification} ${statusClasses[status]}`;

  return (
    <div className={activeClasses} onClick={hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
