# Astro SSR with Islands doing react-router-dom Client Side routing

* `/` -> Server-Side rendering index.astro
* `/static` -> Client-Side rendering controlled by react-router-dom ( unlimited dynamic routes )
* `/dynamic` -> Client-Side rendering controlled by react-router-dom ( limited dynamic routes due getStaticPaths )
