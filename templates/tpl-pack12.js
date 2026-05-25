/**
 * 模板包12：特殊风格（中）
 * 分类：special（特殊风格）
 */

// ── 波西米亚 ──
registerTemplate('bohemian', {
  name: '波西米亚',
  desc: '自由奔放的波西米亚风格',
  category: 'special',
  contentTip: '适合旅行、音乐节、自由生活方式类内容',
  primary: '#d4742e', bg: '#fdf6ec',
  demo: '<div style="font-size:12px;color:#d4742e;font-weight:700">🌻 波西米亚</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC',sans-serif;color:#4a3a28;font-size:16px;line-height:2.2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:800;margin:28px 0 14px;line-height:1.5;letter-spacing:3px;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;border-bottom:2px solid ${p}44;padding-bottom:8px;letter-spacing:2px;`,
      h3: `font-size:16px;color:#8b5e3c;margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#4a3a28;line-height:2.2;`,
      quote: `background:#f5ead8;border-left:3px solid ${p};padding:14px 18px;margin:18px 0;color:#6a5a40;font-size:15px;line-height:1.8;border-radius:0 8px 8px 0;`,
      highlight: `background:#f0d8b0;padding:2px 6px;`,
      divider: `text-align:center;margin:28px 0;color:#d4c0a0;font-size:16px;letter-spacing:6px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:12px;`,
      num: `display:inline-block;background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;`,
      card: `background:#fff;border:1px solid #e0d0c0;padding:24px;border-radius:12px;text-align:center;margin:16px 0;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 大理石纹 ──
registerTemplate('marble', {
  name: '大理石纹',
  desc: '大理石纹理感，奢华质感',
  category: 'special',
  contentTip: '适合室内设计、奢侈品、高端品牌类内容',
  primary: '#555', bg: '#f5f3f0',
  demo: '<div style="font-size:12px;color:#555;font-weight:300;letter-spacing:4px;background:linear-gradient(135deg,#f5f3f0,#e8e4e0);padding:4px 12px">大理石</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:Georgia,'Noto Serif SC',serif;color:#3a3a3a;font-size:16px;line-height:2.2;background:${b};`,
      h1: `text-align:center;font-size:24px;color:${p};font-weight:300;margin:30px 0 14px;line-height:1.5;letter-spacing:6px;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:300;line-height:1.5;letter-spacing:4px;border-bottom:1px solid #ddd;padding-bottom:10px;`,
      h3: `font-size:16px;color:#444;margin:24px 0 10px;font-weight:500;letter-spacing:2px;`,
      p: `margin:14px 0;font-size:16px;color:#3a3a3a;line-height:2.2;`,
      quote: `background:#eee;border-left:2px solid #ccc;padding:14px 18px;margin:18px 0;color:#777;font-size:15px;line-height:1.8;font-style:italic;`,
      highlight: `background:#e8e4e0;padding:2px 4px;`,
      divider: `text-align:center;margin:28px 0;color:#ccc;font-size:16px;letter-spacing:10px;`,
      strong: `color:${p};font-weight:600;`,
      img: `max-width:100%;margin:14px auto;display:block;`,
      num: `color:${p};font-size:18px;font-weight:300;margin-right:8px;letter-spacing:2px;`,
      card: `background:#fff;border:1px solid #e0e0e0;padding:24px;margin:16px 0;text-align:center;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 几何图案 ──
registerTemplate('geometric', {
  name: '几何图案',
  desc: '几何元素装饰，现代艺术感',
  category: 'special',
  contentTip: '适合设计、建筑、数学、科技类内容',
  primary: '#e91e63', bg: '#ffffff',
  demo: '<div style="font-size:12px;color:#e91e63;font-weight:700">◆ ▲ ● 几何</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#333;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:800;margin:28px 0 14px;line-height:1.5;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;padding:10px 16px;background:${p}06;border-left:4px solid ${p};`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#333;line-height:2;`,
      quote: `background:${p}06;border-left:4px solid ${p};padding:14px 18px;margin:18px 0;color:#555;font-size:15px;line-height:1.8;`,
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

// ── 霓虹发光 ──
registerTemplate('neon-glow', {
  name: '霓虹发光',
  desc: '霓虹灯光效果，夜店风',
  category: 'special',
  contentTip: '适合夜生活、派对、电子音乐类内容',
  primary: '#00e5ff', bg: '#0d0d0d',
  demo: '<div style="font-size:13px;color:#00e5ff;font-weight:700;text-shadow:0 0 10px #00e5ff88,0 0 20px #00e5ff44">NEON</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC',sans-serif;color:#c0c0c0;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:24px;color:${p};font-weight:900;margin:28px 0 14px;line-height:1.5;text-shadow:0 0 10px ${p}88,0 0 30px ${p}44,0 0 60px ${p}22;letter-spacing:4px;`,
      h2: `font-size:18px;color:#ff0080;margin:36px 0 14px;font-weight:700;line-height:1.5;text-shadow:0 0 10px #ff008066;`,
      h3: `font-size:16px;color:#ffff00;margin:24px 0 10px;font-weight:700;text-shadow:0 0 8px #ffff0044;`,
      p: `margin:14px 0;font-size:16px;color:#c0c0c0;line-height:2;`,
      quote: `border-left:2px solid #ff0080;background:#ff008008;padding:14px 18px;margin:18px 0;color:#a0a0a0;font-size:15px;line-height:1.8;`,
      highlight: `background:${p}22;padding:2px 6px;color:${p};font-weight:700;text-shadow:0 0 5px ${p}44;`,
      divider: `text-align:center;margin:28px 0;color:#222;font-size:14px;`,
      strong: `color:#ff0080;font-weight:700;text-shadow:0 0 5px #ff008044;`,
      img: `max-width:100%;margin:14px auto;display:block;border:1px solid ${p}33;`,
      num: `color:#ff0080;font-size:16px;font-weight:700;margin-right:8px;`,
      card: `border:1px solid ${p}22;background:#111;padding:20px;margin:16px 0;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 粉彩梦 ──
registerTemplate('pastel-dream', {
  name: '粉彩梦',
  desc: '柔和粉彩配色，梦幻甜美',
  category: 'special',
  contentTip: '适合少女心、甜品、童话、可爱内容',
  primary: '#c084fc', bg: '#fef4ff',
  demo: '<div style="background:linear-gradient(135deg,#c084fc,#f9a8d4,#fde68a);color:#fff;padding:3px 10px;font-size:11px;border-radius:12px">🌈 粉彩梦</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC',sans-serif;color:#4a3a50;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;font-weight:800;margin:28px 0 14px;line-height:1.5;background:linear-gradient(135deg,#c084fc,#f9a8d4,#fde68a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;display:inline-block;padding:8px 20px;background:linear-gradient(135deg,#c084fc11,#f9a8d411);border-radius:20px;`,
      h3: `font-size:16px;color:#e879a8;margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#4a3a50;line-height:2;`,
      quote: `background:#fff;border-left:3px solid ${p};padding:14px 18px;margin:18px 0;color:#6a5a70;font-size:15px;line-height:1.8;border-radius:0 14px 14px 0;box-shadow:0 2px 8px rgba(192,132,252,.06);`,
      highlight: `background:linear-gradient(90deg,#c084fc18,#f9a8d418);padding:2px 6px;border-radius:8px;`,
      divider: `text-align:center;margin:28px 0;color:#e0c0f0;font-size:14px;`,
      strong: `color:#e879a8;font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:16px;`,
      num: `display:inline-block;background:linear-gradient(135deg,#c084fc,#f9a8d4);color:#fff;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;`,
      card: `background:#fff;border:1px solid #f0d0e8;padding:24px;border-radius:18px;text-align:center;margin:16px 0;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});
