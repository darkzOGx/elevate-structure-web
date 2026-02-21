const data = JSON.parse(require('fs').readFileSync('gsc-performance-report.json','utf8'));
const b = data.buckets;

// Striking distance filtered
const sd = b.strikingDistance.items
  .filter(q => {
    const skip = ['bpelsg','pe license','license lookup','ca pe','ca engineering','omaha','milwaukee'];
    return !skip.some(s => q.query.includes(s));
  })
  .sort((a,b) => b.impressions - a.impressions);

console.log('=== STRIKING DISTANCE (filtered, by impressions) ===');
sd.slice(0,25).forEach((q,i) => console.log((i+1)+'. '+q.query+' | imp:'+q.impressions+' clicks:'+q.clicks+' pos:'+q.position));

// CTR gaps filtered
const ctr = b.ctrGaps.items
  .filter(q => {
    const skip = ['omaha','milwaukee','bpelsg'];
    return !skip.some(s => q.query.includes(s)) && q.impressions >= 10;
  })
  .sort((a,b) => b.impressions - a.impressions);
console.log('\n=== CTR GAPS (filtered, imp>=10) ===');
ctr.slice(0,20).forEach((q,i) => console.log((i+1)+'. '+q.query+' | imp:'+q.impressions+' clicks:'+q.clicks+' pos:'+q.position));

// Top blog pages
const pages = data.topPages
  .filter(p => p.page.includes('/blog/') && p.impressions > 10)
  .sort((a,b) => b.impressions - a.impressions);
console.log('\n=== TOP BLOG PAGES BY IMPRESSIONS ===');
pages.slice(0,25).forEach((p,i) => {
  const ctr = p.clicks > 0 ? ((p.clicks/p.impressions)*100).toFixed(1)+'%' : '0%';
  console.log((i+1)+'. '+p.page+' | imp:'+p.impressions+' clicks:'+p.clicks+' ctr:'+ctr);
});
