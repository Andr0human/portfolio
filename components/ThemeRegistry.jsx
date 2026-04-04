'use client';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { useServerInsertedHTML } from 'next/navigation';
import { useState } from 'react';

function createEmotionCache() {
  let insertedStyles = [];
  const cache = createCache({ key: 'mui' });
  cache.compat = true;
  const prevInsert = cache.insert;
  cache.insert = (...args) => {
    const serialized = args[1];
    if (cache.inserted[serialized.name] === undefined) {
      insertedStyles.push(serialized.name);
    }
    return prevInsert(...args);
  };
  const flush = () => {
    const result = insertedStyles;
    insertedStyles = [];
    return result;
  };
  return { cache, flush };
}

export default function ThemeRegistry({ children }) {
  const [{ cache, flush }] = useState(createEmotionCache);

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) return null;
    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
