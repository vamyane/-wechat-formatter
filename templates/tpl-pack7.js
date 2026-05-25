/**
 * 模板包7：深色主题
 * 分类：dark（深色系）
 */

// ── 深海蓝 ──
registerTemplate('deep-navy', {
  name: '深海蓝',
  desc: '深蓝底色，深邃专业',
  category: 'dark',
  contentTip: '适合科技、金融、专业分析类内容',
  primary: '#4fc3f7', bg: '#0a1628',
  demo: '<div style="font-size:12px;color:#4fc3f7;font-weight:700">🌊 深海蓝</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#c0d0e0;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:800;margin:28px 0 14px;line-height:1.5;text-shadow:0 0 20px ${p}33;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;padding:8px 16px;border:1px solid ${p}33;border-radius:6px;background:${p}08;`,
      h3: `font-size:16px;color:#e0e8f0;margin:24px 0 10px;font-weight:700;padding-left:10px;border-left:3px solid ${p};`,
      p: `margin:14px 0;font-size:16px;color:#c0d0e0;line-height:2;`,
      quote: `border-left:3px solid ${p};background:${p}08;padding:14px 18px;margin:18px 0;color:#90a0b0;font-size:15px;line-height:1.8;`,
      highlight: `background:${p}22;padding:2px 6px;color:${p};font-weight:600;border-radius:3px;`,
      divider: `text-align:center;margin:28px 0;color:#2a3a4a;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border:1px solid #1a2a3a;border-radius:6px;`,
      num: `display:inline-block;background:${p};color:#000;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;font-weight:700;`,
      card: `background:#111a28;border:1px solid ${p}22;padding:24px;border-radius:8px;text-align:center;margin:16px 0;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 炭灰极简 ──
registerTemplate('charcoal', {
  name: '炭灰极简',
  desc: '深灰底，克制高级',
  category: 'dark',
  contentTip: '适合设计、摄影、作品展示类内容',
  primary: '#e0e0e0', bg: '#1a1a1a',
  demo: '<div style="font-size:12px;color:#e0e0e0;font-weight:300;letter-spacing:3px">CHARCOAL</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#c8c8c8;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:300;margin:28px 0 14px;line-height:1.5;letter-spacing:6px;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:300;line-height:1.5;letter-spacing:3px;border-bottom:1px solid #333;padding-bottom:8px;`,
      h3: `font-size:16px;color:#e8e8e8;margin:24px 0 10px;font-weight:400;letter-spacing:2px;`,
      p: `margin:14px 0;font-size:16px;color:#c8c8c8;line-height:2;`,
      quote: `border-left:1px solid #555;padding:14px 18px;margin:18px 0;color:#888;font-size:15px;line-height:1.8;`,
      highlight: `background:#333;padding:2px 6px;color:${p};`,
      divider: `text-align:center;margin:28px 0;color:#333;font-size:14px;letter-spacing:8px;`,
      strong: `color:${p};font-weight:600;`,
      img: `max-width:100%;margin:14px auto;display:block;`,
      num: `color:${p};font-size:16px;font-weight:300;margin-right:8px;letter-spacing:2px;`,
      card: `background:#222;border:1px solid #333;padding:24px;margin:16px 0;text-align:center;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 午夜紫 ──
registerTemplate('midnight', {
  name: '午夜紫',
  desc: '深紫底，神秘优雅',
  category: 'dark',
  contentTip: '适合影视、音乐、文化评论类内容',
  primary: '#bb86fc', bg: '#12002e',
  demo: '<div style="font-size:12px;color:#bb86fc;font-weight:700;text-shadow:0 0 10px #bb86fc44">🌙 午夜紫</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#d0c0e0;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:800;margin:28px 0 14px;line-height:1.5;text-shadow:0 0 20px ${p}44;letter-spacing:2px;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;text-align:center;letter-spacing:2px;`,
      h3: `font-size:16px;color:#e0d0f0;margin:24px 0 10px;font-weight:700;padding-left:10px;border-left:2px solid ${p};`,
      p: `margin:14px 0;font-size:16px;color:#d0c0e0;line-height:2;`,
      quote: `border-left:2px solid ${p};background:${p}08;padding:14px 18px;margin:18px 0;color:#a090b0;font-size:15px;line-height:1.8;`,
      highlight: `background:${p}22;padding:2px 6px;color:${p};font-weight:600;`,
      divider: `text-align:center;margin:28px 0;color:#2a1040;font-size:14px;letter-spacing:8px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border:1px solid ${p}22;border-radius:6px;`,
      num: `color:${p};font-size:18px;font-weight:700;margin-right:8px;`,
      card: `background:#1a0040;border:1px solid ${p}22;padding:24px;margin:16px 0;text-align:center;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 暗森林 ──
registerTemplate('forest-dark', {
  name: '暗森林',
  desc: '深绿底，沉稳自然',
  category: 'dark',
  contentTip: '适合户外、环保、自然探索类内容',
  primary: '#66bb6a', bg: '#0a1a0a',
  demo: '<div style="font-size:12px;color:#66bb6a;font-weight:700">🌲 暗森林</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#b8c8b0;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:800;margin:28px 0 14px;line-height:1.5;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;padding:8px 14px;border:1px solid ${p}33;background:${p}08;border-radius:6px;`,
      h3: `font-size:16px;color:#d0e0d0;margin:24px 0 10px;font-weight:700;padding-left:10px;border-left:3px solid ${p};`,
      p: `margin:14px 0;font-size:16px;color:#b8c8b0;line-height:2;`,
      quote: `border-left:3px solid ${p};background:${p}08;padding:14px 18px;margin:18px 0;color:#90a090;font-size:15px;line-height:1.8;`,
      highlight: `background:${p}22;padding:2px 6px;color:${p};font-weight:600;`,
      divider: `text-align:center;margin:28px 0;color:#1a2a1a;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border:1px solid #1a2a1a;border-radius:6px;`,
      num: `display:inline-block;background:${p};color:#000;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;font-weight:700;`,
      card: `background:#111a11;border:1px solid ${p}22;padding:24px;border-radius:8px;text-align:center;margin:16px 0;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 酒红深邃 ──
registerTemplate('wine-dark', {
  name: '酒红深邃',
  desc: '酒红底色，奢华沉稳',
  category: 'dark',
  contentTip: '适合品牌、奢侈品、高端内容',
  primary: '#e8b4b8', bg: '#1a0a0c',
  demo: '<div style="font-size:12px;color:#e8b4b8;font-weight:700">🍷 酒红深邃</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#d8c0c2;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:800;margin:28px 0 14px;line-height:1.5;letter-spacing:3px;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;text-align:center;border-bottom:1px solid ${p}33;padding-bottom:8px;`,
      h3: `font-size:16px;color:#e8d0d2;margin:24px 0 10px;font-weight:700;padding-left:10px;border-left:2px solid ${p};`,
      p: `margin:14px 0;font-size:16px;color:#d8c0c2;line-height:2;`,
      quote: `border-left:2px solid ${p};background:${p}08;padding:14px 18px;margin:18px 0;color:#b0a0a2;font-size:15px;line-height:1.8;`,
      highlight: `color:${p};font-weight:600;`,
      divider: `text-align:center;margin:28px 0;color:#2a1015;font-size:14px;letter-spacing:8px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border:1px solid ${p}22;border-radius:6px;`,
      num: `color:${p};font-size:18px;font-weight:700;margin-right:8px;`,
      card: `background:#200a0e;border:1px solid ${p}22;padding:24px;margin:16px 0;text-align:center;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 石板灰 ──
registerTemplate('slate-dark', {
  name: '石板灰',
  desc: '冷灰底色，工业质感',
  category: 'dark',
  contentTip: '适合科技评测、极客、硬核内容',
  primary: '#78909c', bg: '#1c2028',
  demo: '<div style="font-size:12px;color:#78909c;font-weight:700;border:1px solid #78909c;padding:2px 8px">SLATE</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#b0b8c0;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:#e0e4e8;font-weight:800;margin:28px 0 14px;line-height:1.5;letter-spacing:2px;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;border-bottom:2px solid #3a4048;padding-bottom:8px;`,
      h3: `font-size:16px;color:#d0d4d8;margin:24px 0 10px;font-weight:700;padding-left:10px;border-left:3px solid ${p};`,
      p: `margin:14px 0;font-size:16px;color:#b0b8c0;line-height:2;`,
      quote: `border-left:3px solid #3a4048;background:#222830;padding:14px 18px;margin:18px 0;color:#808890;font-size:15px;line-height:1.8;`,
      highlight: `background:#2a3038;padding:2px 6px;color:${p};`,
      divider: `text-align:center;margin:28px 0;color:#2a3038;font-size:14px;`,
      strong: `color:#e0e4e8;font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border:1px solid #2a3038;border-radius:4px;`,
      num: `color:${p};font-size:16px;font-weight:700;margin-right:8px;`,
      card: `background:#222830;border:1px solid #2a3038;padding:24px;margin:16px 0;text-align:center;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});
