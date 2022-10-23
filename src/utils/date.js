import dayjs from 'dayjs';

export const renderAgo = (createdAt) => {
    let days = dayjs().diff(createdAt, 'days');
    if (days < 1) {
        return '오늘';
    } else if (days < 7) {
        return `${days}일 전`;
    } else {
        return dayjs(createdAt).format('YYYY-MM-DD');
    }
};
