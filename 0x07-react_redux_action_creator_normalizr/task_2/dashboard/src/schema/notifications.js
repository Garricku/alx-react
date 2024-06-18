import * as notificationData from '../../../../notifications.json';
import { schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

function getAllNotificationsByUser(userId) {
  const { notifications, users } = normalizedData.entities;
  const userNotifications = [];

  for (const id in notifications) {
    if (notifications[id].author === userId) {
      userNotifications.push(notifications[id].context);
    }
  }

  return userNotifications;
}

export { getAllNotificationsByUser, user, message, notification };