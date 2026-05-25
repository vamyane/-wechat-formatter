/**
 * 模板包：中国风 / 手写体 / 报纸头条 / 薄荷清新 / 日式无印
 */

// ── 6. 中国风 ──
registerTemplate('chinese', {
  name: '中国风',
  desc: '水墨+朱红，适合文化/历史',
  primary: '#c0392b', bg: '#fdf6ec',
  demo: '<div style="font-family:serif;font-size:14px;color:#c0392b;border-bottom:1px solid #c0392b;padding-bottom:2px;display:inline-block">墨韵</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:"Noto Serif SC","STSong","SimSun",serif;color:#2d2015;font-size:16px;line-height:2.4;background:${b};`,
      h1: `text-align:center;font-size:24px;color:${p};font-weight:800;margin:28px 0 14px;font-family:"Noto Serif SC","STSong",serif;letter-spacing:6px;line-height:1.5;`,
      h2: `font-size:19px;color:${p};margin:36px 0 14px;text-align:center;letter-spacing:4px;line-height:1.5;font-weight:700;border-bottom:1px solid ${p}44;padding-bottom:10px;`,
      h3: `font-size:17px;color:#2d2015;margin:24px 0 10px;font-weight:700;letter-spacing:2px;`,
      p: `margin:14px 0;font-size:16px;color:#2d2015;line-height:2.4;text-indent:2em;`,
      quote: `margin:20px 24px;padding:16px 20px;border:1px solid ${p}33;background:${p}06;color:#5a4a3a;font-size:15px;line-height:2;text-align:center;font-style:italic;`,
      highlight: `background:${p}12;padding:2px 4px;`,
      divider: `text-align:center;margin:32px 0;color:${p}44;font-size:16px;letter-spacing:12px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:20px auto;display:block;border:2px solid #e8dcc8;padding:4px;background:#fff;`,
      num: `color:${p};font-size:20px;font-weight:700;margin-right:6px;`,
      card: `border:1px solid ${p}33;background:${p}06;padding:24px;margin:20px 0;text-align:center;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 7. 手写体 ──
registerTemplate('handwrite', {
  name: '手写体',
  desc: '亲切手写感，适合个人随笔',
  primary: '#2c3e50', bg: '#fffef9',
  demo: '<div style="font-family:serif;font-size:14px;color:#2c3e50;font-style:italic">手写笔记</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'Georgia','SimSun',serif;color:#3a3a3a;font-size:16px;line-height:2.2;background:${b};`,
      h1: `text-align:center;font-size:24px;color:${p};font-weight:400;margin:28px 0 14px;font-family:'Georgia','SimSun',serif;line-height:1.5;font-style:italic;`,
      h2: `font-size:20px;color:${p};margin:32px 0 14px;font-family:'Georgia','SimSun',serif;font-weight:400;font-style:italic;line-height:1.5;text-decoration:underline;text-decoration-style:wavy;text-underline-offset:6px;`,
      h3: `font-size:17px;color:${p};margin:24px 0 10px;font-style:italic;`,
      p: `margin:14px 0;font-size:16px;color:#3a3a3a;line-height:2.2;`,
      quote: `border-left:3px solid ${p}44;padding:14px 20px;margin:20px 0;color:#666;font-size:15px;line-height:1.8;font-style:italic;background:${p}04;`,
      highlight: `background:#fff3a8;padding:2px 4px;`,
      divider: `text-align:center;margin:28px 0;color:#ccc;font-size:14px;`,
      strong: `color:${p};font-weight:700;font-style:normal;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:4px;transform:rotate(-1deg);`,
      num: `color:${p};font-size:18px;margin-right:6px;font-style:italic;`,
      card: `background:#fff;border:1px dashed ${p}44;padding:20px;margin:16px 0;border-radius:4px;transform:rotate(0.5deg);`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 8. 报纸头条 ──
registerTemplate('newspaper', {
  name: '报纸头条',
  desc: '黑白报纸风格，适合新闻/评论',
  primary: '#000000', bg: '#f5f0e8',
  demo: '<div style="font-family:Georgia,'SimSun',serif;font-size:16px;font-weight:900;color:#000;border-bottom:3px solid #000;padding-bottom:2px">HEADLINE</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:Georgia,"Noto Serif SC","SimSun",serif;color:#111;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:28px;color:${p};font-weight:900;margin:24px 0 8px;font-family:Georgia,'Noto Serif SC',serif;letter-spacing:1px;line-height:1.3;text-transform:uppercase;`,
      h2: `font-size:22px;color:${p};font-weight:900;margin:32px 0 10px;line-height:1.3;border-bottom:3px solid ${p};padding-bottom:6px;`,
      h3: `font-size:16px;color:${p};font-weight:700;margin:24px 0 10px;text-transform:uppercase;letter-spacing:2px;`,
      p: `margin:12px 0;font-size:16px;color:#111;line-height:2;text-indent:2em;column-count:1;`,
      quote: `margin:16px 0;padding:12px 16px;border-top:2px solid ${p};border-bottom:2px solid ${p};font-size:15px;color:#333;line-height:1.8;font-style:italic;text-align:center;`,
      highlight: `background:${p};color:#fff;padding:2px 6px;`,
      divider: `text-align:center;margin:24px 0;color:${p};font-size:18px;letter-spacing:8px;`,
      strong: `color:${p};font-weight:900;`,
      img: `max-width:100%;margin:16px auto;display:block;`,
      num: `font-family:Georgia,'SimSun',serif;font-size:24px;color:${p};font-weight:900;margin-right:6px;`,
      card: `border:2px solid ${p};padding:20px;margin:16px 0;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 9. 薄荷清新 ──
registerTemplate('mint', {
  name: '薄荷清新',
  desc: '薄荷绿+白，清爽夏日感',
  primary: '#00b894', bg: '#f0fff4',
  demo: '<div style="color:#00b894;font-size:13px;font-weight:700">🌿 清新自然</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#2d3436;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:800;margin:24px 0 12px;line-height:1.5;`,
      h2: `font-size:18px;color:${p};margin:32px 0 14px;padding:8px 16px;background:${p}0a;border-radius:8px;line-height:1.5;font-weight:700;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#2d3436;line-height:2;`,
      quote: `background:${p}0a;border-left:4px solid ${p};padding:14px 18px;margin:18px 0;color:#4a6a5a;font-size:15px;line-height:1.8;border-radius:0 10px 10px 0;`,
      highlight: `background:${p}18;padding:2px 6px;border-radius:6px;color:${p};font-weight:600;`,
      divider: `text-align:center;margin:28px 0;color:${p}44;font-size:14px;letter-spacing:8px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;border-radius:14px;margin:14px auto;display:block;`,
      num: `display:inline-block;background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;`,
      card: `background:#fff;border:1px solid ${p}22;padding:24px;border-radius:14px;text-align:center;margin:16px 0;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 10. 日式无印 ──
registerTemplate('muji', {
  name: '日式无印',
  desc: '极致简约，无装饰，留白美学',
  primary: '#8c7b6b', bg: '#ffffff',
  demo: '<div style="font-size:13px;color:#8c7b6b;font-weight:300;letter-spacing:4px">無印良品</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#333;font-size:16px;line-height:2.4;background:${b};`,
      h1: `text-align:center;font-size:20px;color:${p};font-weight:300;margin:36px 0 16px;letter-spacing:8px;line-height:1.6;`,
      h2: `font-size:17px;color:${p};font-weight:300;margin:40px 0 14px;letter-spacing:4px;line-height:1.6;`,
      h3: `font-size:15px;color:#333;font-weight:400;margin:28px 0 10px;letter-spacing:2px;`,
      p: `margin:16px 0;font-size:16px;color:#333;line-height:2.4;`,
      quote: `margin:24px 32px;padding:16px 0;color:#999;font-size:14px;line-height:2;border-top:1px solid #eee;border-bottom:1px solid #eee;text-align:center;letter-spacing:2px;`,
      highlight: `border-bottom:1px solid ${p};padding-bottom:1px;`,
      divider: `text-align:center;margin:36px 0;color:#ddd;font-size:14px;letter-spacing:12px;`,
      strong: `color:${p};font-weight:500;`,
      img: `max-width:100%;margin:24px auto;display:block;`,
      num: `color:${p};font-size:14px;font-weight:300;margin-right:8px;letter-spacing:2px;`,
      card: `padding:24px;margin:24px 0;text-align:center;border-top:1px solid #eee;border-bottom:1px solid #eee;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});
