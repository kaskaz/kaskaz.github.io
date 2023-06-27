export default function imgixLoader({src, width, quality}: { src: string, width: number, quality: number }) {
  const normalizedSrc = src[0] === '/' ? src.slice(1) : src;
  const url = new URL(`https://kaskaz-wp.imgix.net/${normalizedSrc}`)
  const params = url.searchParams
  params.set('auto', params.getAll('auto').join(',') || 'format')
  params.set('fit', params.get('fit') || 'max')
  params.set('w', params.get('w') || width.toString())
  params.set('q', quality?.toString() || '50')
  return url.href
}