/**
 * 模板包8：渐变风格
 * 分类：gradient（渐变风）
 */

// ── 日落渐变 ──
registerTemplate('sunset-grad', {
  name: '日落渐变',
  desc: '暖色日落渐变，温暖浪漫',
  category: 'gradient',
  contentTip: '适合情感、旅行、摄影、生活感悟类内容',
  primary: '#ff6b6b', bg: '#fff8f0',
  demo: '<div style="background:linear-gradient(135deg,#ff6b6b,#ffa07a);color:#fff;padding:3px 10px;font-size:11px;border-radius:10px">🌅 日落</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#3a3028;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:24px;font-weight:800;margin:28px 0 14px;line-height:1.5;background:linear-gradient(135deg,#ff6b6b,#ffa07a,#ffcc80);-webkit-background-clip:text;-webkit-text-fill-color:transparent;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;padding:8px 16px;background:linear-gradient(90deg,#ff6b6b11,transparent);border-radius:8px;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#3a3028;line-height:2;`,
      quote: `background:linear-gradient(135deg,#ff6b6b08,#ffa07a08);border-left:3px solid ${p};padding:14px 18px;margin:18px 0;color:#5a4a3a;font-size:15px;line-height:1.8;border-radius:0 8px 8px 0;`,
      highlight: `background:linear-gradient(90deg,#ff6b6b22,#ffa07a22);padding:2px 6px;border-radius:4px;`,
      divider: `text-align:center;margin:28px 0;color:#ffcc80;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:12px;`,
      num: `display:inline-block;background:linear-gradient(135deg,#ff6b6b,#ffa07a);color:#fff;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;`,
      card: `background:linear-gradient(135deg,#ff6b6b06,#ffa07a06);border:1px solid #ff6b6b11;padding:24px;border-radius:14px;text-align:center;margin:16px 0;`,
    };
  }
});

// ── 海洋渐变 ──
registerTemplate('ocean-grad', {
  name: '海洋渐变',
  desc: '蓝绿色海洋感，清新广阔',
  category: 'gradient',
  contentTip: '适合旅行、探索、科普类内容',
  primary: '#0097a7', bg: '#f0f9fa',
  demo: '<div style="background:linear-gradient(135deg,#0097a7,#00bcd4);color:#fff;padding:3px 10px;font-size:11px;border-radius:10px">🌊 海洋</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#2a3a40;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:24px;font-weight:800;margin:28px 0 14px;line-height:1.5;background:linear-gradient(135deg,#0097a7,#00bcd4,#4dd0e1);-webkit-background-clip:text;-webkit-text-fill-color:transparent;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;padding:8px 16px;background:linear-gradient(90deg,${p}0a,transparent);border-radius:8px;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#2a3a40;line-height:2;`,
      quote: `background:linear-gradient(135deg,#0097a706,#00bcd406);border-left:3px solid ${p};padding:14px 18px;margin:18px 0;color:#4a6068;font-size:15px;line-height:1.8;border-radius:0 8px 8px 0;`,
      highlight: `background:linear-gradient(90deg,#0097a718,#00bcd418);padding:2px 6px;border-radius:4px;`,
      divider: `text-align:center;margin:28px 0;color:#80cbc4;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:12px;`,
      num: `display:inline-block;background:linear-gradient(135deg,#0097a7,#00bcd4);color:#fff;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;`,
      card: `background:linear-gradient(135deg,#0097a706,#00bcd406);border:1px solid ${p}11;padding:24px;border-radius:14px;text-align:center;margin:16px 0;`,
    };
  }
});

// ── 浆果渐变 ──
registerTemplate('berry-grad', {
  name: '浆果渐变',
  desc: '紫粉色渐变，甜美活力',
  category: 'gradient',
  contentTip: '适合美妆、时尚、年轻潮流类内容',
  primary: '#e040fb', bg: '#fdf5ff',
  demo: '<div style="background:linear-gradient(135deg,#e040fb,#ff80ab);color:#fff;padding:3px 10px;font-size:11px;border-radius:10px">🫐 浆果</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#3a2a40;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:24px;font-weight:800;margin:28px 0 14px;line-height:1.5;background:linear-gradient(135deg,#e040fb,#ff80ab);-webkit-background-clip:text;-webkit-text-fill-color:transparent;`,
      h2: `font-size:18px;margin:36px 0 12px;font-weight:700;line-height:1.5;display:inline-block;padding:8px 20px;background:linear-gradient(135deg,#e040fb,#ff80ab);color:#fff;border-radius:20px;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#3a2a40;line-height:2;`,
      quote: `background:linear-gradient(135deg,#e040fb06,#ff80ab06);border-left:3px solid ${p};padding:14px 18px;margin:18px 0;color:#5a4a60;font-size:15px;line-height:1.8;border-radius:0 10px 10px 0;`,
      highlight: `background:linear-gradient(90deg,#e040fb18,#ff80ab18);padding:2px 6px;border-radius:8px;`,
      divider: `text-align:center;margin:28px 0;color:#f0b0d0;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:14px;`,
      num: `display:inline-block;background:linear-gradient(135deg,#e040fb,#ff80ab);color:#fff;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;`,
      card: `background:#fff;border:1px solid #f0c0e0;padding:24px;border-radius:16px;text-align:center;margin:16px 0;`,
    };
  }
});

// ── 热带渐变 ──
registerTemplate('tropical-grad', {
  name: '热带渐变',
  desc: '绿黄渐变，活力热带',
  category: 'gradient',
  contentTip: '适合美食、健康、运动、活力类内容',
  primary: '#00c853', bg: '#f5fff0',
  demo: '<div style="background:linear-gradient(135deg,#00c853,#ffeb3b);color:#333;padding:3px 10px;font-size:11px;border-radius:10px;font-weight:700">🌴 热带</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#2a3a20;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:24px;font-weight:800;margin:28px 0 14px;line-height:1.5;background:linear-gradient(135deg,#00c853,#64dd17,#ffeb3b);-webkit-background-clip:text;-webkit-text-fill-color:transparent;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;padding:8px 16px;background:linear-gradient(90deg,${p}08,transparent);border-radius:8px;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#2a3a20;line-height:2;`,
      quote: `background:linear-gradient(135deg,#00c85306,#ffeb3b06);border-left:3px solid ${p};padding:14px 18px;margin:18px 0;color:#4a5a3a;font-size:15px;line-height:1.8;border-radius:0 8px 8px 0;`,
      highlight: `background:linear-gradient(90deg,#00c85318,#ffeb3b18);padding:2px 6px;border-radius:4px;`,
      divider: `text-align:center;margin:28px 0;color:#a5d6a7;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:12px;`,
      num: `display:inline-block;background:linear-gradient(135deg,#00c853,#ffeb3b);color:#333;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;font-weight:700;`,
      card: `background:linear-gradient(135deg,#00c85306,#ffeb3b06);border:1px solid ${p}11;padding:24px;border-radius:14px;text-align:center;margin:16px 0;`,
    };
  }
});

// ── 银河渐变 ──
registerTemplate('galaxy-grad', {
  name: '银河渐变',
  desc: '深空紫色渐变，宇宙梦幻',
  category: 'gradient',
  contentTip: '适合科幻、天文、想象力、创意类内容',
  primary: '#7c4dff', bg: '#0a0020',
  demo: '<div style="background:linear-gradient(135deg,#7c4dff,#e040fb,#ff80ab);color:#fff;padding:3px 10px;font-size:11px;border-radius:10px">🌌 银河</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#c0b0e0;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:24px;font-weight:800;margin:28px 0 14px;line-height:1.5;background:linear-gradient(135deg,#7c4dff,#e040fb,#ff80ab);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-shadow:none;`,
      h2: `font-size:18px;margin:36px 0 12px;font-weight:700;line-height:1.5;padding:8px 16px;background:linear-gradient(90deg,#7c4dff22,transparent);border-radius:8px;color:#d0c0f0;`,
      h3: `font-size:16px;color:#e0d0ff;margin:24px 0 10px;font-weight:700;padding-left:10px;border-left:2px solid ${p};`,
      p: `margin:14px 0;font-size:16px;color:#c0b0e0;line-height:2;`,
      quote: `border-left:2px solid #e040fb;background:#e040fb08;padding:14px 18px;margin:18px 0;color:#a090c0;font-size:15px;line-height:1.8;`,
      highlight: `background:linear-gradient(90deg,#7c4dff22,#e040fb22);padding:2px 6px;color:#e0d0ff;border-radius:4px;`,
      divider: `text-align:center;margin:28px 0;color:#2a1040;font-size:14px;`,
      strong: `color:#e040fb;font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border:1px solid #7c4dff22;border-radius:10px;`,
      num: `display:inline-block;background:linear-gradient(135deg,#7c4dff,#e040fb);color:#fff;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;`,
      card: `background:#120030;border:1px solid #7c4dff22;padding:24px;border-radius:12px;text-align:center;margin:16px 0;`,
    };
  }
});

// ── 天空渐变 ──
registerTemplate('sky-grad', {
  name: '天空渐变',
  desc: '天蓝到白渐变，清爽明朗',
  category: 'gradient',
  contentTip: '适合教育、知识分享、正能量类内容',
  primary: '#1976d2', bg: '#f5f9ff',
  demo: '<div style="background:linear-gradient(180deg,#1976d2,#64b5f6);color:#fff;padding:3px 10px;font-size:11px;border-radius:10px">☁️ 天空</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#2a3a50;font-size:16px;line-height:2;background:linear-gradient(180deg,${b},#e8f0ff);`,
      h1: `text-align:center;font-size:24px;font-weight:800;margin:28px 0 14px;line-height:1.5;background:linear-gradient(180deg,#1976d2,#64b5f6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;padding:8px 16px;background:linear-gradient(90deg,${p}08,transparent);border-radius:8px;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#2a3a50;line-height:2;`,
      quote: `background:#e3f2fd;border-left:3px solid ${p};padding:14px 18px;margin:18px 0;color:#4a5a70;font-size:15px;line-height:1.8;border-radius:0 8px 8px 0;`,
      highlight: `background:#bbdefb;padding:2px 4px;`,
      divider: `text-align:center;margin:28px 0;color:#90caf9;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:12px;`,
      num: `display:inline-block;background:linear-gradient(180deg,#1976d2,#64b5f6);color:#fff;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;`,
      card: `background:#fff;border:1px solid #bbdefb;padding:24px;border-radius:14px;text-align:center;margin:16px 0;`,
    };
  }
});
