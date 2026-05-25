/**
 * 模板：暗黑霓虹
 * 风格：深色底+亮色文字，适合科技/潮流
 */
registerTemplate('neon', {
  name: '暗黑霓虹',
  desc: '深色底+亮色文字，适合科技/潮流',
  primary: '#00ff88',
  bg: '#0a0a0a',
  demo: '<div style="color:#00ff88;font-size:13px;font-weight:700;text-shadow:0 0 10px #00ff8844">NEON TITLE</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#d4d4d4;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:24px;color:${p};font-weight:800;margin:28px 0 12px;line-height:1.5;text-shadow:0 0 20px ${p}44;letter-spacing:2px;`,
      h2: `font-size:18px;color:${p};margin:36px 0 14px;padding:10px 16px;border:1px solid ${p}44;border-radius:6px;line-height:1.5;font-weight:700;background:${p}08;`,
      h3: `font-size:16px;color:#e4e4e4;margin:24px 0 10px;font-weight:700;padding-left:10px;border-left:3px solid ${p};`,
      p: `margin:14px 0;font-size:16px;color:#d4d4d4;line-height:2;`,
      quote: `border-left:3px solid ${p};background:${p}08;padding:14px 18px;margin:18px 0;color:#a0a0a0;font-size:15px;line-height:1.8;border-radius:0 6px 6px 0;`,
      highlight: `background:${p}22;padding:2px 6px;color:${p};font-weight:600;border-radius:3px;`,
      divider: `text-align:center;margin:28px 0;color:#333;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;border-radius:6px;margin:14px auto;display:block;border:1px solid #222;`,
      num: `display:inline-block;background:${p};color:#000;width:22px;height:22px;line-height:22px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;font-weight:700;`,
      card: `background:#111;border:1px solid ${p}33;padding:24px;border-radius:10px;text-align:center;`,
    };
  }
});
