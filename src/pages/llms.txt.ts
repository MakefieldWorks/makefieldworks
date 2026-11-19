import { products } from '../data/products';

export function GET() {
  const directory = products.map(({ name, url, job }) => `- [${name}](${url}) — ${job}`);
  const text = [
    '# Makefield Works',
    '',
    '> A small, independent software workshop in Upper Makefield Township, Pennsylvania, United States.',
    '',
    '## Workshop',
    '',
    '- [Official website](https://makefieldworks.com/)',
    '- [GitHub organization](https://github.com/MakefieldWorks)',
    '',
    '## Products',
    '',
    ...directory,
    '',
  ].join('\n');

  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
