/**
 * 模板：简约白
 * 风格：清爽干净，适合大多数文章
 */
registerTemplate('minimal', {
  name: '简约白',
  desc: '清爽干净，适合大多数文章',
  primary: '#2b5da6',
  bg: '#ffffff',
  demo: '',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#3f3f3f;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:#1a1a1a;font-weight:800;margin:24px 0 12px;line-height:1.5;`,
      h2: `font-size:18px;color:${p};margin:36px 0 14px;padding-bottom:8px;border-bottom:2px solid ${p};line-height:1.6;font-weight:700;`,
      h2_long: `font-size:16px;color:${p};margin:32px 0 12px;padding:10px 14px;background:${p}0a;border-left:4px solid ${p};line-height:1.6;font-weight:700;`,
      h2_short: `font-size:20px;color:#1a1a1a;margin:36px 0 14px;text-align:center;font-weight:800;letter-spacing:2px;line-height:1.4;`,
      h3: `font-size:16px;color:#1a1a1a;margin:24px 0 10px;font-weight:700;`,
      h3_alt: `font-size:15px;color:${p};margin:20px 0 10px;padding-left:10px;border-left:3px solid ${p}40;font-weight:600;`,
      p: `margin:14px 0;font-size:16px;color:#3f3f3f;line-height:2;`,
      quote: `border-left:4px solid ${p};background:#f7f7f7;padding:14px 18px;margin:18px 0;color:#555;font-size:15px;line-height:1.8;`,
      highlight: `background:#fff3cd;padding:2px 4px;`,
      divider: `text-align:center;margin:28px 0;color:#ccc;letter-spacing:10px;font-size:14px;`,
      strong: `color:#1a1a1a;font-weight:700;`,
      img: `max-width:100%;border-radius:8px;margin:14px auto;display:block;`,
      img_border: `max-width:100%;border-radius:8px;margin:14px auto;display:block;border:3px solid #f0f0f0;`,
      img_shadow: `max-width:100%;border-radius:10px;margin:14px auto;display:block;box-shadow:0 4px 16px rgba(0,0,0,.1);`,
      img_card: `max-width:100%;border-radius:12px;margin:14px auto;display:block;padding:8px;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.08);`,
      img_polaroid: `max-width:100%;border-radius:4px;margin:14px auto;display:block;padding:8px 8px 32px;background:#fff;box-shadow:0 2px 12px rgba(0,0,0,.12);transform:rotate(-1deg);`,
      num: `display:inline-block;background:${p};color:#fff;width:22px;height:22px;line-height:22px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;`,
      card: `background:#f0f4fa;padding:24px;border-radius:12px;text-align:center;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
      table_th: `background:${p};color:#fff;padding:8px 12px;font-weight:600;font-size:13px;`,
      table_td: `padding:8px 12px;border-bottom:1px solid #eee;font-size:13px;color:#555;`,
      table_alt: `background:#f9f9f9;`,
    };
  }
});
