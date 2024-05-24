export function NotificationItem(type="default", value) {
    return (<li data-priority={ type }>{ value }</li>);
}