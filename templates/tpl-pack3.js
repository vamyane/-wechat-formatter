/**
 * 模板包：红黑经典 / 极光渐变 / 复古打字机 / 工业金属 / 水墨丹青
 */

// ── 11. 红黑经典 ──
registerTemplate('redblack', {
  name: '红黑经典',
  desc: '红+黑强烈对比，适合观点/评论',
  primary: '#e74c3c', bg: '#ffffff',
  demo: '<div style="background:#e74c3c;color:#fff;padding:3px 12px;font-size:12px;font-weight:700;display:inline-block">头条</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#222;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:24px;color:#fff;background:${p};margin:24px 0 16px;padding:14px 24px;line-height:1.5;font-weight:800;letter-spacing:2px;`,
      h2: `font-size:18px;color:${p};margin:32px 0 14px;font-weight:800;line-height:1.5;border-bottom:3px solid ${p};padding-bottom:8px;`,
      h3: `font-size:16px;color:#222;margin:24px 0 10px;font-weight:700;padding-left:10px;border-left:3px solid ${p};`,
      p: `margin:14px 0;font-size:16px;color:#222;line-height:2;`,
      quote: `background:${p}08;border-left:4px solid ${p};padding:14px 18px;margin:18px 0;color:#555;font-size:15px;line-height:1.8;`,
      highlight: `background:${p};color:#fff;padding:2px 6px;font-weight:600;`,
      divider: `text-align:center;margin:28px 0;color:#ddd;font-size:14px;`,
      strong: `color:${p};font-weight:800;`,
      img: `max-width:100%;margin:14px auto;display:block;`,
      num: `display:inline-block;background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;font-size:13px;margin-right:8px;font-weight:700;`,
      card: `border:2px solid ${p};padding:24px;margin:16px 0;text-align:center;`,
    };
  }
});

// ── 12. 极光渐变 ──
registerTemplate('aurora', {
  name: '极光渐变',
  desc: '多彩渐变标题，梦幻/创意',
  primary: '#6c5ce7', bg: '#f8f9ff',
  demo: '<div style="background:linear-gradient(90deg,#6c5ce7,#00b894);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:14px;font-weight:800">极光色彩</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#2d3436;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:24px;font-weight:800;margin:28px 0 14px;line-height:1.5;background:linear-gradient(135deg,${p},#00b894,#fdcb6e);-webkit-background-clip:text;-webkit-text-fill-color:transparent;`,
      h2: `font-size:18px;color:${p};margin:32px 0 14px;padding:10px 16px;background:linear-gradient(90deg,${p}0a,transparent);border-radius:8px;line-height:1.5;font-weight:700;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#2d3436;line-height:2;`,
      quote: `background:linear-gradient(135deg,${p}06,#00b89406);border-left:4px solid ${p};padding:14px 18px;margin:18px 0;color:#555;font-size:15px;line-height:1.8;border-radius:0 8px 8px 0;`,
      highlight: `background:linear-gradient(90deg,${p}22,#00b89422);padding:2px 6px;border-radius:4px;`,
      divider: `text-align:center;margin:28px 0;color:#ddd;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;border-radius:12px;margin:14px auto;display:block;`,
      num: `display:inline-block;background:linear-gradient(135deg,${p},#00b894);color:#fff;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;`,
      card: `background:linear-gradient(135deg,${p}06,#00b89406);border:1px solid ${p}11;padding:24px;border-radius:12px;text-align:center;margin:16px 0;`,
    };
  }
});

// ── 13. 复古打字机 ──
registerTemplate('typewriter', {
  name: '复古打字机',
  desc: '等宽字体+墨色，怀旧/文学',
  primary: '#1a1a1a', bg: '#f5f0e0',
  demo: '<div style="font-family:monospace;font-size:12px;color:#1a1a1a;background:#f5f0e0;padding:4px 8px;border:1px solid #ccc">TYPEWRITER_</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'Courier New',Consolas,monospace;color:#1a1a1a;font-size:15px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:700;margin:28px 0 14px;font-family:'Courier New',monospace;letter-spacing:4px;line-height:1.5;text-transform:uppercase;`,
      h2: `font-size:17px;color:${p};margin:32px 0 12px;font-family:'Courier New',monospace;font-weight:700;line-height:1.5;text-transform:uppercase;letter-spacing:2px;`,
      h3: `font-size:15px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:15px;color:#1a1a1a;line-height:2;`,
      quote: `border-left:3px solid ${p};padding:14px 18px;margin:18px 0;color:#555;font-size:14px;line-height:1.8;background:${p}06;`,
      highlight: `background:#1a1a1a;color:${b};padding:2px 4px;`,
      divider: `text-align:center;margin:28px 0;color:#999;font-size:14px;font-family:monospace;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border:2px solid #ccc;`,
      num: `font-family:monospace;color:${p};font-size:16px;font-weight:700;margin-right:8px;`,
      card: `border:2px solid #ccc;padding:20px;margin:16px 0;background:#faf5e8;`,
    };
  }
});

// ── 14. 工业金属 ──
registerTemplate('metal', {
  name: '工业金属',
  desc: '钢灰+铆钉感，硬核/科技',
  primary: '#e67e22', bg: '#1e1e1e',
  demo: '<div style="color:#e67e22;font-size:13px;font-weight:700;border:1px solid #e67e22;padding:3px 10px;display:inline-block">⚙ INDUSTRIAL</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'Helvetica Neue','PingFang SC',sans-serif;color:#d0d0d0;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:900;margin:28px 0 14px;letter-spacing:3px;line-height:1.5;text-transform:uppercase;`,
      h2: `font-size:17px;color:${p};margin:32px 0 14px;padding:8px 14px;border:1px solid ${p}44;line-height:1.5;font-weight:700;background:${p}08;`,
      h3: `font-size:15px;color:#e0e0e0;margin:24px 0 10px;font-weight:700;padding-left:10px;border-left:3px solid ${p};`,
      p: `margin:14px 0;font-size:16px;color:#d0d0d0;line-height:2;`,
      quote: `border-left:3px solid ${p};background:${p}08;padding:14px 18px;margin:18px 0;color:#a0a0a0;font-size:15px;line-height:1.8;`,
      highlight: `background:${p}22;padding:2px 6px;color:${p};font-weight:700;`,
      divider: `text-align:center;margin:28px 0;color:#333;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border:1px solid #444;`,
      num: `color:${p};font-size:16px;font-weight:700;margin-right:8px;`,
      card: `border:1px solid #444;background:#252525;padding:20px;margin:16px 0;`,
    };
  }
});

// ── 15. 水墨丹青 ──
registerTemplate('ink', {
  name: '水墨丹青',
  desc: '黑白水墨+朱砂印，古典文艺',
  primary: '#1a1a1a', bg: '#f8f5ef',
  demo: '<div style="font-family:serif;font-size:14px;color:#1a1a1a;border-bottom:2px solid #1a1a1a;padding-bottom:2px">水墨</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:"Noto Serif SC","STSong","SimSun",serif;color:#1a1a1a;font-size:16px;line-height:2.4;background:${b};`,
      h1: `text-align:center;font-size:26px;color:${p};font-weight:400;margin:30px 0 14px;font-family:"Noto Serif SC",serif;letter-spacing:10px;line-height:1.5;`,
      h2: `font-size:19px;color:${p};margin:36px 0 14px;text-align:center;font-weight:400;letter-spacing:6px;line-height:1.5;`,
      h3: `font-size:17px;color:${p};margin:24px 0 10px;font-weight:400;letter-spacing:3px;`,
      p: `margin:14px 0;font-size:16px;color:#1a1a1a;line-height:2.4;text-indent:2em;`,
      quote: `margin:20px 24px;padding:20px;text-align:center;font-size:15px;color:#555;line-height:2;border-top:1px solid #ddd;border-bottom:1px solid #ddd;`,
      highlight: `background:#1a1a1a;color:${b};padding:2px 6px;`,
      divider: `text-align:center;margin:32px 0;color:#ccc;font-size:16px;letter-spacing:15px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:20px auto;display:block;`,
      num: `color:${p};font-size:18px;font-weight:400;margin-right:6px;`,
      card: `border:1px solid #ddd;padding:24px;margin:20px 0;text-align:center;background:#fff;`,
    };
  }
});
