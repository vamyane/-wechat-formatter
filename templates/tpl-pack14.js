/**
 * 模板包14：特殊风格（续）
 * 分类：special（特殊风格）
 */

// ── 折纸风 ──
registerTemplate('origami', {
  name: '折纸风',
  desc: '折纸几何感，手工艺术',
  category: 'special',
  contentTip: '适合手工、创意DIY、儿童教育类内容',
  primary: '#e53935', bg: '#ffffff',
  demo: '<div style="font-size:12px;color:#e53935;font-weight:700">🦢 折纸风</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC',sans-serif;color:#333;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:800;margin:28px 0 14px;line-height:1.5;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;padding:10px 16px;background:${p}08;clip-path:polygon(0 0,100% 0,95% 100,0% 100);`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#333;line-height:2;`,
      quote: `background:#fff5f5;border-left:3px solid ${p};padding:14px 18px;margin:18px 0;color:#555;font-size:15px;line-height:1.8;`,
      highlight: `background:${p}15;padding:2px 6px;color:${p};font-weight:600;`,
      divider: `text-align:center;margin:28px 0;color:#ddd;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;`,
      num: `display:inline-block;background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;font-size:13px;margin-right:8px;font-weight:700;`,
      card: `background:#fff;border:2px solid ${p};padding:24px;margin:16px 0;text-align:center;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 毛玻璃 ──
registerTemplate('glass', {
  name: '毛玻璃',
  desc: '毛玻璃半透明效果，现代科技感',
  category: 'special',
  contentTip: '适合UI设计、科技产品、现代品牌类内容',
  primary: '#6366f1', bg: '#f0f0ff',
  demo: '<div style="background:rgba(99,102,241,0.1);backdrop-filter:blur(4px);padding:6px 12px;font-size:11px;border-radius:12px;border:1px solid rgba(99,102,241,0.2);color:#6366f1;font-weight:600">🔮 毛玻璃</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#1e1e2e;font-size:16px;line-height:2;background:linear-gradient(135deg,${b},#e8e8ff,#f0e8ff);`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:800;margin:28px 0 14px;line-height:1.5;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;padding:10px 18px;background:rgba(99,102,241,0.08);border-radius:14px;border:1px solid rgba(99,102,241,0.15);`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#1e1e2e;line-height:2;`,
      quote: `background:rgba(255,255,255,0.6);border:1px solid rgba(99,102,241,0.15);padding:16px 20px;margin:18px 0;color:#4a4a60;font-size:15px;line-height:1.8;border-radius:14px;`,
      highlight: `background:rgba(99,102,241,0.12);padding:2px 6px;border-radius:8px;color:${p};font-weight:600;`,
      divider: `text-align:center;margin:28px 0;color:#c0c0e0;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:16px;`,
      num: `display:inline-block;background:rgba(99,102,241,0.15);color:${p};width:28px;height:28px;line-height:28px;text-align:center;border-radius:10px;font-size:14px;margin-right:8px;font-weight:700;`,
      card: `background:rgba(255,255,255,0.5);border:1px solid rgba(99,102,241,0.15);padding:24px;border-radius:18px;text-align:center;margin:16px 0;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 粗野主义 ──
registerTemplate('brutalist', {
  name: '粗野主义',
  desc: 'Raw风格，大胆直接',
  category: 'special',
  contentTip: '适合独立观点、反叛精神、先锋艺术类内容',
  primary: '#ff0000', bg: '#ffffff',
  demo: '<div style="font-size:14px;color:#ff0000;font-weight:900;font-family:monospace;border:3px solid #000;padding:2px 8px">RAW</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'Courier New',monospace;color:#000;font-size:16px;line-height:1.8;background:${b};`,
      h1: `text-align:left;font-size:28px;color:${p};font-weight:900;margin:28px 0 14px;line-height:1.2;text-transform:uppercase;`,
      h2: `font-size:22px;color:#000;margin:36px 0 12px;font-weight:900;line-height:1.2;text-transform:uppercase;border-bottom:4px solid ${p};padding-bottom:6px;`,
      h3: `font-size:18px;color:${p};margin:24px 0 10px;font-weight:900;text-transform:uppercase;`,
      p: `margin:14px 0;font-size:16px;color:#000;line-height:1.8;`,
      quote: `border-left:6px solid ${p};padding:14px 18px;margin:18px 0;color:#333;font-size:15px;line-height:1.8;background:#f5f5f5;`,
      highlight: `background:${p};color:#fff;padding:2px 6px;`,
      divider: `text-align:center;margin:28px 0;color:#000;font-size:18px;font-weight:900;letter-spacing:6px;`,
      strong: `color:${p};font-weight:900;`,
      img: `max-width:100%;margin:14px auto;display:block;border:3px solid #000;`,
      num: `color:${p};font-size:18px;font-weight:900;margin-right:8px;`,
      card: `border:3px solid #000;padding:20px;margin:16px 0;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 表情包风 ──
registerTemplate('emoji-pop', {
  name: '表情包风',
  desc: 'emoji装饰+活泼排版，轻松有趣',
  category: 'special',
  contentTip: '适合轻松日常、段子、趣味科普类内容',
  primary: '#ff9800', bg: '#fffdf5',
  demo: '<div style="font-size:14px;color:#ff9800;font-weight:700">😎 表情包风 🔥</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#333;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:24px;color:${p};font-weight:800;margin:28px 0 14px;line-height:1.5;`,
      h2: `font-size:18px;color:${p};margin:32px 0 12px;font-weight:700;line-height:1.5;display:inline-block;padding:8px 20px;background:${p}11;border-radius:20px;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#333;line-height:2;`,
      quote: `background:#fff;border-left:4px solid ${p};padding:14px 18px;margin:18px 0;color:#666;font-size:15px;line-height:1.8;border-radius:0 12px 12px 0;box-shadow:0 2px 8px rgba(0,0,0,.04);`,
      highlight: `background:${p}18;padding:2px 6px;border-radius:8px;`,
      divider: `text-align:center;margin:28px 0;color:#eee;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:16px;`,
      num: `display:inline-block;background:${p};color:#fff;width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;font-size:14px;margin-right:8px;`,
      card: `background:#fff;border:1px solid ${p}22;padding:24px;border-radius:18px;text-align:center;margin:16px 0;box-shadow:0 2px 12px rgba(255,152,0,.06);`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 极光之夜 ──
registerTemplate('aurora-night', {
  name: '极光之夜',
  desc: '极光色彩+深空背景，绚丽梦幻',
  category: 'special',
  contentTip: '适合天文、旅行、梦幻故事类内容',
  primary: '#00e676', bg: '#050520',
  demo: '<div style="font-size:12px;background:linear-gradient(90deg,#00e676,#00b0ff,#d500f9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-weight:800">极光之夜</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC',sans-serif;color:#b0b8d0;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:24px;font-weight:800;margin:28px 0 14px;line-height:1.5;background:linear-gradient(90deg,#00e676,#00b0ff,#d500f9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;`,
      h2: `font-size:18px;color:#00e676;margin:36px 0 12px;font-weight:700;line-height:1.5;text-shadow:0 0 10px #00e67633;`,
      h3: `font-size:16px;color:#00b0ff;margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#b0b8d0;line-height:2;`,
      quote: `border-left:2px solid #d500f9;background:#d500f908;padding:14px 18px;margin:18px 0;color:#9098b0;font-size:15px;line-height:1.8;`,
      highlight: `background:#00e67622;padding:2px 6px;color:#00e676;font-weight:600;`,
      divider: `text-align:center;margin:28px 0;color:#1a1a30;font-size:14px;`,
      strong: `color:#00e676;font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border:1px solid #1a1a30;border-radius:8px;`,
      num: `color:#00e676;font-size:16px;font-weight:700;margin-right:8px;`,
      card: `background:#0a0a28;border:1px solid #1a1a40;padding:24px;margin:16px 0;text-align:center;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});
