---
topic: Angular
title: Dependency Injection
chapter: Angular
slug: angular-dependency-injection
---

```typescript
import { Injectable } from "@angular/core";
import { HEROES } from "./mock-heroes";
@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: "root",
})
export class HeroService {
  getHeroes() {
    return HEROES;
  }
}
```
