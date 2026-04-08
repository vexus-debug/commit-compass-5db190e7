

## Homepage Redesign — From Basic to "Wow"

### The Problem

Every section on the homepage follows the exact same formula: **badge pill → big heading → subtitle → grid of cards**. The result is a monotonous, template-like feel with no visual rhythm or surprise. On mobile (360px), it's even worse — just endless stacked boxes with huge padding.

### What Changes

**1. Break the repetitive section pattern**
- Remove the identical "badge pill" from every single section — use them sparingly (2-3 max)
- Alternate between left-aligned, center-aligned, and full-bleed section headers
- Vary section backgrounds more dramatically (not just subtle tints)

**2. Hero slider — push CTAs and content above the fold on mobile**
- Reduce hero height on mobile from `h-screen` to `h-[85vh]`
- Move social proof inside the hero overlay as a floating bottom bar
- Make the gradient darker so text pops against photos

**3. Stats ribbon — make it a horizontal scroll strip on mobile**
- Replace the cramped 2x2 grid with a horizontally scrollable row of bold stat cards on mobile
- Add animated counting effect when stats come into view

**4. About/Mission section — full-bleed image with overlaid text**
- Instead of the standard 2-column grid, use the image as a full-width background with text overlaid in a glass-morphism card, creating a more immersive feel
- Remove the floating "8+ Years" card that clutters mobile

**5. Services — horizontal scroll cards on mobile instead of stacked blocks**
- On mobile, switch from stacked full-width cards to a horizontally scrollable carousel of compact cards
- On desktop, keep the 3-column grid but add alternating card heights for visual interest

**6. Journey timeline — make it actually feel like a timeline**
- On mobile, use a vertical timeline with a connecting line on the left and cards to the right
- Replace the generic circles with numbered steps that connect visually

**7. Impact section — add parallax-like scroll effect**
- Use `background-attachment: fixed` for a simple parallax effect on the hero image
- Make the counter numbers animate (count up) when scrolling into view

**8. Gallery — use a proper bento grid**
- Fix the masonry layout so it actually spans rows/columns properly (currently the `md:col-span-2 md:row-span-2` classes are inside Reveal wrappers so they don't work)
- On mobile, show 2 large images + "View Gallery" link instead of tiny squares

**9. Testimonials — single featured testimonial with navigation**
- Replace the 4-card grid with a single large featured testimonial with prev/next navigation
- Larger quote text, prominent photo/avatar, more dramatic styling

**10. Reduce padding across all sections**
- Mobile: `py-24` → `py-14`, desktop: `py-32` → `py-24`
- This alone eliminates the "dead space" feel

**11. Add section dividers for visual flow**
- Use the existing `wave-top` and `diagonal-top` CSS utilities between sections
- Add subtle gradient transitions instead of hard background color cuts

### Files Modified

| File | Changes |
|------|---------|
| `src/pages/Index.tsx` | Restructure all sections: new layouts, horizontal scrolling on mobile, bento gallery fix, single testimonial carousel, reduced padding, section dividers |
| `src/components/HeroSlider.tsx` | Reduce mobile height, darken overlay, reposition social proof |
| `src/index.css` | Add horizontal scroll utility, count-up animation trigger class, parallax utility |
| `src/hooks/use-scroll-reveal.tsx` | Add a `useCountUp` hook for animated stat numbers |

