import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import Notification from '../components/notification/notification';
import MainHeader from './main-header';
import useNotification from '../store/useNotification';

export default function MainLayout(props) {
  const { notification, hideNotification } = useNotification(
    (state) => state,
    shallow
  );

  useEffect(() => {
    let timer;

    if (
      notification ||
      notification?.status === 'success' ||
      notification?.status === 'error'
    ) {
      timer = setTimeout(() => {
        hideNotification();
      }, 3000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [notification]);

  return (
    <>
      <MainHeader />

      <main>{props.children}</main>

      {notification && (
        <Notification
          title={notification?.title}
          message={notification?.message}
          status={notification?.status}
        />
      )}
    </>
  );
}
