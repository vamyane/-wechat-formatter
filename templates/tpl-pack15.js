/**
 * 模板包15：复杂精品（上）
 * 每个模板都有独特的结构设计，不只是换色
 */

// ── 杂志双栏 ──
registerTemplate('magazine-spread', {
  name: '杂志双栏',
  desc: '仿杂志排版，大标题+装饰线+首字下沉',
  category: 'special',
  contentTip: '适合深度报道、人物专访、长文阅读',
  primary: '#1a1a2e', bg: '#fafaf8',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'Georgia','Noto Serif SC',serif;color:#2a2a2a;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:32px;color:${p};font-weight:900;margin:40px 0 8px;line-height:1.2;letter-spacing:-1px;border-bottom:3px double ${p};padding-bottom:12px;`,
      h2: `font-size:14px;color:${p};margin:48px 0 16px;font-weight:400;letter-spacing:8px;text-transform:uppercase;border-top:1px solid ${p};padding-top:16px;`,
      h3: `font-size:20px;color:${p};margin:28px 0 12px;font-weight:700;font-style:italic;`,
      p: `margin:14px 0;font-size:16px;color:#2a2a2a;line-height:2;text-indent:2em;`,
      quote: `margin:24px 40px;padding:20px 24px;border-top:2px solid ${p};border-bottom:2px solid ${p};color:#555;font-size:18px;line-height:1.8;font-style:italic;text-align:center;`,
      highlight: `background:${p};color:#fff;padding:2px 6px;`,
      divider: `text-align:center;margin:32px 0;color:${p};font-size:18px;letter-spacing:12px;`,
      strong: `color:${p};font-weight:700;font-style:italic;`,
      img: `max-width:100%;margin:20px auto;display:block;`,
      num: `font-family:Georgia,'SimSun',serif;font-size:28px;color:${p};font-weight:700;margin-right:12px;font-style:italic;`,
      card: `background:#fff;border:1px solid #e0e0e0;padding:28px;margin:20px 0;box-shadow:2px 2px 0 ${p}22;`,
    };
  }
});

// ── 霓虹灯牌 ──
registerTemplate('neon-sign', {
  name: '霓虹灯牌',
  desc: '深色底+发光文字+赛博朋克感',
  category: 'dark',
  contentTip: '适合电竞、潮流、夜店、科技评测',
  primary: '#00ff88', bg: '#0a0a0f',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'Courier New',monospace;color:#c0c0c0;font-size:15px;line-height:1.9;background:${b};`,
      h1: `font-size:28px;color:${p};font-weight:900;margin:32px 0 16px;text-align:center;text-shadow:0 0 10px ${p}88,0 0 40px ${p}44,0 0 80px ${p}22;letter-spacing:4px;`,
      h2: `font-size:20px;color:${p};margin:36px 0 14px;font-weight:700;padding:12px 20px;border:1px solid ${p}44;border-left:3px solid ${p};background:${p}08;box-shadow:0 0 15px ${p}11 inset;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:600;text-shadow:0 0 8px ${p}66;`,
      p: `margin:14px 0;font-size:15px;color:#b0b0b0;line-height:1.9;`,
      quote: `border-left:2px solid ${p};background:${p}06;padding:16px 20px;margin:20px 0;color:#90e0b0;font-size:14px;line-height:1.8;box-shadow:0 0 20px ${p}08 inset;`,
      highlight: `background:${p}22;color:${p};padding:2px 8px;border:1px solid ${p}44;`,
      divider: `text-align:center;margin:28px 0;color:${p}44;font-size:14px;letter-spacing:6px;`,
      strong: `color:${p};font-weight:700;text-shadow:0 0 6px ${p}44;`,
      img: `max-width:100%;margin:16px auto;display:block;border:1px solid ${p}33;border-radius:2px;`,
      num: `display:inline-flex;align-items:center;justify-content:center;background:${p};color:#0a0a0f;width:26px;height:26px;font-size:13px;font-weight:800;margin-right:10px;font-family:monospace;`,
      card: `background:#111118;border:1px solid ${p}33;padding:20px;margin:16px 0;box-shadow:0 0 20px ${p}0a,0 0 60px ${p}05 inset;`,
    };
  }
});

// ── 手写笔记 ──
registerTemplate('handwritten', {
  name: '手写笔记',
  desc: '仿手写体+纸张纹理+涂鸦装饰',
  category: 'special',
  contentTip: '适合个人随笔、读书笔记、日记感悟',
  primary: '#2c5f8a', bg: '#fdf8ef',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'Georgia','SimSun',serif;color:#3a3a3a;font-size:16px;line-height:2.2;background:${b};background-image:repeating-linear-gradient(transparent,transparent 31px,#e8ddd0 31px,#e8ddd0 32px);`,
      h1: `font-size:26px;color:${p};font-weight:400;margin:24px 0 16px;text-decoration:underline;text-decoration-wavy;text-underline-offset:8px;`,
      h2: `font-size:20px;color:${p};margin:32px 0 12px;font-weight:400;transform:rotate(-0.5deg);`,
      h3: `font-size:17px;color:#5a5a5a;margin:24px 0 10px;font-weight:400;text-decoration:underline;text-decoration-style:dashed;`,
      p: `margin:12px 0;font-size:16px;color:#3a3a3a;line-height:2.2;`,
      quote: `background:#fff9e6;border-left:3px dashed ${p};padding:14px 18px;margin:18px 0;color:#5a5040;font-size:15px;line-height:1.8;transform:rotate(0.3deg);`,
      highlight: `background:#fff3cd;padding:2px 4px;border-bottom:2px solid #f0c040;`,
      divider: `text-align:center;margin:24px 0;color:#ccc;font-size:20px;`,
      strong: `color:${p};font-weight:400;text-decoration:underline;`,
      img: `max-width:100%;margin:14px auto;display:block;border:3px solid #fff;box-shadow:2px 2px 8px rgba(0,0,0,.15);transform:rotate(-1deg);`,
      num: `display:inline-block;background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;font-family:monospace;`,
      card: `background:#fff;border:2px dashed #ddd;padding:20px;margin:16px 0;transform:rotate(0.3deg);`,
    };
  }
});

// ── 极简线框 ──
registerTemplate('wireframe', {
  name: '极简线框',
  desc: '纯线条+大量留白+建筑感',
  category: 'special',
  contentTip: '适合设计、建筑、艺术、极简主义内容',
  primary: '#000000', bg: '#ffffff',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'PingFang SC','Microsoft YaHei',sans-serif;color:#111;font-size:15px;line-height:2;background:${b};`,
      h1: `font-size:36px;color:${p};font-weight:200;margin:48px 0 12px;letter-spacing:12px;text-transform:uppercase;`,
      h2: `font-size:13px;color:${p};margin:56px 0 16px;font-weight:500;letter-spacing:6px;text-transform:uppercase;padding-bottom:12px;border-bottom:1px solid ${p};`,
      h3: `font-size:16px;color:${p};margin:32px 0 10px;font-weight:500;letter-spacing:3px;`,
      p: `margin:16px 0;font-size:15px;color:#222;line-height:2;`,
      quote: `margin:28px 0;padding:20px 0;border-top:1px solid #ddd;border-bottom:1px solid #ddd;color:#444;font-size:14px;line-height:1.8;text-align:center;letter-spacing:2px;`,
      highlight: `background:${p};color:#fff;padding:2px 8px;`,
      divider: `text-align:center;margin:40px 0;color:#ddd;font-size:24px;letter-spacing:16px;`,
      strong: `color:${p};font-weight:600;letter-spacing:1px;`,
      img: `max-width:100%;margin:24px auto;display:block;`,
      num: `font-size:32px;color:${p};font-weight:100;margin-right:16px;letter-spacing:2px;`,
      card: `border:1px solid ${p};padding:32px;margin:24px 0;`,
    };
  }
});

// ── 毛玻璃卡片 ──
registerTemplate('glassmorphism', {
  name: '毛玻璃卡片',
  desc: '半透明卡片+模糊背景+现代感',
  category: 'special',
  contentTip: '适合科技产品、UI设计、潮流品牌',
  primary: '#6366f1', bg: '#f0f0ff',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#1e1e2e;font-size:16px;line-height:2;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);background-attachment:fixed;`,
      h1: `font-size:28px;color:#fff;font-weight:800;margin:32px 0 16px;text-align:center;text-shadow:0 2px 10px rgba(0,0,0,.2);`,
      h2: `font-size:18px;color:#fff;margin:32px 0 14px;font-weight:700;padding:12px 20px;background:rgba(255,255,255,.15);backdrop-filter:blur(10px);border-radius:16px;border:1px solid rgba(255,255,255,.2);`,
      h3: `font-size:16px;color:#fff;margin:24px 0 10px;font-weight:600;opacity:.9;`,
      p: `margin:14px 0;font-size:16px;color:#fff;line-height:2;opacity:.95;`,
      quote: `background:rgba(255,255,255,.12);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.18);border-radius:16px;padding:18px 22px;margin:20px 0;color:#fff;font-size:15px;line-height:1.8;`,
      highlight: `background:rgba(255,255,255,.25);padding:2px 8px;border-radius:8px;color:#fff;`,
      divider: `text-align:center;margin:28px 0;color:rgba(255,255,255,.3);font-size:14px;letter-spacing:8px;`,
      strong: `color:#fff;font-weight:700;`,
      img: `max-width:100%;margin:16px auto;display:block;border-radius:16px;border:1px solid rgba(255,255,255,.2);`,
      num: `display:inline-flex;align-items:center;justify-content:center;background:rgba(255,255,255,.2);backdrop-filter:blur(5px);color:#fff;width:28px;height:28px;border-radius:12px;font-size:14px;font-weight:700;margin-right:10px;border:1px solid rgba(255,255,255,.2);`,
      card: `background:rgba(255,255,255,.12);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.18);border-radius:20px;padding:24px;margin:16px 0;`,
    };
  }
});

// ── 报纸排版 ──
registerTemplate('newspaper', {
  name: '报纸排版',
  desc: '仿报纸分栏+serif字体+新闻感',
  category: 'special',
  contentTip: '适合新闻、时评、深度调查、专栏文章',
  primary: '#1a1a1a', bg: '#f5f0e8',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'Georgia','Noto Serif SC',serif;color:#222;font-size:16px;line-height:1.9;background:${b};`,
      h1: `font-size:38px;color:${p};font-weight:900;margin:20px 0 6px;line-height:1.1;letter-spacing:-1px;text-align:center;`,
      h2: `font-size:14px;color:#666;margin:8px 0 24px;font-weight:400;text-align:center;letter-spacing:2px;border-bottom:1px solid #999;padding-bottom:16px;`,
      h3: `font-size:20px;color:${p};margin:28px 0 10px;font-weight:700;border-left:4px solid ${p};padding-left:12px;`,
      p: `margin:12px 0;font-size:16px;color:#222;line-height:1.9;text-indent:2em;column-count:1;`,
      quote: `margin:20px 24px;padding:16px 20px;background:#f0ead8;border-left:3px solid #999;color:#555;font-size:15px;line-height:1.8;font-style:italic;`,
      highlight: `background:#fff3cd;padding:1px 4px;`,
      divider: `text-align:center;margin:28px 0;color:#bbb;font-size:16px;letter-spacing:4px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:16px auto;display:block;`,
      num: `font-family:Georgia,'SimSun',serif;font-size:24px;color:${p};font-weight:700;margin-right:10px;`,
      card: `background:#fff;border:1px solid #d0c8b8;padding:24px;margin:16px 0;box-shadow:3px 3px 0 #e0d8c8;`,
    };
  }
});

// ── 冰川蓝 ──
registerTemplate('glacier', {
  name: '冰川蓝',
  desc: '冷色调渐变+结晶质感+清冽感',
  category: 'gradient',
  contentTip: '适合科技、户外、旅行、冬季主题',
  primary: '#0ea5e9', bg: '#f0f9ff',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC',sans-serif;color:#1e3a5f;font-size:16px;line-height:2;background:linear-gradient(180deg,#e0f2fe 0%,${b} 40%,#fff 100%);`,
      h1: `font-size:26px;font-weight:800;margin:28px 0 14px;line-height:1.4;background:linear-gradient(135deg,#0ea5e9,#38bdf8,#7dd3fc);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-align:center;`,
      h2: `font-size:18px;margin:32px 0 12px;font-weight:700;line-height:1.5;background:linear-gradient(90deg,#0ea5e9,#38bdf8);color:#fff;padding:10px 20px;border-radius:30px;display:inline-block;box-shadow:0 4px 15px rgba(14,165,233,.25);`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;padding-left:14px;border-left:3px solid transparent;border-image:linear-gradient(180deg,#0ea5e9,#7dd3fc) 1;`,
      p: `margin:14px 0;font-size:16px;color:#1e3a5f;line-height:2;`,
      quote: `background:linear-gradient(135deg,#e0f2fe,#f0f9ff);border-left:3px solid #38bdf8;padding:16px 20px;margin:18px 0;color:#4a7a9b;font-size:15px;line-height:1.8;border-radius:0 12px 12px 0;`,
      highlight: `background:linear-gradient(90deg,#0ea5e922,#38bdf822);padding:2px 6px;border-radius:4px;`,
      divider: `text-align:center;margin:28px 0;color:#7dd3fc;font-size:14px;letter-spacing:6px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:14px;box-shadow:0 8px 24px rgba(14,165,233,.15);`,
      num: `display:inline-flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#0ea5e9,#38bdf8);color:#fff;width:26px;height:26px;border-radius:50%;font-size:13px;font-weight:700;margin-right:10px;`,
      card: `background:linear-gradient(135deg,#e0f2fe88,#f0f9ff);border:1px solid #bae6fd;padding:22px;border-radius:16px;margin:16px 0;box-shadow:0 4px 16px rgba(14,165,233,.08);`,
    };
  }
});

// ── 赛博故障 ──
registerTemplate('glitch', {
  name: '赛博故障',
  desc: '故障艺术+RGB偏移+像素风',
  category: 'dark',
  contentTip: '适合游戏、电竞、赛博朋克、黑客主题',
  primary: '#ff0055', bg: '#0c0c14',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'Courier New',monospace;color:#e0e0e0;font-size:15px;line-height:1.9;background:${b};`,
      h1: `font-size:30px;color:#fff;font-weight:900;margin:28px 0 14px;text-align:center;text-shadow:3px 0 #ff0055,-3px 0 #00ff88;letter-spacing:6px;`,
      h2: `font-size:18px;color:${p};margin:32px 0 12px;font-weight:700;padding:10px 16px;background:${p}11;border:1px solid ${p}44;border-left:4px solid ${p};font-family:monospace;`,
      h3: `font-size:15px;color:#00ff88;margin:24px 0 10px;font-weight:600;font-family:monospace;`,
      p: `margin:14px 0;font-size:15px;color:#c0c0c0;line-height:1.9;`,
      quote: `background:#14141f;border-left:2px solid #00ff88;padding:14px 18px;margin:18px 0;color:#80ffb0;font-size:14px;line-height:1.8;font-family:monospace;`,
      highlight: `background:${p}33;color:${p};padding:2px 6px;`,
      divider: `text-align:center;margin:24px 0;color:#333;font-size:14px;font-family:monospace;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border:1px solid #333;filter:contrast(1.1);`,
      num: `display:inline-block;background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;font-size:12px;font-weight:800;margin-right:8px;font-family:monospace;`,
      card: `background:#12121c;border:1px solid #2a2a3a;padding:20px;margin:16px 0;box-shadow:0 0 20px ${p}08;`,
    };
  }
});

// ── 水墨风 ──
registerTemplate('ink-wash', {
  name: '水墨风',
  desc: '中国传统水墨+留白+意境',
  category: 'special',
  contentTip: '适合诗词、文化、国风、传统艺术',
  primary: '#2c2c2c', bg: '#f8f5ef',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'Noto Serif SC','STSong','SimSun',serif;color:#333;font-size:16px;line-height:2.2;background:${b};`,
      h1: `font-size:30px;color:${p};font-weight:400;margin:40px 0 16px;text-align:center;letter-spacing:8px;`,
      h2: `font-size:20px;color:${p};margin:40px 0 14px;font-weight:400;text-align:center;letter-spacing:4px;padding-bottom:12px;border-bottom:1px solid #ccc;`,
      h3: `font-size:18px;color:#555;margin:28px 0 10px;font-weight:400;letter-spacing:2px;`,
      p: `margin:16px 0;font-size:16px;color:#444;line-height:2.2;text-indent:2em;`,
      quote: `margin:24px 32px;padding:20px 0;border-top:1px solid #ddd;border-bottom:1px solid #ddd;color:#666;font-size:15px;line-height:2;text-align:center;font-style:italic;`,
      highlight: `background:#e8e0d0;padding:2px 4px;`,
      divider: `text-align:center;margin:36px 0;color:#ccc;font-size:20px;letter-spacing:12px;`,
      strong: `color:${p};font-weight:600;`,
      img: `max-width:100%;margin:20px auto;display:block;opacity:.9;`,
      num: `font-size:22px;color:#999;font-weight:300;margin-right:12px;letter-spacing:2px;`,
      card: `border:1px solid #d8d0c0;padding:28px;margin:20px 0;background:#fdfaf4;`,
    };
  }
});

// ── 胶片复古 ──
registerTemplate('film-vintage', {
  name: '胶片复古',
  desc: '胶片颗粒+暖黄调+vintage感',
  category: 'special',
  contentTip: '适合摄影、旅行、复古文化、独立音乐',
  primary: '#8b6914', bg: '#f5f0e0',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'Georgia','Noto Serif SC',serif;color:#4a3f2f;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:28px;color:${p};font-weight:700;margin:28px 0 14px;text-align:center;letter-spacing:3px;text-shadow:1px 1px 0 rgba(139,105,20,.1);`,
      h2: `font-size:18px;color:${p};margin:32px 0 12px;font-weight:600;padding:10px 0;border-bottom:2px solid ${p}44;letter-spacing:1px;`,
      h3: `font-size:16px;color:#6b5a3a;margin:24px 0 10px;font-weight:600;font-style:italic;`,
      p: `margin:14px 0;font-size:16px;color:#4a3f2f;line-height:2;`,
      quote: `background:#f0e8d0;border-left:3px solid ${p};padding:14px 18px;margin:18px 0;color:#6b5a3a;font-size:15px;line-height:1.8;font-style:italic;`,
      highlight: `background:${p}22;padding:2px 6px;border-radius:2px;`,
      divider: `text-align:center;margin:28px 0;color:#c0b090;font-size:14px;letter-spacing:6px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border:6px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.15);filter:sepia(.15) contrast(1.05);`,
      num: `display:inline-block;color:${p};font-size:20px;font-weight:700;margin-right:8px;font-family:Georgia,'SimSun',serif;`,
      card: `background:#faf5e8;border:1px solid #d8c8a8;padding:24px;margin:16px 0;box-shadow:2px 2px 0 #e8dcc8;`,
    };
  }
});
