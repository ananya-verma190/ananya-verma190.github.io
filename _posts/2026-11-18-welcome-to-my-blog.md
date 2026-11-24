---
title: Welcome to my blog
---

This is a sample post. Delete this file, or edit it, once you have your own.

## Writing in Markdown

You can write **bold**, *italic*, and [links](https://example.com) like normal Markdown.

- Bullet lists work
- So do numbered lists

> Quotes show up with an accent bar on the left.

## Code blocks

```systemverilog
module counter (
  input  logic clk, rst,
  output logic [3:0] q
);
  always_ff @(posedge clk)
    q <= rst ? '0 : q + 1;
endmodule
```

Inline code like `always_ff` looks like this.
