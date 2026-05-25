/**
 * 模板包：极简线框 / 学术论文 / 暗金奢华 / 粉色少女 / 赛博朋克
 */

// ── 1. 极简线框 ──
registerTemplate('wireframe', {
  name: '极简线框',
  desc: '极细边框+大量留白，极致克制',
  primary: '#333333', bg: '#ffffff',
  demo: '<div style="border:1px solid #333;padding:4px 8px;font-size:11px;display:inline-block">线框标题</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#333;font-size:16px;line-height:2.2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:300;margin:30px 0 16px;letter-spacing:6px;border:1px solid ${p};padding:12px 24px;line-height:1.5;`,
      h2: `font-size:17px;color:${p};font-weight:300;margin:40px 0 14px;letter-spacing:3px;border-bottom:1px solid ${p};padding-bottom:8px;line-height:1.6;`,
      h3: `font-size:15px;color:${p};font-weight:400;margin:28px 0 10px;letter-spacing:2px;`,
      p: `margin:16px 0;font-size:16px;color:#333;line-height:2.2;`,
      quote: `border:1px solid #ddd;padding:16px 20px;margin:20px 0;color:#666;font-size:15px;line-height:1.8;`,
      highlight: `border-bottom:1px solid ${p};padding-bottom:1px;`,
      divider: `text-align:center;margin:32px 0;color:#ccc;font-size:14px;letter-spacing:8px;`,
      strong: `color:${p};font-weight:500;`,
      img: `max-width:100%;margin:20px auto;display:block;`,
      num: `font-size:14px;color:${p};font-weight:300;margin-right:8px;letter-spacing:2px;`,
      card: `border:1px solid #ddd;padding:24px;margin:20px 0;text-align:center;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 2. 学术论文 ──
registerTemplate('academic', {
  name: '学术论文',
  desc: '衬线字体+脚注风格，适合研究/分析',
  primary: '#8b0000', bg: '#fffff5',
  demo: '<div style="font-family:serif;font-size:12px;color:#8b0000">Abstract</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:Georgia,"Noto Serif SC","SimSun",serif;color:#1a1a1a;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:700;margin:30px 0 10px;font-family:Georgia,'SimSun',serif;letter-spacing:1px;line-height:1.5;`,
      h2: `font-size:18px;color:${p};font-weight:700;margin:36px 0 12px;font-family:Georgia,'SimSun',serif;line-height:1.5;`,
      h3: `font-size:16px;color:${p};font-weight:700;margin:24px 0 10px;font-style:italic;`,
      p: `margin:12px 0;font-size:16px;color:#1a1a1a;line-height:2;text-indent:2em;`,
      quote: `margin:16px 40px;padding:12px 16px;font-size:14px;color:#555;line-height:1.8;border-left:2px solid #ccc;font-style:italic;`,
      highlight: `background:${p}0a;padding:1px 4px;border-bottom:1px dotted ${p};`,
      divider: `text-align:center;margin:28px 0;color:#999;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:16px auto;display:block;border:1px solid #ddd;`,
      num: `font-family:Georgia,'SimSun',serif;font-size:14px;color:${p};margin-right:6px;`,
      card: `margin:16px 0;padding:16px;border:1px solid #ddd;background:#fafaf5;font-size:14px;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 3. 暗金奢华 ──
registerTemplate('gold', {
  name: '暗金奢华',
  desc: '黑底金字，高端品牌感',
  primary: '#d4a843', bg: '#0f0f0f',
  demo: '<div style="color:#d4a843;font-size:13px;font-weight:700;letter-spacing:3px">LUXURY</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#e8e0d0;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:24px;color:${p};font-weight:800;margin:30px 0 14px;letter-spacing:6px;line-height:1.5;text-shadow:0 0 20px ${p}33;`,
      h2: `font-size:18px;color:${p};margin:36px 0 14px;text-align:center;letter-spacing:4px;line-height:1.6;font-weight:700;`,
      h3: `font-size:16px;color:#e8e0d0;margin:24px 0 10px;font-weight:600;padding-left:12px;border-left:2px solid ${p};`,
      p: `margin:14px 0;font-size:16px;color:#e8e0d0;line-height:2;`,
      quote: `border-left:2px solid ${p};padding:14px 20px;margin:20px 0;color:#a09080;font-size:15px;line-height:1.8;background:${p}08;`,
      highlight: `color:${p};font-weight:600;`,
      divider: `text-align:center;margin:30px 0;color:${p}44;font-size:14px;letter-spacing:12px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:16px auto;display:block;border:1px solid ${p}33;`,
      num: `color:${p};font-size:18px;font-weight:700;margin-right:8px;`,
      card: `border:1px solid ${p}33;padding:24px;margin:20px 0;text-align:center;background:${p}06;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 4. 粉色少女 ──
registerTemplate('pink', {
  name: '粉色少女',
  desc: '柔和粉色系，适合情感/生活',
  primary: '#e84393', bg: '#fff5f8',
  demo: '<div style="color:#e84393;font-size:13px;font-weight:700">🌸 粉色心情</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#4a3a42;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:800;margin:24px 0 12px;line-height:1.5;`,
      h2: `font-size:18px;color:${p};margin:32px 0 14px;text-align:center;line-height:1.6;font-weight:700;border-bottom:2px dashed ${p}44;padding-bottom:10px;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#4a3a42;line-height:2;`,
      quote: `background:${p}0a;border-left:4px solid ${p}66;padding:14px 18px;margin:18px 0;color:#6a5060;font-size:15px;line-height:1.8;border-radius:0 12px 12px 0;`,
      highlight: `background:${p}18;padding:2px 6px;border-radius:8px;`,
      divider: `text-align:center;margin:28px 0;color:${p}44;font-size:14px;letter-spacing:6px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;border-radius:16px;margin:14px auto;display:block;`,
      num: `display:inline-block;background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;`,
      card: `background:#fff;border:1px solid ${p}22;padding:24px;border-radius:16px;text-align:center;margin:16px 0;box-shadow:0 2px 12px ${p}11;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 5. 赛博朋克 ──
registerTemplate('cyber', {
  name: '赛博朋克',
  desc: '霓虹+故障效果，科幻/科技',
  primary: '#00f0ff', bg: '#0a0a1a',
  demo: '<div style="color:#00f0ff;font-size:13px;font-weight:700;text-shadow:0 0 8px #00f0ff88">CYBER://2077</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:monospace,'Courier New','PingFang SC',sans-serif;color:#c0c0d0;font-size:15px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:24px;color:${p};font-weight:900;margin:30px 0 14px;letter-spacing:4px;text-shadow:0 0 20px ${p}66;line-height:1.5;`,
      h2: `font-size:17px;color:#ff2d55;margin:36px 0 14px;padding:8px 14px;border:1px solid #ff2d5544;line-height:1.5;font-weight:700;background:#ff2d5508;`,
      h3: `font-size:15px;color:${p};margin:24px 0 10px;font-weight:700;padding-left:10px;border-left:2px solid ${p};`,
      p: `margin:14px 0;font-size:15px;color:#c0c0d0;line-height:2;`,
      quote: `border-left:2px solid #ff2d55;background:#ff2d5508;padding:14px 18px;margin:18px 0;color:#a0a0b0;font-size:14px;line-height:1.8;`,
      highlight: `background:${p}22;padding:2px 6px;color:${p};font-weight:700;`,
      divider: `text-align:center;margin:28px 0;color:#333;font-size:12px;letter-spacing:6px;font-family:monospace;`,
      strong: `color:#ff2d55;font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border:1px solid ${p}33;`,
      num: `color:#ff2d55;font-family:monospace;font-size:16px;font-weight:700;margin-right:8px;`,
      card: `border:1px solid ${p}33;background:#111122;padding:20px;margin:16px 0;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});
