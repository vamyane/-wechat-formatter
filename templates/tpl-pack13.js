/**
 * 模板包13：特殊风格（下）
 * 分类：special（特殊风格）
 */

// ── 单色极致 ──
registerTemplate('mono-extreme', {
  name: '单色极致',
  desc: '纯黑白灰，极致克制',
  category: 'special',
  contentTip: '适合严肃话题、深度思考、极简宣言',
  primary: '#000000', bg: '#ffffff',
  demo: '<div style="font-size:13px;color:#000;font-weight:900;letter-spacing:6px">MONO</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#000;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:24px;color:${p};font-weight:900;margin:28px 0 14px;line-height:1.5;letter-spacing:6px;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:900;line-height:1.5;text-transform:uppercase;letter-spacing:4px;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:800;`,
      p: `margin:14px 0;font-size:16px;color:#000;line-height:2;`,
      quote: `border-left:4px solid ${p};padding:14px 18px;margin:18px 0;color:#333;font-size:15px;line-height:1.8;`,
      highlight: `background:${p};color:${b};padding:2px 6px;`,
      divider: `text-align:center;margin:28px 0;color:${p};font-size:18px;letter-spacing:15px;`,
      strong: `color:${p};font-weight:900;`,
      img: `max-width:100%;margin:14px auto;display:block;`,
      num: `color:${p};font-size:16px;font-weight:900;margin-right:8px;`,
      card: `border:2px solid ${p};padding:24px;margin:16px 0;text-align:center;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 未来科技 ──
registerTemplate('tech-future', {
  name: '未来科技',
  desc: 'HUD界面风格，科幻未来感',
  category: 'special',
  contentTip: '适合AI、元宇宙、前沿科技类内容',
  primary: '#00ff41', bg: '#0a0a0a',
  demo: '<div style="font-size:12px;color:#00ff41;font-weight:700;font-family:monospace">SYS://FUTURE</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'Courier New',monospace;color:#b0b8b0;font-size:15px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:700;margin:28px 0 14px;line-height:1.5;font-family:monospace;letter-spacing:4px;text-shadow:0 0 10px ${p}44;`,
      h2: `font-size:17px;color:#00b0ff;margin:36px 0 14px;font-weight:700;line-height:1.5;font-family:monospace;padding:8px 14px;border:1px solid #00b0ff33;background:#00b0ff08;`,
      h3: `font-size:15px;color:${p};margin:24px 0 10px;font-weight:700;font-family:monospace;padding-left:10px;border-left:2px solid ${p};`,
      p: `margin:14px 0;font-size:15px;color:#b0b8b0;line-height:2;`,
      quote: `border-left:2px solid #00b0ff;background:#00b0ff06;padding:14px 18px;margin:18px 0;color:#8090a0;font-size:14px;line-height:1.8;font-family:monospace;`,
      highlight: `background:${p}22;padding:2px 6px;color:${p};font-weight:700;`,
      divider: `text-align:center;margin:28px 0;color:#1a1a1a;font-size:12px;font-family:monospace;`,
      strong: `color:#00b0ff;font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border:1px solid #333;`,
      num: `color:${p};font-family:monospace;font-size:16px;font-weight:700;margin-right:8px;`,
      card: `border:1px solid #333;background:#111;padding:20px;margin:16px 0;font-family:monospace;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 植物学 ──
registerTemplate('botanical', {
  name: '植物学',
  desc: '自然植物色调，清新有机',
  category: 'special',
  contentTip: '适合植物、园艺、有机生活、环保类内容',
  primary: '#558b2f', bg: '#f9fbf4',
  demo: '<div style="font-size:12px;color:#558b2f;font-weight:700">🌱 植物学</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC',sans-serif;color:#2e3a20;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:800;margin:28px 0 14px;line-height:1.5;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;border-bottom:2px dashed ${p}44;padding-bottom:10px;text-align:center;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#2e3a20;line-height:2;`,
      quote: `background:#eef5e0;border-left:3px solid ${p};padding:14px 18px;margin:18px 0;color:#4a6a3a;font-size:15px;line-height:1.8;border-radius:0 10px 10px 0;`,
      highlight: `background:#d4edda;padding:2px 6px;border-radius:4px;color:${p};font-weight:600;`,
      divider: `text-align:center;margin:28px 0;color:#a5c890;font-size:14px;letter-spacing:6px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:14px;`,
      num: `display:inline-block;background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;`,
      card: `background:#eef5e0;border:1px solid #d4e0c8;padding:24px;border-radius:14px;text-align:center;margin:16px 0;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 老相机 ──
registerTemplate('vintage-cam', {
  name: '老相机',
  desc: '胶片相机色调，怀旧摄影',
  category: 'special',
  contentTip: '适合摄影、旅行记录、怀旧类内容',
  primary: '#6d4c41', bg: '#f5f0e8',
  demo: '<div style="font-size:12px;color:#6d4c41;font-weight:700">📷 老相机</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:Georgia,'Noto Serif SC',serif;color:#3e2f23;font-size:16px;line-height:2.2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:700;margin:28px 0 14px;line-height:1.5;letter-spacing:3px;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;text-align:center;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:600;font-style:italic;`,
      p: `margin:14px 0;font-size:16px;color:#3e2f23;line-height:2.2;`,
      quote: `margin:18px 0;padding:14px 18px;border:1px solid #d4c5a0;background:#faf5e8;color:#6a5a4a;font-size:15px;line-height:1.8;font-style:italic;`,
      highlight: `background:#e8d8c0;padding:2px 4px;`,
      divider: `text-align:center;margin:28px 0;color:#c9b88a;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border:3px solid #e8dcc8;padding:4px;background:#fff;filter:sepia(20%);`,
      num: `color:${p};font-size:18px;font-weight:700;margin-right:6px;`,
      card: `border:1px solid #d4c5a0;background:#faf5e8;padding:24px;margin:16px 0;text-align:center;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 水彩风 ──
registerTemplate('watercolor', {
  name: '水彩风',
  desc: '水彩渲染效果，艺术柔美',
  category: 'special',
  contentTip: '适合艺术、绘画、文艺创作类内容',
  primary: '#5c6bc0', bg: '#fafaff',
  demo: '<div style="font-size:12px;color:#5c6bc0;font-weight:700;filter:blur(0.3px)">🎨 水彩风</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC',sans-serif;color:#3a3a50;font-size:16px;line-height:2.2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:700;margin:28px 0 14px;line-height:1.5;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;text-align:center;padding:10px 16px;background:${p}08;border-radius:12px;`,
      h3: `font-size:16px;color:#7986cb;margin:24px 0 10px;font-weight:600;`,
      p: `margin:14px 0;font-size:16px;color:#3a3a50;line-height:2.2;`,
      quote: `background:${p}06;border-left:3px solid ${p}66;padding:16px 20px;margin:18px 0;color:#5a5a70;font-size:15px;line-height:1.8;border-radius:0 14px 14px 0;`,
      highlight: `background:${p}15;padding:2px 6px;border-radius:8px;`,
      divider: `text-align:center;margin:28px 0;color:#b0b8e0;font-size:14px;letter-spacing:6px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:14px;`,
      num: `display:inline-block;background:${p}22;color:${p};width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;font-weight:600;`,
      card: `background:#fff;border:1px solid ${p}15;padding:24px;border-radius:16px;text-align:center;margin:16px 0;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});
