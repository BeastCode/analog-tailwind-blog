---
topic: Angular
title: Router
chapter: Angular
slug: angular-router
---

```typescript
this.router.events.subscribe((event: any) => {
  this.isBlogRoute = event.url !== "/blog";
});
```
