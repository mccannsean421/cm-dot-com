---
title: 'How to spell check your website'
description: "I recently rebuilt my personal site and started making use of the Nuxt Content module. This is a very useful feature provided by Nuxt, allowing me to manage my content as part of my codebase by writing posts as Markdown files. I like this approach a lot, it's nice not having to use a CMS for my blog posts. However, one downside of writing posts in Markdown files, within a text editor is I often make spelling mistakes without noticing, push it to my production site and have people drop me a mail to mention the typo."
lastUpdated: 'Feb 16, 2021'
---

I recently rebuilt my personal site and started making use of the Nuxt Content module. This is a very useful feature provided by Nuxt, allowing me to manage my content as part of my codebase by writing posts as Markdown files. I like this approach a lot, it's nice not having to use a CMS for my blog posts. However, one downside of writing posts in Markdown files, within a text editor is I often make spelling mistakes without noticing, push it to my production site and have people drop me a mail to mention the typo.

Because of this I decided to implement a couple of measures to catch small typos and grammatical errors:

## Spell Check VS code extension

I tried a few different spell checking extensions from the VS Code market place. [Code spell checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) though was by far the best, right out of the box it did exactly what I wanted which was just to catch grammatical errors in the my Markdown files

## Spell check Chrome extension

If any typos get past VS code, I make use of [this webpage spell-check] Chrome extension so I can double check everything in the browser before pushing my changes live.

That's my process as of right now. But I'm definitely open to suggestions on any improvements if anyone has any! Something tells me there's a more optimal approach out there.
