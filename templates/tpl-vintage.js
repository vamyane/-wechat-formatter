/**
 * 模板：复古文艺
 * 风格：泛黄纸张感，适合散文/随笔
 */
registerTemplate('vintage', {
  name: '复古文艺',
  desc: '泛黄纸张感，适合散文/随笔',
  primary: '#8b6914',
  bg: '#fdf8ef',
  demo: '<div style="font-family:serif;font-size:13px;color:#8b6914;font-style:italic">Vintage Style</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:Georgia,"Noto Serif SC","STSong",serif;color:#3d3225;font-size:16px;line-height:2.2;background:${b};`,
      h1: `text-align:center;font-size:24px;color:${p};font-weight:800;margin:28px 0 12px;line-height:1.5;font-family:Georgia,serif;letter-spacing:3px;`,
      h2: `font-size:19px;color:${p};margin:36px 0 14px;text-align:center;line-height:1.5;font-weight:700;font-family:Georgia,serif;letter-spacing:2px;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;font-style:italic;`,
      p: `margin:14px 0;font-size:16px;color:#3d3225;line-height:2.2;text-indent:2em;`,
      quote: `margin:20px 30px;padding:16px 20px;border:1px solid #d4c5a0;background:#faf5e8;color:#6b5d45;font-size:15px;line-height:1.8;font-style:italic;text-align:center;border-radius:4px;`,
      highlight: `background:#f5e6c8;padding:2px 4px;`,
      divider: `text-align:center;margin:32px 0;color:#c9b88a;font-size:16px;letter-spacing:8px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:18px auto;display:block;border:3px solid #e8dcc8;padding:4px;background:#fff;`,
      num: `font-family:Georgia,serif;font-size:22px;color:${p};font-weight:900;margin-right:6px;font-style:italic;`,
      card: `border:1px solid #d4c5a0;background:#faf5e8;padding:24px;border-radius:6px;text-align:center;margin:18px 0;`,
    };
  }
});
