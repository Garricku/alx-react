import * as notificationData from '../../../../notifications.json';

function getAllNotificationsByUser(userId) {
    return notificationData.default.filter(notification => notification.author.id === userId).map(notification => notification.context);
}

export default getAllNotificationsByUser;