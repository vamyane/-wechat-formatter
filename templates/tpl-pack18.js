/**
 * 模板包18：复杂精品 - 功能型
 * 公众号兼容样式
 */

// ── 数据仪表盘 ──
registerTemplate('data-dash', {
  name: '数据仪表盘',
  desc: '暗色底+数据卡片+终端感',
  category: 'dark',
  contentTip: '数据分析、技术报告、产品报告',
  primary: '#00d4ff', bg: '#0d1117',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'Courier New',monospace;color:#c9d1d9;font-size:15px;line-height:1.9;background:${b};`,
      h1: `font-size:24px;color:${p};font-weight:700;margin:28px 0 14px;padding:16px 20px;background:${p}08;border:1px solid ${p}22;border-left:4px solid ${p};`,
      h2: `font-size:16px;color:${p};margin:28px 0 12px;font-weight:600;padding:8px 14px;background:#161b22;border-radius:6px;border:1px solid #30363d;`,
      h3: `font-size:14px;color:#8b949e;margin:24px 0 10px;font-weight:600;letter-spacing:1px;`,
      p: `margin:14px 0;font-size:15px;color:#c9d1d9;line-height:1.9;`,
      quote: `background:#161b22;border-left:3px solid ${p};padding:14px 18px;margin:18px 0;color:#8b949e;font-size:14px;line-height:1.8;border-radius:0 6px 6px 0;`,
      highlight: `background:${p}22;color:${p};padding:2px 6px;border-radius:3px;`,
      divider: `text-align:center;margin:24px 0;color:#21262d;font-size:14px;`,
      strong: `color:${p};font-weight:600;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:6px;border:1px solid #30363d;`,
      num: `background:${p};color:#0d1117;width:24px;height:24px;line-height:24px;text-align:center;font-size:12px;font-weight:700;margin-right:8px;border-radius:4px;display:inline-block;`,
      card: `background:#161b22;border:1px solid #30363d;padding:20px;margin:14px 0;border-radius:8px;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 赛博故障 ──
registerTemplate('glitch2', {
  name: '赛博故障',
  desc: '暗色底+霓虹色+科技感',
  category: 'dark',
  contentTip: '游戏、电竞、赛博朋克、黑客主题',
  primary: '#ff0055', bg: '#0c0c14',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'Courier New',monospace;color:#e0e0e0;font-size:15px;line-height:1.9;background:${b};`,
      h1: `font-size:30px;color:#fff;font-weight:900;margin:28px 0 14px;text-align:center;letter-spacing:6px;`,
      h2: `font-size:18px;color:${p};margin:32px 0 12px;font-weight:700;padding:10px 16px;background:${p}11;border:1px solid ${p}44;border-left:4px solid ${p};`,
      h3: `font-size:15px;color:#00ff88;margin:24px 0 10px;font-weight:600;`,
      p: `margin:14px 0;font-size:15px;color:#c0c0c0;line-height:1.9;`,
      quote: `background:#14141f;border-left:2px solid #00ff88;padding:14px 18px;margin:18px 0;color:#80ffb0;font-size:14px;line-height:1.8;`,
      highlight: `background:${p}33;color:${p};padding:2px 6px;`,
      divider: `text-align:center;margin:24px 0;color:#333;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border:1px solid #333;`,
      num: `background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;font-size:12px;font-weight:800;margin-right:8px;display:inline-block;`,
      card: `background:#12121c;border:1px solid #2a2a3a;padding:20px;margin:16px 0;box-shadow:0 0 20px ${p}08;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 深海蓝 ──
registerTemplate('deep-ocean', {
  name: '深海蓝',
  desc: '深蓝底+冷色调+专业感',
  category: 'dark',
  contentTip: '科技、金融、专业分析',
  primary: '#4fc3f7', bg: '#0a1628',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'PingFang SC','Microsoft YaHei',sans-serif;color:#c0d0e0;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:26px;color:${p};font-weight:800;margin:28px 0 14px;text-align:center;letter-spacing:2px;`,
      h2: `font-size:18px;color:${p};margin:32px 0 12px;font-weight:700;padding:10px 16px;border:1px solid ${p}33;border-radius:8px;background:${p}08;text-align:center;`,
      h3: `font-size:16px;color:#e0e8f0;margin:24px 0 10px;font-weight:700;padding-left:10px;border-left:3px solid ${p};`,
      p: `margin:14px 0;font-size:16px;color:#c0d0e0;line-height:2;`,
      quote: `border-left:3px solid ${p};background:${p}08;padding:14px 18px;margin:18px 0;color:#90a0b0;font-size:15px;line-height:1.8;`,
      highlight: `background:${p}22;padding:2px 6px;color:${p};font-weight:600;border-radius:3px;`,
      divider: `text-align:center;margin:28px 0;color:#2a3a4a;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border:1px solid #1a2a3a;border-radius:6px;`,
      num: `background:${p};color:#000;width:24px;height:24px;line-height:24px;text-align:center;font-size:13px;font-weight:700;margin-right:8px;border-radius:50%;display:inline-block;`,
      card: `background:#111a28;border:1px solid ${p}22;padding:24px;margin:16px 0;border-radius:8px;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 午夜紫 ──
registerTemplate('midnight2', {
  name: '午夜紫',
  desc: '深紫底+神秘优雅',
  category: 'dark',
  contentTip: '影视、音乐、文化评论',
  primary: '#bb86fc', bg: '#12002e',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'PingFang SC','Microsoft YaHei',sans-serif;color:#d0c0e0;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:28px;color:${p};font-weight:800;margin:28px 0 14px;text-align:center;letter-spacing:3px;`,
      h2: `font-size:18px;color:${p};margin:32px 0 12px;font-weight:700;text-align:center;letter-spacing:2px;`,
      h3: `font-size:16px;color:#e0d0f0;margin:24px 0 10px;font-weight:700;padding-left:10px;border-left:2px solid ${p};`,
      p: `margin:14px 0;font-size:16px;color:#d0c0e0;line-height:2;`,
      quote: `border-left:2px solid ${p};background:${p}08;padding:14px 18px;margin:18px 0;color:#a090b0;font-size:15px;line-height:1.8;`,
      highlight: `background:${p}22;padding:2px 6px;color:${p};font-weight:600;`,
      divider: `text-align:center;margin:28px 0;color:#2a1040;font-size:14px;letter-spacing:8px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border:1px solid ${p}22;border-radius:6px;`,
      num: `background:linear-gradient(135deg,#bb86fc,#7c3aed);color:#fff;width:26px;height:26px;line-height:26px;text-align:center;font-size:13px;font-weight:700;margin-right:10px;border-radius:50%;display:inline-block;`,
      card: `background:#ffffff06;border:1px solid ${p}22;border-radius:16px;padding:22px;margin:16px 0;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 日落渐变 ──
registerTemplate('sunset2', {
  name: '日落渐变',
  desc: '暖色渐变标题+温暖浪漫',
  category: 'gradient',
  contentTip: '情感、旅行、摄影、生活感悟',
  primary: '#ff6b6b', bg: '#fff8f0',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'PingFang SC','Microsoft YaHei',sans-serif;color:#3a3028;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:26px;font-weight:800;margin:28px 0 14px;line-height:1.4;background:linear-gradient(135deg,#ff6b6b,#ffa07a,#ffcc80);color:#fff;padding:14px 24px;text-align:center;`,
      h2: `font-size:18px;color:${p};margin:32px 0 12px;font-weight:700;padding:10px 20px;background:linear-gradient(90deg,#ff6b6b11,transparent);border-radius:8px;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#3a3028;line-height:2;`,
      quote: `background:linear-gradient(135deg,#ff6b6b08,#ffa07a08);border-left:3px solid ${p};padding:14px 18px;margin:18px 0;color:#5a4a3a;font-size:15px;line-height:1.8;border-radius:0 8px 8px 0;`,
      highlight: `background:linear-gradient(90deg,#ff6b6b22,#ffa07a22);padding:2px 6px;border-radius:4px;`,
      divider: `text-align:center;margin:28px 0;color:#ffcc80;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:12px;`,
      num: `background:linear-gradient(135deg,#ff6b6b,#ffa07a);color:#fff;width:24px;height:24px;line-height:24px;text-align:center;font-size:13px;margin-right:8px;border-radius:50%;display:inline-block;`,
      card: `background:linear-gradient(135deg,#ff6b6b06,#ffa07a06);border:1px solid #ff6b6b11;padding:24px;margin:16px 0;border-radius:14px;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 海洋渐变 ──
registerTemplate('ocean2', {
  name: '海洋渐变',
  desc: '蓝绿色海洋感+清新广阔',
  category: 'gradient',
  contentTip: '旅行、探索、科普',
  primary: '#0097a7', bg: '#f0f9fa',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'PingFang SC','Microsoft YaHei',sans-serif;color:#2a3a40;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:26px;font-weight:800;margin:28px 0 14px;line-height:1.4;background:linear-gradient(135deg,#0097a7,#00bcd4,#4dd0e1);color:#fff;padding:14px 24px;text-align:center;`,
      h2: `font-size:18px;color:${p};margin:32px 0 12px;font-weight:700;padding:10px 20px;background:linear-gradient(90deg,${p}0a,transparent);border-radius:8px;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#2a3a40;line-height:2;`,
      quote: `background:linear-gradient(135deg,#0097a706,#00bcd406);border-left:3px solid ${p};padding:14px 18px;margin:18px 0;color:#4a6068;font-size:15px;line-height:1.8;border-radius:0 8px 8px 0;`,
      highlight: `background:linear-gradient(90deg,#0097a718,#00bcd418);padding:2px 6px;border-radius:4px;`,
      divider: `text-align:center;margin:28px 0;color:#80cbc4;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:12px;`,
      num: `background:linear-gradient(135deg,#0097a7,#00bcd4);color:#fff;width:24px;height:24px;line-height:24px;text-align:center;font-size:13px;margin-right:8px;border-radius:50%;display:inline-block;`,
      card: `background:linear-gradient(135deg,#0097a706,#00bcd406);border:1px solid ${p}11;padding:24px;margin:16px 0;border-radius:14px;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 浆果渐变 ──
registerTemplate('berry2', {
  name: '浆果渐变',
  desc: '紫粉色渐变+甜美活力',
  category: 'gradient',
  contentTip: '美妆、时尚、年轻潮流',
  primary: '#e040fb', bg: '#fdf5ff',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'PingFang SC','Microsoft YaHei',sans-serif;color:#3a2a40;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:28px;font-weight:800;margin:28px 0 14px;line-height:1.4;background:linear-gradient(135deg,#e040fb,#ff80ab);color:#fff;padding:14px 24px;text-align:center;`,
      h2: `font-size:18px;margin:32px 0 12px;font-weight:700;display:inline-block;padding:10px 20px;background:linear-gradient(135deg,#e040fb,#ff80ab);color:#fff;border-radius:20px;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#3a2a40;line-height:2;`,
      quote: `background:linear-gradient(135deg,#e040fb06,#ff80ab06);border-left:3px solid ${p};padding:14px 18px;margin:18px 0;color:#5a4a60;font-size:15px;line-height:1.8;border-radius:0 10px 10px 0;`,
      highlight: `background:linear-gradient(90deg,#e040fb18,#ff80ab18);padding:2px 6px;border-radius:8px;`,
      divider: `text-align:center;margin:28px 0;color:#f0b0d0;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:14px;`,
      num: `background:linear-gradient(135deg,#e040fb,#ff80ab);color:#fff;width:24px;height:24px;line-height:24px;text-align:center;font-size:13px;margin-right:8px;border-radius:50%;display:inline-block;`,
      card: `background:#fff;border:1px solid #f0c0e0;padding:24px;margin:16px 0;border-radius:16px;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 冰川蓝 ──
registerTemplate('glacier2', {
  name: '冰川蓝',
  desc: '冷色渐变+清冽感',
  category: 'gradient',
  contentTip: '科技、户外、旅行、冬季主题',
  primary: '#0ea5e9', bg: '#f0f9ff',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'PingFang SC','Microsoft YaHei',sans-serif;color:#1e3a5f;font-size:16px;line-height:2;background:linear-gradient(180deg,#e0f2fe 0%,${b} 40%,#fff 100%);`,
      h1: `font-size:26px;font-weight:800;margin:28px 0 14px;line-height:1.4;background:linear-gradient(135deg,#0ea5e9,#38bdf8,#7dd3fc);color:#fff;padding:14px 24px;text-align:center;`,
      h2: `font-size:18px;margin:32px 0 12px;font-weight:700;line-height:1.5;background:linear-gradient(90deg,#0ea5e9,#38bdf8);color:#fff;padding:10px 20px;border-radius:30px;display:inline-block;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;padding-left:14px;border-left:3px solid #38bdf8;`,
      p: `margin:14px 0;font-size:16px;color:#1e3a5f;line-height:2;`,
      quote: `background:linear-gradient(135deg,#e0f2fe,#f0f9ff);border-left:3px solid #38bdf8;padding:16px 20px;margin:18px 0;color:#4a7a9b;font-size:15px;line-height:1.8;border-radius:0 12px 12px 0;`,
      highlight: `background:linear-gradient(90deg,#0ea5e922,#38bdf822);padding:2px 6px;border-radius:4px;`,
      divider: `text-align:center;margin:28px 0;color:#7dd3fc;font-size:14px;letter-spacing:6px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:14px;box-shadow:0 8px 24px rgba(14,165,233,.15);`,
      num: `background:linear-gradient(135deg,#0ea5e9,#38bdf8);color:#fff;width:26px;height:26px;line-height:26px;text-align:center;font-size:13px;font-weight:700;margin-right:10px;border-radius:50%;display:inline-block;`,
      card: `background:linear-gradient(135deg,#e0f2fe88,#f0f9ff);border:1px solid #bae6fd;padding:22px;margin:16px 0;border-radius:16px;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 薄荷清新 ──
registerTemplate('mint-fresh', {
  name: '薄荷清新',
  desc: '薄荷绿+清爽+夏日感',
  category: 'gradient',
  contentTip: '健康、养生、夏季、清新生活',
  primary: '#00bfa5', bg: '#f0faf8',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'PingFang SC','Microsoft YaHei',sans-serif;color:#1a3a30;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:26px;font-weight:800;margin:28px 0 14px;background:linear-gradient(135deg,#00bfa5,#64ffda);color:#fff;padding:14px 24px;text-align:center;`,
      h2: `font-size:18px;color:${p};margin:32px 0 12px;font-weight:700;padding:10px 20px;background:linear-gradient(90deg,#00bfa511,transparent);border-radius:8px;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;padding-left:12px;border-left:3px solid ${p};`,
      p: `margin:14px 0;font-size:16px;color:#1a3a30;line-height:2;`,
      quote: `background:#e0f5f0;border-left:3px solid ${p};padding:14px 18px;margin:18px 0;color:#3a6a5a;font-size:15px;line-height:1.8;border-radius:0 8px 8px 0;`,
      highlight: `background:${p}18;padding:2px 6px;border-radius:4px;`,
      divider: `text-align:center;margin:28px 0;color:#80cbc4;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:12px;`,
      num: `background:linear-gradient(135deg,#00bfa5,#64ffda);color:#fff;width:24px;height:24px;line-height:24px;text-align:center;font-size:13px;margin-right:8px;border-radius:50%;display:inline-block;`,
      card: `background:#fff;border:1px solid #b2dfdb;padding:24px;margin:16px 0;border-radius:14px;box-shadow:0 2px 12px rgba(0,191,165,.06);`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});
