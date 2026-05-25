/**
 * 模板包6：浅色精选（下）
 * 分类：light（浅色系）
 */

// ── 蜜桃粉 ──
registerTemplate('peach-light', {
  name: '蜜桃粉',
  desc: '温柔蜜桃色，甜美清新',
  category: 'light',
  contentTip: '适合女性向、美妆、穿搭、情感类内容',
  primary: '#ff6b9d', bg: '#fff5f7',
  demo: '<div style="font-size:12px;color:#ff6b9d;font-weight:700">🍑 蜜桃粉</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#4a3a42;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:800;margin:28px 0 14px;line-height:1.5;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;padding:8px 16px;background:${p}08;border-radius:20px;display:inline-block;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#4a3a42;line-height:2;`,
      quote: `background:#fff;border-left:3px solid ${p};padding:14px 18px;margin:18px 0;color:#6a5a62;font-size:15px;line-height:1.8;border-radius:0 12px 12px 0;box-shadow:0 2px 8px rgba(255,107,157,.06);`,
      highlight: `background:${p}15;padding:2px 6px;border-radius:8px;`,
      divider: `text-align:center;margin:28px 0;color:#ffb3c6;font-size:14px;letter-spacing:6px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:14px;`,
      num: `display:inline-block;background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;`,
      card: `background:#fff;border:1px solid ${p}22;padding:24px;border-radius:16px;text-align:center;margin:16px 0;box-shadow:0 2px 12px rgba(255,107,157,.06);`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 鼠尾草绿 ──
registerTemplate('sage', {
  name: '鼠尾草绿',
  desc: '低饱和绿，自然高级',
  category: 'light',
  contentTip: '适合健康、养生、自然、生活方式类内容',
  primary: '#6b8f71', bg: '#f5f7f2',
  demo: '<div style="font-size:12px;color:#6b8f71;font-weight:700">🌿 鼠尾草</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#3a3f3a;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:800;margin:28px 0 14px;line-height:1.5;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;border-bottom:2px solid ${p}33;padding-bottom:8px;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#3a3f3a;line-height:2;`,
      quote: `background:#eef2e6;border-left:3px solid ${p};padding:14px 18px;margin:18px 0;color:#5a6a5a;font-size:15px;line-height:1.8;border-radius:0 8px 8px 0;`,
      highlight: `background:#d4edda;padding:2px 4px;`,
      divider: `text-align:center;margin:28px 0;color:#b5c4a8;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:10px;`,
      num: `display:inline-block;background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;`,
      card: `background:#fff;border:1px solid #d4e0c8;padding:24px;border-radius:12px;text-align:center;margin:16px 0;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 沙色温和 ──
registerTemplate('sand', {
  name: '沙色温和',
  desc: '沙漠色调，温暖质朴',
  category: 'light',
  contentTip: '适合旅行、文化、人文类内容',
  primary: '#c4956a', bg: '#faf6f0',
  demo: '<div style="font-size:12px;color:#c4956a;font-weight:700">🏜️ 沙色温和</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#4a3f35;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:800;margin:28px 0 14px;line-height:1.5;letter-spacing:2px;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;text-align:center;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;padding-left:10px;border-left:3px solid ${p};`,
      p: `margin:14px 0;font-size:16px;color:#4a3f35;line-height:2;`,
      quote: `background:#f5ead8;border-left:3px solid ${p};padding:14px 18px;margin:18px 0;color:#6a5a4a;font-size:15px;line-height:1.8;`,
      highlight: `background:#f0dcc0;padding:2px 4px;`,
      divider: `text-align:center;margin:28px 0;color:#d4c0a0;font-size:14px;letter-spacing:8px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:8px;`,
      num: `display:inline-block;background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;`,
      card: `background:#fff;border:1px solid #e0d0c0;padding:24px;border-radius:10px;text-align:center;margin:16px 0;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 暖阳橙 ──
registerTemplate('warm-orange', {
  name: '暖阳橙',
  desc: '温暖橙色调，活力阳光',
  category: 'light',
  contentTip: '适合教育、亲子、活动、正能量类内容',
  primary: '#f57c00', bg: '#fffaf5',
  demo: '<div style="font-size:12px;color:#f57c00;font-weight:700">☀️ 暖阳橙</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#3a3020;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:800;margin:28px 0 14px;line-height:1.5;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;padding-left:12px;border-left:4px solid ${p};`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#3a3020;line-height:2;`,
      quote: `background:#fff3e0;border-left:3px solid ${p};padding:14px 18px;margin:18px 0;color:#5a4a30;font-size:15px;line-height:1.8;border-radius:0 8px 8px 0;`,
      highlight: `background:#ffe0b2;padding:2px 4px;`,
      divider: `text-align:center;margin:28px 0;color:#ffcc80;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:10px;`,
      num: `display:inline-block;background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;`,
      card: `background:#fff;border:1px solid #ffe0b2;padding:24px;border-radius:12px;text-align:center;margin:16px 0;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 雾霾蓝 ──
registerTemplate('haze-blue', {
  name: '雾霾蓝',
  desc: '莫兰迪蓝灰色，高级质感',
  category: 'light',
  contentTip: '适合设计、艺术、时尚、生活方式类内容',
  primary: '#5b7e91', bg: '#f2f5f7',
  demo: '<div style="font-size:12px;color:#5b7e91;font-weight:700">🌫️ 雾霾蓝</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#3a4550;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:700;margin:28px 0 14px;line-height:1.5;letter-spacing:3px;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;border-bottom:2px solid ${p}33;padding-bottom:8px;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:600;`,
      p: `margin:14px 0;font-size:16px;color:#3a4550;line-height:2;`,
      quote: `background:#e8eef2;border-left:3px solid ${p};padding:14px 18px;margin:18px 0;color:#5a6a7a;font-size:15px;line-height:1.8;`,
      highlight: `background:#c5d5e0;padding:2px 4px;`,
      divider: `text-align:center;margin:28px 0;color:#b0c4d0;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:8px;`,
      num: `display:inline-block;background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;`,
      card: `background:#fff;border:1px solid #d0dde5;padding:24px;border-radius:10px;text-align:center;margin:16px 0;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});
