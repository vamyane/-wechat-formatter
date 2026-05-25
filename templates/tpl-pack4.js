/**
 * 模板包：糖果色 / 哥特暗黑 / 清新插画 / 商务蓝 / 像素复古
 */

// ── 16. 糖果色 ──
registerTemplate('candy', {
  name: '糖果色',
  desc: '多彩活泼，适合年轻/娱乐',
  primary: '#fd79a8', bg: '#fffafc',
  demo: '<div style="background:linear-gradient(90deg,#fd79a8,#fdcb6e,#00b894);color:#fff;padding:3px 12px;font-size:11px;font-weight:700;border-radius:10px;display:inline-block">糖果色</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#444;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:24px;font-weight:800;margin:28px 0 14px;line-height:1.5;background:linear-gradient(90deg,#fd79a8,#fdcb6e,#6c5ce7);-webkit-background-clip:text;-webkit-text-fill-color:transparent;`,
      h2: `font-size:18px;color:${p};margin:32px 0 14px;padding:8px 16px;background:linear-gradient(90deg,#fd79a811,#fdcb6e11);border-radius:20px;line-height:1.5;font-weight:700;display:inline-block;`,
      h3: `font-size:16px;color:#6c5ce7;margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#444;line-height:2;`,
      quote: `background:#fff;border-left:4px solid ${p};padding:14px 18px;margin:18px 0;color:#666;font-size:15px;line-height:1.8;border-radius:0 12px 12px 0;box-shadow:0 2px 8px rgba(0,0,0,.04);`,
      highlight: `background:#fd79a818;padding:2px 6px;border-radius:6px;`,
      divider: `text-align:center;margin:28px 0;color:#eee;font-size:14px;`,
      strong: `color:#6c5ce7;font-weight:700;`,
      img: `max-width:100%;border-radius:16px;margin:14px auto;display:block;`,
      num: `display:inline-block;background:linear-gradient(135deg,#fd79a8,#fdcb6e);color:#fff;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;`,
      card: `background:#fff;border:1px solid #f0e0e8;padding:24px;border-radius:16px;text-align:center;margin:16px 0;box-shadow:0 2px 12px rgba(253,121,168,.08);`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 17. 哥特暗黑 ──
registerTemplate('gothic', {
  name: '哥特暗黑',
  desc: '深紫+暗红，神秘/暗黑风',
  primary: '#9b59b6', bg: '#0d0d0d',
  demo: '<div style="color:#9b59b6;font-size:14px;font-weight:700;font-family:serif;letter-spacing:3px">GOTHIC</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:Georgia,'Noto Serif SC','SimSun',serif;color:#c8c0b8;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:26px;color:${p};font-weight:700;margin:30px 0 14px;font-family:Georgia,serif;letter-spacing:6px;line-height:1.5;text-shadow:0 0 20px ${p}33;`,
      h2: `font-size:19px;color:${p};margin:36px 0 14px;font-family:Georgia,serif;font-weight:700;letter-spacing:3px;line-height:1.5;text-align:center;`,
      h3: `font-size:16px;color:#e0d8d0;margin:24px 0 10px;font-weight:700;padding-left:10px;border-left:2px solid ${p};`,
      p: `margin:14px 0;font-size:16px;color:#c8c0b8;line-height:2;`,
      quote: `border-left:2px solid ${p};background:${p}08;padding:14px 20px;margin:20px 0;color:#a09888;font-size:15px;line-height:1.8;font-style:italic;`,
      highlight: `color:${p};font-weight:700;`,
      divider: `text-align:center;margin:30px 0;color:#333;font-size:16px;letter-spacing:10px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:16px auto;display:block;border:1px solid #333;`,
      num: `color:${p};font-size:20px;font-weight:700;margin-right:6px;`,
      card: `border:1px solid #333;background:#111;padding:24px;margin:20px 0;text-align:center;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 18. 清新插画 ──
registerTemplate('illustration', {
  name: '清新插画',
  desc: '圆润+多彩，适合科普/教育',
  primary: '#3498db', bg: '#f0f8ff',
  demo: '<div style="color:#3498db;font-size:13px;font-weight:700;background:#3498db11;padding:4px 12px;border-radius:20px;display:inline-block">📚 知识卡片</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#333;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:800;margin:28px 0 14px;line-height:1.5;`,
      h2: `font-size:18px;color:#fff;background:${p};margin:32px 0 14px;padding:10px 20px;border-radius:12px;line-height:1.5;font-weight:700;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;background:${p}0a;padding:6px 12px;border-radius:8px;display:inline-block;`,
      p: `margin:14px 0;font-size:16px;color:#333;line-height:2;`,
      quote: `background:#fff;border-left:4px solid ${p};padding:16px 20px;margin:18px 0;color:#555;font-size:15px;line-height:1.8;border-radius:0 12px 12px 0;box-shadow:0 2px 8px rgba(0,0,0,.05);`,
      highlight: `background:${p};color:#fff;padding:2px 8px;border-radius:10px;font-weight:600;font-size:14px;`,
      divider: `text-align:center;margin:28px 0;color:#ddd;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;border-radius:14px;margin:14px auto;display:block;box-shadow:0 4px 16px rgba(0,0,0,.08);`,
      num: `display:inline-flex;align-items:center;justify-content:center;background:${p};color:#fff;width:28px;height:28px;border-radius:10px;font-size:14px;margin-right:10px;font-weight:700;`,
      card: `background:#fff;padding:24px;border-radius:16px;text-align:center;margin:16px 0;box-shadow:0 4px 16px rgba(52,152,219,.1);`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 19. 商务蓝 ──
registerTemplate('bizblue', {
  name: '商务蓝',
  desc: '专业稳重，适合商业/金融',
  primary: '#1e3a5f', bg: '#ffffff',
  demo: '<div style="color:#1e3a5f;font-size:14px;font-weight:700;border-bottom:2px solid #1e3a5f;padding-bottom:2px">Business</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#333;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:800;margin:28px 0 14px;line-height:1.5;`,
      h2: `font-size:18px;color:${p};margin:36px 0 14px;font-weight:700;line-height:1.5;border-bottom:2px solid ${p};padding-bottom:8px;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#333;line-height:2;`,
      quote: `background:#f5f8fb;border-left:4px solid ${p};padding:14px 18px;margin:18px 0;color:#555;font-size:15px;line-height:1.8;`,
      highlight: `background:${p}12;padding:2px 4px;font-weight:600;`,
      divider: `text-align:center;margin:28px 0;color:#ccc;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;`,
      num: `display:inline-block;background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;border-radius:4px;font-size:13px;margin-right:8px;font-weight:700;`,
      card: `background:#f5f8fb;border:1px solid #e0e8f0;padding:24px;margin:16px 0;text-align:center;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 20. 像素复古 ──
registerTemplate('pixel', {
  name: '像素复古',
  desc: '8-bit 像素风，怀旧游戏感',
  primary: '#e74c3c', bg: '#1a1c2c',
  demo: '<div style="font-family:monospace;font-size:12px;color:#e74c3c;image-rendering:pixelated">8-BIT RETRO</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'Courier New',Consolas,monospace;color:#f0e0c0;font-size:15px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:700;margin:28px 0 14px;letter-spacing:4px;line-height:1.5;font-family:monospace;`,
      h2: `font-size:17px;color:#f0e0c0;margin:32px 0 14px;padding:8px 14px;background:${p};line-height:1.5;font-weight:700;font-family:monospace;letter-spacing:2px;`,
      h3: `font-size:15px;color:#f0e0c0;margin:24px 0 10px;font-weight:700;padding-left:10px;border-left:3px solid ${p};font-family:monospace;`,
      p: `margin:14px 0;font-size:15px;color:#f0e0c0;line-height:2;`,
      quote: `border-left:3px solid #f0e0c0;background:#f0e0c008;padding:14px 18px;margin:18px 0;color:#a09080;font-size:14px;line-height:1.8;`,
      highlight: `background:${p};color:#fff;padding:2px 4px;`,
      divider: `text-align:center;margin:28px 0;color:#555;font-size:14px;font-family:monospace;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border:2px solid #555;`,
      num: `color:${p};font-family:monospace;font-size:16px;font-weight:700;margin-right:8px;`,
      card: `border:2px solid #555;background:#222233;padding:20px;margin:16px 0;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});
