import MsgItem from './MsgItem';

const userIds = ['roy', 'jay'];
const getRandomUserId = () => userIds[Math.round(Math.random())];

const msgs = Array(50)
  .fill(0)
  .map((_, idx) => ({
    id: idx + 1,
    userId: getRandomUserId(),
    timestamp: 1234567890123 + (50 - idx) * 1000 * 60,
    text: `${50 - idx} mock text`,
  }));

// [
//   {
//     id: 1,
//     userId: getRandomUserId(),
//     timestamp: 1234567890123,
//     text: '1 mock text'
//   },
// ]

const MsgList = () => (
  <ul className="messages">
    {msgs.map((x) => (
      <MsgItem key={x.id} {...x} />
    ))}
  </ul>
);

export default MsgList;
