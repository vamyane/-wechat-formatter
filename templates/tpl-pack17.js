/**
 * 模板包17：复杂精品 - 杂志感
 * 公众号兼容样式，无外部字体依赖
 */

// ── 杂志封面 ──
registerTemplate('mag-cover', {
  name: '杂志封面',
  desc: '大字标题+装饰线+serif正文',
  category: 'special',
  contentTip: '深度报道、人物专访、长文',
  primary: '#1a1a2e', bg: '#fafaf8',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:Georgia,'SimSun',serif;color:#2a2a2a;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:32px;color:${p};font-weight:900;margin:40px 0 8px;line-height:1.2;letter-spacing:-1px;border-bottom:3px double ${p};padding-bottom:12px;font-family:Georgia,'SimSun',serif;`,
      h2: `font-size:14px;color:${p};margin:48px 0 16px;font-weight:400;letter-spacing:8px;border-top:1px solid ${p};padding-top:16px;font-family:Georgia,'SimSun',serif;`,
      h3: `font-size:20px;color:${p};margin:28px 0 12px;font-weight:700;font-style:italic;font-family:Georgia,'SimSun',serif;`,
      p: `margin:14px 0;font-size:16px;color:#2a2a2a;line-height:2;text-indent:2em;`,
      quote: `margin:24px 40px;padding:20px 24px;border-top:2px solid ${p};border-bottom:2px solid ${p};color:#555;font-size:18px;line-height:1.8;font-style:italic;text-align:center;font-family:Georgia,'SimSun',serif;`,
      highlight: `background:${p};color:#fff;padding:2px 6px;`,
      divider: `text-align:center;margin:32px 0;color:${p};font-size:18px;letter-spacing:12px;`,
      strong: `color:${p};font-weight:700;font-style:italic;`,
      img: `max-width:100%;margin:20px auto;display:block;`,
      num: `font-family:Georgia,'SimSun',serif;font-size:28px;color:${p};font-weight:700;margin-right:12px;font-style:italic;`,
      card: `background:#fff;border:1px solid #e0e0e0;padding:28px;margin:20px 0;box-shadow:2px 2px 0 ${p}22;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 报纸专栏 ──
registerTemplate('news-column', {
  name: '报纸专栏',
  desc: '新闻感排版+双线边框+serif',
  category: 'special',
  contentTip: '新闻、时评、深度调查、专栏',
  primary: '#1a1a1a', bg: '#f5f0e8',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:Georgia,'SimSun',serif;color:#222;font-size:16px;line-height:1.9;background:${b};`,
      h1: `font-size:38px;color:${p};font-weight:900;margin:20px 0 6px;line-height:1.1;letter-spacing:-1px;text-align:center;font-family:Georgia,'SimSun',serif;`,
      h2: `font-size:14px;color:#666;margin:8px 0 24px;font-weight:400;text-align:center;letter-spacing:2px;border-bottom:1px solid #999;padding-bottom:16px;`,
      h3: `font-size:20px;color:${p};margin:28px 0 10px;font-weight:700;border-left:4px solid ${p};padding-left:12px;`,
      p: `margin:12px 0;font-size:16px;color:#222;line-height:1.9;text-indent:2em;`,
      quote: `margin:20px 24px;padding:16px 20px;background:#f0ead8;border-left:3px solid #999;color:#555;font-size:15px;line-height:1.8;font-style:italic;`,
      highlight: `background:#fff3cd;padding:1px 4px;`,
      divider: `text-align:center;margin:28px 0;color:#bbb;font-size:16px;letter-spacing:4px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:16px auto;display:block;`,
      num: `font-family:Georgia,'SimSun',serif;font-size:24px;color:${p};font-weight:700;margin-right:10px;`,
      card: `background:#fff;border:1px solid #d0c8b8;padding:24px;margin:16px 0;box-shadow:3px 3px 0 #e0d8c8;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 极简线框 ──
registerTemplate('minimal-wire', {
  name: '极简线框',
  desc: '纯线条+大量留白+建筑感',
  category: 'special',
  contentTip: '设计、建筑、艺术、极简主义',
  primary: '#000000', bg: '#ffffff',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'PingFang SC','Microsoft YaHei',sans-serif;color:#111;font-size:15px;line-height:2;background:${b};`,
      h1: `font-size:36px;color:${p};font-weight:200;margin:48px 0 12px;letter-spacing:12px;`,
      h2: `font-size:13px;color:${p};margin:56px 0 16px;font-weight:500;letter-spacing:6px;padding-bottom:12px;border-bottom:1px solid ${p};`,
      h3: `font-size:16px;color:${p};margin:32px 0 10px;font-weight:500;letter-spacing:3px;`,
      p: `margin:16px 0;font-size:15px;color:#222;line-height:2;`,
      quote: `margin:28px 0;padding:20px 0;border-top:1px solid #ddd;border-bottom:1px solid #ddd;color:#444;font-size:14px;line-height:1.8;text-align:center;letter-spacing:2px;`,
      highlight: `background:${p};color:#fff;padding:2px 8px;`,
      divider: `text-align:center;margin:40px 0;color:#ddd;font-size:24px;letter-spacing:16px;`,
      strong: `color:${p};font-weight:600;letter-spacing:1px;`,
      img: `max-width:100%;margin:24px auto;display:block;`,
      num: `font-size:32px;color:${p};font-weight:100;margin-right:16px;letter-spacing:2px;`,
      card: `border:1px solid ${p};padding:32px;margin:24px 0;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 咖啡店菜单 ──
registerTemplate('coffee-menu2', {
  name: '咖啡店菜单',
  desc: '暖棕调+serif+手写感排版',
  category: 'special',
  contentTip: '美食、咖啡、烘焙、生活方式',
  primary: '#5c3d2e', bg: '#f7f2ec',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:Georgia,'SimSun',serif;color:#4a3830;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:30px;color:${p};font-weight:400;margin:24px 0 12px;text-align:center;letter-spacing:6px;font-variant:small-caps;font-family:Georgia,'SimSun',serif;`,
      h2: `font-size:16px;color:${p};margin:32px 0 14px;font-weight:400;text-align:center;letter-spacing:3px;padding:12px 0;border-top:1px solid ${p}44;border-bottom:1px solid ${p}44;`,
      h3: `font-size:18px;color:#7a5a4a;margin:24px 0 10px;font-weight:600;font-style:italic;font-family:Georgia,'SimSun',serif;`,
      p: `margin:14px 0;font-size:16px;color:#4a3830;line-height:2;`,
      quote: `background:#f0e8d8;border-left:2px solid ${p};padding:14px 18px;margin:18px 0;color:#6a5848;font-size:15px;line-height:1.8;font-style:italic;border-radius:0 8px 8px 0;`,
      highlight: `background:${p}18;padding:2px 6px;border-radius:4px;`,
      divider: `text-align:center;margin:28px 0;color:#c0a888;font-size:18px;letter-spacing:8px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:12px;`,
      num: `color:${p};font-size:20px;font-weight:700;margin-right:10px;font-family:Georgia,'SimSun',serif;`,
      card: `background:#fff;border:1px solid #d8c8b0;padding:24px;margin:16px 0;border-radius:12px;box-shadow:0 2px 8px rgba(92,61,46,.06);`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 水墨意境 ──
registerTemplate('ink-mood', {
  name: '水墨意境',
  desc: '宣纸底色+行距超大+留白极多',
  category: 'special',
  contentTip: '诗词、散文、文化、国风',
  primary: '#2c2c2c', bg: '#f8f5ef',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'SimSun','Noto Serif SC',serif;color:#333;font-size:16px;line-height:2.4;background:${b};`,
      h1: `font-size:30px;color:${p};font-weight:400;margin:48px 0 16px;text-align:center;letter-spacing:10px;font-family:'SimSun','Noto Serif SC',serif;`,
      h2: `font-size:20px;color:${p};margin:48px 0 14px;font-weight:400;text-align:center;letter-spacing:4px;padding-bottom:12px;border-bottom:1px solid #ccc;`,
      h3: `font-size:18px;color:#555;margin:32px 0 10px;font-weight:400;letter-spacing:2px;`,
      p: `margin:16px 0;font-size:16px;color:#444;line-height:2.4;text-indent:2em;`,
      quote: `margin:24px 32px;padding:20px 0;border-top:1px solid #ddd;border-bottom:1px solid #ddd;color:#666;font-size:15px;line-height:2;text-align:center;font-style:italic;`,
      highlight: `background:#e8e0d0;padding:2px 4px;`,
      divider: `text-align:center;margin:40px 0;color:#ccc;font-size:20px;letter-spacing:12px;`,
      strong: `color:${p};font-weight:600;`,
      img: `max-width:100%;margin:24px auto;display:block;opacity:.9;`,
      num: `font-size:22px;color:#999;font-weight:300;margin-right:12px;letter-spacing:2px;`,
      card: `border:1px solid #d8d0c0;padding:28px;margin:20px 0;background:#fdfaf4;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 胶片复古 ──
registerTemplate('film-retro', {
  name: '胶片复古',
  desc: '暖黄调+serif+相框图片',
  category: 'special',
  contentTip: '摄影、旅行、复古文化、独立音乐',
  primary: '#8b6914', bg: '#f5f0e0',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:Georgia,'SimSun',serif;color:#4a3f2f;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:28px;color:${p};font-weight:700;margin:28px 0 14px;text-align:center;letter-spacing:3px;font-family:Georgia,'SimSun',serif;`,
      h2: `font-size:18px;color:${p};margin:32px 0 12px;font-weight:600;padding:10px 0;border-bottom:2px solid ${p}44;letter-spacing:1px;`,
      h3: `font-size:16px;color:#6b5a3a;margin:24px 0 10px;font-weight:600;font-style:italic;`,
      p: `margin:14px 0;font-size:16px;color:#4a3f2f;line-height:2;`,
      quote: `background:#f0e8d0;border-left:3px solid ${p};padding:14px 18px;margin:18px 0;color:#6b5a3a;font-size:15px;line-height:1.8;font-style:italic;`,
      highlight: `background:${p}22;padding:2px 6px;border-radius:2px;`,
      divider: `text-align:center;margin:28px 0;color:#c0b090;font-size:14px;letter-spacing:6px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border:6px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.15);`,
      num: `color:${p};font-size:20px;font-weight:700;margin-right:8px;font-family:Georgia,'SimSun',serif;`,
      card: `background:#faf5e8;border:1px solid #d8c8a8;padding:24px;margin:16px 0;box-shadow:2px 2px 0 #e8dcc8;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 中式国潮 ──
registerTemplate('guochao2', {
  name: '中式国潮',
  desc: '红金配色+中式边框+传统感',
  category: 'special',
  contentTip: '国货品牌、传统文化、节日祝福',
  primary: '#c41d1d', bg: '#fdf8f0',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'SimSun','Noto Serif SC',serif;color:#3a2a1a;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:30px;color:${p};font-weight:900;margin:28px 0 14px;text-align:center;letter-spacing:6px;`,
      h2: `font-size:18px;color:${p};margin:32px 0 14px;font-weight:700;padding:12px 24px;background:linear-gradient(90deg,${p}0a,${p}15,${p}0a);border-top:2px solid ${p};border-bottom:2px solid ${p};text-align:center;letter-spacing:3px;`,
      h3: `font-size:16px;color:#8b4513;margin:24px 0 10px;font-weight:700;padding-left:16px;border-left:3px solid #daa520;`,
      p: `margin:14px 0;font-size:16px;color:#3a2a1a;line-height:2;`,
      quote: `background:#fdf0e0;border-left:3px solid #daa520;padding:16px 20px;margin:18px 0;color:#6a5040;font-size:15px;line-height:1.8;border-radius:0 8px 8px 0;`,
      highlight: `background:${p};color:#fff;padding:2px 8px;`,
      divider: `text-align:center;margin:28px 0;color:#daa520;font-size:16px;letter-spacing:8px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border:3px solid #daa520;border-radius:4px;`,
      num: `background:${p};color:#ffd700;width:26px;height:26px;line-height:26px;text-align:center;font-size:14px;font-weight:900;margin-right:10px;border-radius:50%;display:inline-block;border:2px solid #daa520;`,
      card: `background:#fff;border:2px solid #daa520;padding:24px;margin:16px 0;border-radius:4px;box-shadow:0 0 0 4px ${p}11;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 糖果波普 ──
registerTemplate('candy-pop2', {
  name: '糖果波普',
  desc: '撞色+三角裁切+大胆排版',
  category: 'special',
  contentTip: '潮流、年轻、派对、创意市集',
  primary: '#ff2d87', bg: '#fff5f9',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'PingFang SC','Microsoft YaHei',sans-serif;color:#333;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:30px;font-weight:900;margin:24px 0 14px;text-align:center;background:linear-gradient(90deg,#ff2d87,#ff6b35,#ffd700,#00cc88,#3366ff,#cc33ff);color:#fff;padding:14px 24px;border-radius:0;`,
      h2: `font-size:18px;font-weight:800;margin:28px 0 12px;display:inline-block;padding:10px 24px;background:${p};color:#fff;letter-spacing:2px;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:800;letter-spacing:1px;`,
      p: `margin:14px 0;font-size:16px;color:#444;line-height:2;`,
      quote: `background:#fff;border:3px solid ${p};padding:18px 22px;margin:18px 0;color:#555;font-size:15px;line-height:1.8;`,
      highlight: `background:#ffd700;color:#333;padding:2px 8px;font-weight:700;`,
      divider: `text-align:center;margin:28px 0;height:4px;background:linear-gradient(90deg,#ff2d87,#ff6b35,#ffd700,#00cc88,#3366ff,#cc33ff);border-radius:2px;`,
      strong: `color:${p};font-weight:800;`,
      img: `max-width:100%;margin:14px auto;display:block;border:4px solid ${p};border-radius:0;`,
      num: `background:${p};color:#fff;width:28px;height:28px;line-height:28px;font-size:14px;font-weight:900;margin-right:10px;display:inline-block;text-align:center;`,
      card: `background:#fff;border:3px solid #333;padding:22px;margin:16px 0;box-shadow:6px 6px 0 ${p};`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 日式侘寂 ──
registerTemplate('wabi-sabi2', {
  name: '日式侘寂',
  desc: '极致留白+不对称+素朴之美',
  category: 'special',
  contentTip: '禅意、茶道、花道、日式美学',
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
      card: `padding:32px;margin:24px 0;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 蓝图工程 ──
registerTemplate('blueprint', {
  name: '蓝图工程',
  desc: '工程蓝+网格感+技术文档风',
  category: 'special',
  contentTip: '技术文档、工程报告、产品说明',
  primary: '#1565c0', bg: '#f5f8fc',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'PingFang SC','Microsoft YaHei',sans-serif;color:#1a2a3a;font-size:15px;line-height:1.9;background:${b};`,
      h1: `font-size:26px;color:${p};font-weight:800;margin:28px 0 14px;padding:14px 20px;background:${p}08;border-left:4px solid ${p};`,
      h2: `font-size:18px;color:${p};margin:28px 0 12px;font-weight:700;padding:10px 16px;border-bottom:2px solid ${p}33;`,
      h3: `font-size:15px;color:${p};margin:24px 0 10px;font-weight:700;letter-spacing:1px;`,
      p: `margin:14px 0;font-size:15px;color:#2a3a4a;line-height:1.9;`,
      quote: `background:${p}06;border-left:3px solid ${p};padding:14px 18px;margin:18px 0;color:#4a6a7a;font-size:14px;line-height:1.8;border-radius:0 6px 6px 0;`,
      highlight: `background:${p}15;color:${p};padding:2px 6px;border-radius:3px;font-weight:600;`,
      divider: `text-align:center;margin:24px 0;color:${p}33;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:6px;border:1px solid ${p}22;`,
      num: `background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;font-size:13px;font-weight:700;margin-right:8px;border-radius:4px;display:inline-block;`,
      card: `background:#fff;border:1px solid ${p}22;padding:20px;margin:14px 0;border-radius:8px;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});
