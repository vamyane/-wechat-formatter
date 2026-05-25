/**
 * 模板包16：复杂精品（下）
 * 每个模板都有独特的结构设计
 */

// ── 像素游戏 ──
registerTemplate('pixel-game', {
  name: '像素游戏',
  desc: '像素字体+8bit配色+游戏风',
  category: 'special',
  contentTip: '适合游戏评测、怀旧、独立游戏、像素艺术',
  primary: '#e04040', bg: '#1a1a2e',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'Courier New',monospace;color:#e0e0e0;font-size:12px;line-height:2.2;background:${b};`,
      h1: `font-size:18px;color:#ffcc00;font-weight:400;margin:28px 0 16px;text-align:center;text-shadow:2px 2px 0 #000;letter-spacing:2px;`,
      h2: `font-size:14px;color:${p};margin:28px 0 12px;font-weight:400;padding:10px 16px;background:#16213e;border:2px solid ${p};text-shadow:1px 1px 0 #000;`,
      h3: `font-size:12px;color:#00ff88;margin:24px 0 10px;font-weight:400;`,
      p: `margin:14px 0;font-size:12px;color:#c0c0c0;line-height:2.2;`,
      quote: `background:#16213e;border:2px solid #444;padding:14px 18px;margin:18px 0;color:#80ffb0;font-size:11px;line-height:2;`,
      highlight: `background:${p};color:#fff;padding:2px 6px;`,
      divider: `text-align:center;margin:24px 0;color:#444;font-size:14px;font-family:monospace;`,
      strong: `color:#ffcc00;font-weight:400;`,
      img: `max-width:100%;margin:14px auto;display:block;border:3px solid #444;image-rendering:pixelated;`,
      num: `display:inline-block;background:${p};color:#fff;width:20px;height:20px;line-height:20px;text-align:center;font-size:10px;margin-right:8px;font-family:monospace;`,
      card: `background:#16213e;border:2px solid #444;padding:16px;margin:14px 0;box-shadow:4px 4px 0 #0a0a14;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 日式侘寂 ──
registerTemplate('wabi-sabi', {
  name: '日式侘寂',
  desc: '极致留白+不对称+素朴之美',
  category: 'special',
  contentTip: '适合禅意、茶道、花道、日式美学',
  primary: '#6b6b6b', bg: '#faf9f6',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'SimSun','Noto Serif SC',serif;color:#3a3a3a;font-size:16px;line-height:2.4;background:${b};`,
      h1: `font-size:24px;color:${p};font-weight:300;margin:60px 0 20px;letter-spacing:10px;`,
      h2: `font-size:15px;color:#888;margin:48px 0 16px;font-weight:300;letter-spacing:4px;padding-left:20px;border-left:1px solid #ccc;`,
      h3: `font-size:17px;color:#555;margin:32px 0 10px;font-weight:400;letter-spacing:2px;`,
      p: `margin:16px 0;font-size:16px;color:#4a4a4a;line-height:2.4;`,
      quote: `margin:32px 48px;padding:24px 0;color:#888;font-size:15px;line-height:2;text-align:center;font-style:italic;`,
      highlight: `background:#f0ece0;padding:2px 4px;`,
      divider: `text-align:center;margin:48px 0;color:#ddd;font-size:24px;`,
      strong: `color:#555;font-weight:500;`,
      img: `max-width:80%;margin:24px auto;display:block;`,
      num: `font-size:18px;color:#bbb;font-weight:300;margin-right:16px;letter-spacing:4px;`,
      card: `border:none;padding:32px;margin:24px 0;background:transparent;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 霓虹渐变 ──
registerTemplate('neon-gradient', {
  name: '霓虹渐变',
  desc: '霓虹色渐变背景+发光文字',
  category: 'gradient',
  contentTip: '适合派对、音乐、潮流、夜生活',
  primary: '#ff006e', bg: '#1a0030',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC',sans-serif;color:#e0d0f0;font-size:16px;line-height:2;background:linear-gradient(135deg,#1a0030 0%,#0a0020 50%,#000a20 100%);`,
      h1: `font-size:28px;font-weight:800;margin:32px 0 16px;text-align:center;background:linear-gradient(90deg,#ff006e,#ff7700,#ffdd00,#00ff88,#0088ff,#8800ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:2px;`,
      h2: `font-size:18px;margin:32px 0 14px;font-weight:700;background:linear-gradient(90deg,#ff006e,#8800ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;padding:10px 0;border-bottom:2px solid #ff006e44;`,
      h3: `font-size:16px;color:#ff77aa;margin:24px 0 10px;font-weight:600;`,
      p: `margin:14px 0;font-size:16px;color:#c0b0d0;line-height:2;`,
      quote: `background:#ffffff08;border-left:2px solid #ff006e;padding:16px 20px;margin:18px 0;color:#a090b0;font-size:15px;line-height:1.8;`,
      highlight: `background:#ff006e33;color:#ff77aa;padding:2px 8px;border-radius:4px;`,
      divider: `text-align:center;margin:28px 0;background:linear-gradient(90deg,transparent,#ff006e44,transparent);height:1px;`,
      strong: `color:#ff77aa;font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:12px;border:1px solid #ffffff11;`,
      num: `display:inline-flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#ff006e,#8800ff);color:#fff;width:26px;height:26px;border-radius:50%;font-size:13px;font-weight:700;margin-right:10px;`,
      card: `background:#ffffff06;border:1px solid #ffffff11;border-radius:16px;padding:22px;margin:16px 0;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 咖啡菜单 ──
registerTemplate('coffee-menu', {
  name: '咖啡菜单',
  desc: '咖啡店菜单风格+手写体+暖棕调',
  category: 'special',
  contentTip: '适合美食、咖啡、烘焙、生活方式',
  primary: '#5c3d2e', bg: '#f7f2ec',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'Georgia','Noto Serif SC',serif;color:#4a3830;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:30px;color:${p};font-weight:400;margin:24px 0 12px;text-align:center;letter-spacing:6px;font-variant:small-caps;`,
      h2: `font-size:16px;color:${p};margin:32px 0 14px;font-weight:400;text-align:center;letter-spacing:3px;padding:12px 0;border-top:1px solid ${p}44;border-bottom:1px solid ${p}44;`,
      h3: `font-size:18px;color:#7a5a4a;margin:24px 0 10px;font-weight:600;font-style:italic;`,
      p: `margin:14px 0;font-size:16px;color:#4a3830;line-height:2;`,
      quote: `background:#f0e8d8;border-left:2px solid ${p};padding:14px 18px;margin:18px 0;color:#6a5848;font-size:15px;line-height:1.8;font-style:italic;border-radius:0 8px 8px 0;`,
      highlight: `background:${p}18;padding:2px 6px;border-radius:4px;`,
      divider: `text-align:center;margin:28px 0;color:#c0a888;font-size:18px;letter-spacing:8px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:12px;`,
      num: `display:inline-block;color:${p};font-size:20px;font-weight:700;margin-right:10px;font-family:Georgia,'SimSun',serif;`,
      card: `background:#fff;border:1px solid #d8c8b0;padding:24px;margin:16px 0;border-radius:12px;box-shadow:0 2px 8px rgba(92,61,46,.06);`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 科技仪表盘 ──
registerTemplate('tech-dashboard', {
  name: '科技仪表盘',
  desc: '暗色仪表盘风格+数据感+科技蓝',
  category: 'dark',
  contentTip: '适合数据分析、技术文档、产品报告',
  primary: '#00d4ff', bg: '#0d1117',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'Courier New',monospace;color:#c9d1d9;font-size:15px;line-height:1.9;background:${b};`,
      h1: `font-size:24px;color:${p};font-weight:700;margin:28px 0 14px;padding:16px 20px;background:${p}08;border:1px solid ${p}22;border-radius:8px;border-left:4px solid ${p};`,
      h2: `font-size:16px;color:${p};margin:28px 0 12px;font-weight:600;padding:8px 14px;background:#161b22;border-radius:6px;border:1px solid #30363d;`,
      h3: `font-size:14px;color:#8b949e;margin:24px 0 10px;font-weight:600;letter-spacing:1px;text-transform:uppercase;`,
      p: `margin:14px 0;font-size:15px;color:#c9d1d9;line-height:1.9;`,
      quote: `background:#161b22;border-left:3px solid ${p};padding:14px 18px;margin:18px 0;color:#8b949e;font-size:14px;line-height:1.8;border-radius:0 6px 6px 0;`,
      highlight: `background:${p}22;color:${p};padding:2px 6px;border-radius:3px;font-family:monospace;`,
      divider: `text-align:center;margin:24px 0;color:#21262d;font-size:14px;`,
      strong: `color:${p};font-weight:600;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:6px;border:1px solid #30363d;`,
      num: `display:inline-block;background:${p};color:#0d1117;width:24px;height:24px;line-height:24px;text-align:center;font-size:12px;font-weight:700;margin-right:8px;border-radius:4px;font-family:monospace;`,
      card: `background:#161b22;border:1px solid #30363d;padding:20px;margin:14px 0;border-radius:8px;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 花园自然 ──
registerTemplate('garden', {
  name: '花园自然',
  desc: '自然绿+有机形状+植物装饰',
  category: 'nature',
  contentTip: '适合园艺、有机食品、环保、户外活动',
  primary: '#2d6a4f', bg: '#f0f7f0',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC',sans-serif;color:#2a3a2a;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:26px;color:${p};font-weight:800;margin:28px 0 14px;text-align:center;`,
      h2: `font-size:18px;color:#fff;margin:32px 0 14px;font-weight:700;padding:12px 24px;background:linear-gradient(135deg,#2d6a4f,#40916c);border-radius:30px;display:inline-block;box-shadow:0 4px 12px rgba(45,106,79,.2);`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;padding-left:16px;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Ccircle cx='6' cy='6' r='5' fill='%232d6a4f' opacity='.2'/%3E%3C/svg%3E") no-repeat left center;`,
      p: `margin:14px 0;font-size:16px;color:#2a3a2a;line-height:2;`,
      quote: `background:#e8f5e8;border-left:3px solid #52b788;padding:16px 20px;margin:18px 0;color:#3a5a3a;font-size:15px;line-height:1.8;border-radius:0 12px 12px 0;`,
      highlight: `background:#d4edda;padding:2px 6px;border-radius:8px;`,
      divider: `text-align:center;margin:28px 0;color:#95d5b2;font-size:16px;letter-spacing:4px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:16px;`,
      num: `display:inline-flex;align-items:center;justify-content:center;background:#52b788;color:#fff;width:26px;height:26px;border-radius:50%;font-size:13px;font-weight:700;margin-right:10px;`,
      card: `background:#fff;border:1px solid #b7e4c7;padding:24px;margin:16px 0;border-radius:16px;box-shadow:0 2px 12px rgba(45,106,79,.06);`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 星空宇宙 ──
registerTemplate('cosmos', {
  name: '星空宇宙',
  desc: '深空背景+星点+宇宙感',
  category: 'dark',
  contentTip: '适合天文、科幻、哲学、深度思考',
  primary: '#a78bfa', bg: '#0f0a1a',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC',sans-serif;color:#d0c8e0;font-size:16px;line-height:2;background:radial-gradient(ellipse at 20% 50%,#1a1040 0%,#0f0a1a 50%,#050210 100%);`,
      h1: `font-size:28px;color:#fff;font-weight:800;margin:32px 0 16px;text-align:center;text-shadow:0 0 20px ${p}44;letter-spacing:3px;`,
      h2: `font-size:18px;color:${p};margin:32px 0 14px;font-weight:700;padding:12px 20px;border:1px solid ${p}33;border-radius:12px;background:${p}08;text-align:center;`,
      h3: `font-size:16px;color:#c4b5fd;margin:24px 0 10px;font-weight:600;`,
      p: `margin:14px 0;font-size:16px;color:#c0b8d0;line-height:2;`,
      quote: `background:${p}08;border-left:2px solid ${p};padding:16px 20px;margin:18px 0;color:#a098b0;font-size:15px;line-height:1.8;border-radius:0 8px 8px 0;`,
      highlight: `background:${p}22;color:${p};padding:2px 8px;border-radius:4px;`,
      divider: `text-align:center;margin:28px 0;color:#2a2040;font-size:14px;letter-spacing:8px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:12px;border:1px solid ${p}22;`,
      num: `display:inline-flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#a78bfa,#7c3aed);color:#fff;width:26px;height:26px;border-radius:50%;font-size:13px;font-weight:700;margin-right:10px;`,
      card: `background:#ffffff06;border:1px solid ${p}22;border-radius:16px;padding:22px;margin:16px 0;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 糖果波普 ──
registerTemplate('candy-pop', {
  name: '糖果波普',
  desc: '波普艺术+高饱和+大胆撞色',
  category: 'special',
  contentTip: '适合潮流、年轻、派对、创意市集',
  primary: '#ff2d87', bg: '#fff5f9',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC',sans-serif;color:#333;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:30px;font-weight:900;margin:24px 0 14px;text-align:center;background:linear-gradient(90deg,#ff2d87,#ff6b35,#ffd700,#00cc88,#3366ff,#cc33ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-text-stroke:0.5px rgba(0,0,0,.1);`,
      h2: `font-size:18px;font-weight:800;margin:28px 0 12px;display:inline-block;padding:10px 24px;background:${p};color:#fff;border-radius:0;clip-path:polygon(8px 0,100% 0,calc(100% - 8px) 100%,0 100%);text-transform:uppercase;letter-spacing:2px;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:800;text-transform:uppercase;letter-spacing:1px;`,
      p: `margin:14px 0;font-size:16px;color:#444;line-height:2;`,
      quote: `background:#fff;border:3px solid ${p};padding:18px 22px;margin:18px 0;color:#555;font-size:15px;line-height:1.8;position:relative;`,
      highlight: `background:#ffd700;color:#333;padding:2px 8px;font-weight:700;`,
      divider: `text-align:center;margin:28px 0;height:4px;background:linear-gradient(90deg,#ff2d87,#ff6b35,#ffd700,#00cc88,#3366ff,#cc33ff);border-radius:2px;`,
      strong: `color:${p};font-weight:800;`,
      img: `max-width:100%;margin:14px auto;display:block;border:4px solid ${p};border-radius:0;`,
      num: `display:inline-flex;align-items:center;justify-content:center;background:${p};color:#fff;width:28px;height:28px;font-size:14px;font-weight:900;margin-right:10px;clip-path:polygon(4px 0,100% 0,calc(100% - 4px) 100%,0 100%);`,
      card: `background:#fff;border:3px solid #333;padding:22px;margin:16px 0;box-shadow:6px 6px 0 ${p};`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 中式国潮 ──
registerTemplate('guochao', {
  name: '中式国潮',
  desc: '国潮红金+中式纹样+现代融合',
  category: 'special',
  contentTip: '适合国货品牌、传统文化、节日祝福、汉服',
  primary: '#c41d1d', bg: '#fdf8f0',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'Noto Serif SC','STSong',serif;color:#3a2a1a;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:30px;color:${p};font-weight:900;margin:28px 0 14px;text-align:center;letter-spacing:6px;text-shadow:1px 1px 0 #daa520;`,
      h2: `font-size:18px;color:${p};margin:32px 0 14px;font-weight:700;padding:12px 24px;background:linear-gradient(90deg,${p}0a,${p}15,${p}0a);border-top:2px solid ${p};border-bottom:2px solid ${p};text-align:center;letter-spacing:3px;`,
      h3: `font-size:16px;color:#8b4513;margin:24px 0 10px;font-weight:700;padding-left:16px;border-left:3px solid #daa520;`,
      p: `margin:14px 0;font-size:16px;color:#3a2a1a;line-height:2;`,
      quote: `background:#fdf0e0;border-left:3px solid #daa520;padding:16px 20px;margin:18px 0;color:#6a5040;font-size:15px;line-height:1.8;border-radius:0 8px 8px 0;`,
      highlight: `background:${p};color:#fff;padding:2px 8px;`,
      divider: `text-align:center;margin:28px 0;color:#daa520;font-size:16px;letter-spacing:8px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border:3px solid #daa520;border-radius:4px;`,
      num: `display:inline-flex;align-items:center;justify-content:center;background:${p};color:#ffd700;width:26px;height:26px;border-radius:50%;font-size:14px;font-weight:900;margin-right:10px;border:2px solid #daa520;`,
      card: `background:#fff;border:2px solid #daa520;padding:24px;margin:16px 0;border-radius:4px;box-shadow:0 0 0 4px ${p}11;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 极光 ──
registerTemplate('aurora', {
  name: '极光',
  desc: '极光色渐变+流动感+梦幻',
  category: 'gradient',
  contentTip: '适合旅行、自然奇观、梦幻故事、音乐',
  primary: '#00c9a7', bg: '#0a1628',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC',sans-serif;color:#c0d8e0;font-size:16px;line-height:2;background:linear-gradient(180deg,#0a1628 0%,#0f2847 50%,#0a1628 100%);`,
      h1: `font-size:28px;font-weight:800;margin:32px 0 16px;text-align:center;background:linear-gradient(90deg,#00c9a7,#00b4d8,#9b5de5,#f15bb5);-webkit-background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:3px;`,
      h2: `font-size:18px;margin:32px 0 14px;font-weight:700;padding:12px 20px;background:linear-gradient(90deg,#00c9a733,#9b5de533);border-radius:12px;border:1px solid #00c9a722;color:#e0f0f0;text-align:center;`,
      h3: `font-size:16px;color:#00c9a7;margin:24px 0 10px;font-weight:600;`,
      p: `margin:14px 0;font-size:16px;color:#b0c8d0;line-height:2;`,
      quote: `background:#ffffff06;border-left:2px solid #00c9a7;padding:16px 20px;margin:18px 0;color:#90b0b8;font-size:15px;line-height:1.8;border-radius:0 8px 8px 0;`,
      highlight: `background:#00c9a722;color:#00c9a7;padding:2px 8px;border-radius:4px;`,
      divider: `text-align:center;margin:28px 0;background:linear-gradient(90deg,transparent,#00c9a744,#9b5de544,transparent);height:1px;`,
      strong: `color:#00c9a7;font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:12px;border:1px solid #ffffff11;`,
      num: `display:inline-flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#00c9a7,#9b5de5);color:#fff;width:26px;height:26px;border-radius:50%;font-size:13px;font-weight:700;margin-right:10px;`,
      card: `background:#ffffff06;border:1px solid #ffffff11;border-radius:16px;padding:22px;margin:16px 0;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});
