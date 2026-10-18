import { asset } from './assets.js';

const BASE = 'Phân tích chi tiết và đưa ra định hướng';

export const PACKAGES = [
  { id: 'dawn', num: 'I', name: 'The Dawn', sub: '1 câu hỏi', price: '59K', tag: 'Nhẹ nhàng', feats: [BASE] },
  { id: 'storm', num: 'II', name: 'The Storm', sub: '6 câu hỏi · 2 chủ đề', price: '239K', tag: '20 phút', feats: [BASE, 'Thời gian trải bài: 20 phút'] },
  { id: 'calm', num: 'III', name: 'The Calm', sub: 'Không giới hạn câu hỏi', price: '399K', tag: '60 phút', feats: [BASE, 'Thời gian trải bài: 60 phút'], off: '479K · 60 phút' },
  {
    id: 'harvest', num: 'IV', name: 'The Harvest', sub: 'Không giới hạn câu hỏi', price: '569K', tag: 'Trải sâu',
    feats: [BASE, 'Thời gian trải bài: 90 phút', 'Phù hợp với các vấn đề quan trọng cần trao đổi sâu'], off: '639K · 90 phút',
  },
];

export const DEFAULT_PACKAGE = 'calm';

export const NAV = [
  { view: 'home', label: 'Trang chủ' },
  { view: 'about', label: 'Về Nhê' },
  { view: 'pricing', label: 'Bảng giá' },
  { view: 'feedback', label: 'Feedback' },
];

const alts = [
  'Bình luận Facebook: rất nên nói chuyện với chị Nhê một lần, chị đáng tin, sâu sắc và luôn giúp mình tìm lại đúng hướng',
  'Tin nhắn: gói 90 phút không giới hạn câu hỏi thật đáng đồng tiền, lời khuyên rất hữu ích',
  'Tin nhắn: sau trải bài chị tự tin hơn vào dự định của mình, mọi việc rõ nét hơn',
  'Tin nhắn: không như những chỗ khác, xem bài có tâm, như tia sáng sưởi ấm',
  'Tin nhắn: xem chuẩn, nói thẳng, không gieo hy vọng ảo tưởng, có định hướng giải quyết',
  'Bình luận Facebook: cô bé nhiều năng lượng tích cực, cảm ơn đã đồng hành',
  'Tin nhắn: xem xong cảm giác như đi guốc trong bụng, nhận ra vấn đề lớn nhất nằm ở mình',
  'Tin nhắn: trải bài đúng với tình trạng, được chụp bài cho xem, nghe xong mới an lòng đóng lại vấn đề',
  'Tin nhắn: lần đầu xem tarot mà đúng quá, đúng 99%',
  'Tin nhắn: đã move on thành công sau khi làm theo những gì được chỉ',
  'Tin nhắn: cảm ơn đã đồng hành, 5 năm qua chưa bao giờ thấy thoải mái như lúc này',
  'Tin nhắn: 30 phút rất đáng giá cho một năm của em',
  'Tin nhắn: gặp được người có tâm, nói chuyện rất thoải mái, không còn thấy nặng nề',
  'Tin nhắn feedback: lao thẳng vào vấn đề, biết lắng nghe, hài hước',
  'Tin nhắn feedback: hỏi xong đã có quyết định',
  'Tin nhắn: được chữa lành tâm lý, chỉ cách yêu thương bản thân',
  'Tin nhắn: gỡ được cái nút rối trong lòng, xem xong rất nhẹ lòng',
  'Tin nhắn: lần nào xem cũng đúng, đọc em như đọc sách',
  'Tin nhắn feedback: nhẹ nhõm và đỡ lo hơn sau trải bài',
  'Tin nhắn: sẽ làm theo lời khuyên, cố gắng mở lòng hơn trong mối quan hệ mới',
];

export const SHOTS = alts.map((alt, i) => ({
  src: asset(`img/feedback-${String(i + 1).padStart(2, '0')}.webp`),
  alt,
}));

export const TESTIMONIALS = [
  'Những điều em nói cho chị sau khi trải bài làm chị tự tin hơn vào những dự định của mình, khẳng định một số điều chị cũng đã thấy nhưng còn mơ hồ. Mọi việc với chị đã rõ nét hơn.',
  'Trong 5 năm qua tôi chưa bao giờ cảm thấy thực sự thoải mái và vui vẻ như lúc này. Cảm ơn Xốp đã đồng hành cùng tôi, giúp hành trình này dễ dàng hơn rất nhiều.',
  'Không như những chỗ khác em hay xem, họ trải bài nhưng không có tâm. Biết đến chị như tia sáng sưởi ấm đời em, sến quá nhưng mà em nói thật đó.',
  'Cảm ơn chị vì buổi hôm nay, như một lời nhắc nhở cho em. Thật sự đáng quý. 30 phút rất đáng giá cho một năm của em.',
];

export const INSTAGRAM_URL = 'https://www.instagram.com/foolishnhe_/';
export const ZALO_URL = 'https://zalo.me/0859021200';
