import dayjs from 'dayjs';

/**
 * 获取当前日期
 * @returns {string}
 */
export function getDate() {
  return dayjs().format('YYYY-MM-DD');
}
