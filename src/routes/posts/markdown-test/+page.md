---
layout: post
title: Style Guide
description: Every element the site sets, in one place
image: /images/blog/markdown-test/markdown-test.jpg
imageAlt: Rustic image of writing implements
imageAttribution: Rustic writing implements, source unknown
draft: true
published: 2021-03-06T00:00:00-08:00
---

This page is the site's style guide. Every element the renderer can set appears here at least once, so a change to the design language can be proofed against the whole vocabulary in one place. The paragraph you are reading exists mostly to carry the versal that opens every post.

Plain text. _Italic_. **Bold**. ~~Strikethrough~~.

**_Bold and Italic_**. _~~Italic and struck through~~_. **~~Bold and struck through~~**. _**~~Bold, Italic, and struck through~~**_.

[A link](https://example.com). [_Italic link_](https://example.com).
[**Bold link**](https://example.com). [~~Struck through link~~](https://example.com)

`Code span`

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

Unordered list

- Item
- **Bold item**
- _Italic item_

Ordered list

1. Item
2. **Bold item**
3. _Italic item_

Block quote

> This is a block quote. Here comes the Lorem ipsum dolor sit amet,
> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
> dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
> proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

A short block quote

> Write once, run once, and never run again.

Thematic break

---

Code block in Elm

```elm
type alias Voice =
    { id : String
    , frequency : Float
    , pattern : Pattern
    }
```

Code block in TypeScript

```typescript
export function formatDate(dateString: string): string {
  const date = new Date(Date.parse(dateString))
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(date)
}
```

Code block in Rust

```rust
fn divide(a: f64, b: f64) -> Result<f64, String> {
    if b == 0.0 {
        return Err("division by zero".to_string());
    }
    Ok(a / b)
}
```

Code block in Haskell

```haskell
merge :: Ord a => [a] -> [a] -> [a]
merge [] ys = ys
merge xs [] = xs
merge (x : xs) (y : ys)
  | x <= y = x : merge xs (y : ys)
  | otherwise = y : merge (x : xs) ys
```

Code block in Python

```python
def multiply(a: float, b: float) -> float:
    """Multiply two numbers."""
    return a * b
```

Code block in shell

```sh
npm run build
aws s3 sync --delete ./build s3://brianginsburg.com
```

Code block in JSON

```json
{
  "title": "Style Guide",
  "draft": true,
  "published": "2021-03-06"
}
```

Code block in TOML

```toml
[package.metadata.component.target]
path = "../wit/math.wit"
world = "math"
```

Code block in a language without a grammar, which renders plain

```wit
interface math {
  add: func(a: float64, b: float64) -> float64;
}
```

Code block with no language

```
plain preformatted text
    with indentation preserved
```

Image with alt text, which becomes the caption

![Rustic image of writing implements](/images/blog/markdown-test/markdown-test.jpg)
