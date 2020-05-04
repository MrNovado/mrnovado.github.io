import React, { lazy, Suspense } from 'react';

const AuthorBanner = lazy(() =>
  import('gatsby-theme-chronoblog/src/components/author-banner')
);

const FeedSearch = lazy(() =>
  import('gatsby-theme-chronoblog/src/components/feed-search')
);

const FeedItems = lazy(() =>
  import('gatsby-theme-chronoblog/src/components/feed-items')
);

const Tags = lazy(() => import('gatsby-theme-chronoblog/src/components/tags'));

export const LazyHead = () => (
  <Suspense fallback={<h1>Alex Vlad' personal page</h1>}>
    <AuthorBanner />
  </Suspense>
);

export const LazyBot = () => (
  <Suspense fallback={null}>
    <FeedSearch />
    <Tags />
    <FeedItems />
  </Suspense>
);
