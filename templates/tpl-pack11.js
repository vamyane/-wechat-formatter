/**
 * 模板包11：特殊风格（上）
 * 分类：special（特殊风格）
 */

// ── 80年代复古 ──
registerTemplate('retro-80s', {
  name: '80年代复古',
  desc: '霓虹+网格，80年代美学',
  category: 'special',
  contentTip: '适合音乐、游戏、复古文化类内容',
  primary: '#ff00ff', bg: '#1a0033',
  demo: '<div style="font-size:12px;color:#ff00ff;font-weight:700;text-shadow:0 0 10px #ff00ff66;font-family:monospace">RETRO 80s</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'Courier New',monospace;color:#e0d0f0;font-size:15px;line-height:2;background:${b};background-image:linear-gradient(#ffffff06 1px,transparent 1px),linear-gradient(90deg,#ffffff06 1px,transparent 1px);background-size:30px 30px;`,
      h1: `text-align:center;font-size:24px;color:${p};font-weight:900;margin:28px 0 14px;line-height:1.5;text-shadow:0 0 20px ${p}66,0 0 40px ${p}33;letter-spacing:4px;`,
      h2: `font-size:17px;color:#00ffff;margin:36px 0 14px;font-weight:700;line-height:1.5;text-shadow:0 0 10px #00ffff44;`,
      h3: `font-size:15px;color:#ffff00;margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:15px;color:#e0d0f0;line-height:2;`,
      quote: `border-left:2px solid #00ffff;background:#00ffff08;padding:14px 18px;margin:18px 0;color:#b0a0c0;font-size:14px;line-height:1.8;`,
      highlight: `background:${p}33;padding:2px 6px;color:#fff;font-weight:700;`,
      divider: `text-align:center;margin:28px 0;color:#333;font-size:12px;font-family:monospace;`,
      strong: `color:#00ffff;font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border:2px solid ${p}44;`,
      num: `color:#ff00ff;font-family:monospace;font-size:16px;font-weight:700;margin-right:8px;`,
      card: `border:1px solid ${p}33;background:#1a003388;padding:20px;margin:16px 0;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 日式禅意 ──
registerTemplate('zen', {
  name: '日式禅意',
  desc: '枯山水意境，极简东方美学',
  category: 'special',
  contentTip: '适合冥想、哲学、东方文化类内容',
  primary: '#5a4a3a', bg: '#f5f0e8',
  demo: '<div style="font-size:14px;color:#5a4a3a;letter-spacing:6px;font-weight:300">禅</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'PingFang SC','Microsoft YaHei',sans-serif;color:#3a3028;font-size:16px;line-height:2.6;background:${b};`,
      h1: `text-align:center;font-size:28px;color:${p};font-weight:200;margin:40px 0 20px;line-height:1.4;letter-spacing:15px;`,
      h2: `font-size:17px;color:${p};font-weight:300;margin:48px 0 14px;letter-spacing:6px;line-height:1.6;text-align:center;`,
      h3: `font-size:15px;color:${p};font-weight:300;margin:32px 0 10px;letter-spacing:4px;`,
      p: `margin:18px 0;font-size:16px;color:#3a3028;line-height:2.6;`,
      quote: `margin:28px 40px;padding:20px 0;color:#8a7a6a;font-size:14px;line-height:2.2;text-align:center;border-top:1px solid #d4c8b8;border-bottom:1px solid #d4c8b8;letter-spacing:4px;`,
      highlight: `border-bottom:1px solid ${p};padding-bottom:1px;`,
      divider: `text-align:center;margin:40px 0;color:#c8b8a0;font-size:20px;letter-spacing:15px;`,
      strong: `color:${p};font-weight:400;`,
      img: `max-width:100%;margin:28px auto;display:block;`,
      num: `color:${p};font-size:14px;font-weight:200;margin-right:10px;letter-spacing:4px;`,
      card: `padding:28px;margin:28px 0;text-align:center;border-top:1px solid #d4c8b8;border-bottom:1px solid #d4c8b8;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 韩式简约 ──
registerTemplate('korean', {
  name: '韩式简约',
  desc: '韩系配色+圆润排版，清新文艺',
  category: 'special',
  contentTip: '适合美妆、穿搭、韩流文化类内容',
  primary: '#d4a5a5', bg: '#faf5f2',
  demo: '<div style="font-size:12px;color:#d4a5a5;font-weight:700">🇰🇷 韩式简约</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#4a4040;font-size:15px;line-height:2.2;background:${b};`,
      h1: `text-align:center;font-size:20px;color:${p};font-weight:600;margin:28px 0 14px;line-height:1.6;letter-spacing:4px;`,
      h2: `font-size:17px;color:${p};margin:32px 0 12px;font-weight:500;line-height:1.6;text-align:center;letter-spacing:2px;`,
      h3: `font-size:15px;color:#4a4040;margin:24px 0 10px;font-weight:500;`,
      p: `margin:14px 0;font-size:15px;color:#4a4040;line-height:2.2;`,
      quote: `background:#fff;border-left:3px solid ${p};padding:14px 18px;margin:18px 0;color:#7a6a6a;font-size:14px;line-height:1.8;border-radius:0 12px 12px 0;`,
      highlight: `background:${p}18;padding:2px 6px;border-radius:8px;`,
      divider: `text-align:center;margin:28px 0;color:#e0d0c8;font-size:14px;letter-spacing:6px;`,
      strong: `color:${p};font-weight:600;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:16px;`,
      num: `display:inline-block;background:${p}22;color:${p};width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;font-weight:500;`,
      card: `background:#fff;border:1px solid ${p}22;padding:24px;border-radius:16px;text-align:center;margin:16px 0;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 法式优雅 ──
registerTemplate('french', {
  name: '法式优雅',
  desc: '法式配色+衬线字体，优雅浪漫',
  category: 'special',
  contentTip: '适合时尚、艺术、文学、高端生活方式',
  primary: '#2c3e50', bg: '#fdfcf8',
  demo: '<div style="font-family:serif;font-size:14px;color:#2c3e50;font-style:italic;letter-spacing:2px">L\'Élégance</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:Georgia,'Noto Serif SC','STSong',serif;color:#2c3e50;font-size:16px;line-height:2.2;background:${b};`,
      h1: `text-align:center;font-size:24px;color:${p};font-weight:400;margin:30px 0 14px;line-height:1.5;font-style:italic;letter-spacing:4px;font-family:Georgia,'SimSun',serif;`,
      h2: `font-size:19px;color:${p};margin:36px 0 14px;font-weight:400;line-height:1.5;text-align:center;font-style:italic;letter-spacing:3px;border-bottom:1px solid #ddd;padding-bottom:10px;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:600;letter-spacing:1px;`,
      p: `margin:14px 0;font-size:16px;color:#2c3e50;line-height:2.2;text-indent:2em;`,
      quote: `margin:20px 30px;padding:16px 20px;color:#7f8c8d;font-size:15px;line-height:1.8;font-style:italic;text-align:center;border-top:1px solid #ddd;border-bottom:1px solid #ddd;`,
      highlight: `background:#f5f0e0;padding:2px 4px;font-style:italic;`,
      divider: `text-align:center;margin:32px 0;color:#bdc3c7;font-size:16px;letter-spacing:10px;`,
      strong: `color:${p};font-weight:700;font-style:normal;`,
      img: `max-width:100%;margin:18px auto;display:block;`,
      num: `font-family:Georgia,'SimSun',serif;color:${p};font-size:20px;font-weight:400;font-style:italic;margin-right:6px;`,
      card: `border-top:1px solid #ddd;border-bottom:1px solid #ddd;padding:24px;margin:20px 0;text-align:center;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 北欧风 ──
registerTemplate('scandinavian', {
  name: '北欧风',
  desc: '极简北欧风格，冷淡高级',
  category: 'special',
  contentTip: '适合设计、建筑、家居、极简生活类内容',
  primary: '#2c3e50', bg: '#f8f8f8',
  demo: '<div style="font-size:12px;color:#2c3e50;font-weight:300;letter-spacing:6px;text-transform:uppercase">NORDIC</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#333;font-size:16px;line-height:2.2;background:${b};`,
      h1: `text-align:center;font-size:20px;color:${p};font-weight:300;margin:36px 0 16px;line-height:1.5;letter-spacing:8px;text-transform:uppercase;`,
      h2: `font-size:16px;color:${p};font-weight:300;margin:40px 0 14px;letter-spacing:6px;line-height:1.6;text-transform:uppercase;`,
      h3: `font-size:15px;color:#555;font-weight:400;margin:28px 0 10px;letter-spacing:3px;`,
      p: `margin:16px 0;font-size:16px;color:#333;line-height:2.2;`,
      quote: `margin:24px 0;padding:16px 0;color:#999;font-size:14px;line-height:2;border-top:1px solid #e0e0e0;text-align:center;letter-spacing:2px;`,
      highlight: `background:#e8e8e8;padding:2px 4px;`,
      divider: `text-align:center;margin:36px 0;color:#e0e0e0;font-size:14px;letter-spacing:12px;`,
      strong: `color:${p};font-weight:500;`,
      img: `max-width:100%;margin:24px auto;display:block;`,
      num: `color:${p};font-size:14px;font-weight:300;margin-right:10px;letter-spacing:3px;`,
      card: `background:#fff;padding:28px;margin:24px 0;text-align:center;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 装饰艺术 ──
registerTemplate('art-deco', {
  name: '装饰艺术',
  desc: 'Art Deco 几何装饰，复古华丽',
  category: 'special',
  contentTip: '适合建筑、艺术、高端品牌类内容',
  primary: '#c9a84c', bg: '#1a1a1a',
  demo: '<div style="font-size:13px;color:#c9a84c;font-weight:700;letter-spacing:4px;border:1px solid #c9a84c;padding:3px 12px">ART DECO</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:Georgia,'Noto Serif SC',serif;color:#d4c8b0;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:24px;color:${p};font-weight:700;margin:30px 0 14px;line-height:1.5;letter-spacing:6px;border-top:2px solid ${p};border-bottom:2px solid ${p};padding:14px 0;`,
      h2: `font-size:18px;color:${p};margin:36px 0 14px;font-weight:700;line-height:1.5;text-align:center;letter-spacing:4px;`,
      h3: `font-size:16px;color:#e8dcc0;margin:24px 0 10px;font-weight:600;letter-spacing:2px;padding-left:12px;border-left:2px solid ${p};`,
      p: `margin:14px 0;font-size:16px;color:#d4c8b0;line-height:2;`,
      quote: `border-left:2px solid ${p};background:${p}08;padding:14px 20px;margin:20px 0;color:#a09080;font-size:15px;line-height:1.8;`,
      highlight: `color:${p};font-weight:700;`,
      divider: `text-align:center;margin:30px 0;color:${p}44;font-size:18px;letter-spacing:12px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:16px auto;display:block;border:1px solid ${p}33;`,
      num: `color:${p};font-size:18px;font-weight:700;margin-right:8px;letter-spacing:2px;`,
      card: `border:1px solid ${p}33;padding:24px;margin:20px 0;text-align:center;background:${p}06;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});
