export interface Notification {
  id: string
  title: string
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
  timestamp: number
}

export const createNotification = (
  title: string,
  message: string,
  type: Notification['type'] = 'info'
): Notification => ({
  id: crypto.randomUUID(),
  title,
  message,
  type,
  timestamp: Date.now()
})

export const sortNotifications = (notifications: Notification[]): Notification[] => {
  return [...notifications].sort((a, b) => b.timestamp - a.timestamp)
}

export const filterUnreadNotifications = (
  notifications: Notification[],
  lastReadTimestamp: number
): Notification[] => {
  return notifications.filter(notification => notification.timestamp > lastReadTimestamp)
}