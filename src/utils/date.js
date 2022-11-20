import dayjs from 'dayjs';

export const renderAgo = (createdAt) => {
  const days = dayjs().diff(createdAt, 'days');
  if (days < 1) {
    return '오늘';
  } if (days < 7) {
    return `${days}일 전`;
  }
  return dayjs(createdAt).format('YYYY-MM-DD');
};
