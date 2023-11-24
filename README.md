# Astro SSR with Islands doing react-router-dom Client Side routing

/ -> Server-Side renders index.astro
/static -> Client-Side rendering controlled by react-router-dom ( dynamic routes are not limited )
/dynamic -> Client-Side rendering controlled by react-router-dom ( dynamic routes are limited to getStaticPaths )
