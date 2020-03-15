# WooliesX Code Challenge

This is a "Shopping Card" design, demonstrating the usage of StencilJS and SASS.

I used the normal css variables instead of SASS, simply because it makes more sense in this context.
I also used BEM in my SASS classes.

Also created a dynamic component for Typography, which can be really powerful, given that we can change the variant.

When clicking on the  **ADD TO CARD** button, it will propagate the event up to it's parent, and the parent component will dump them to alert();

For testing, since I had no function to be tested, I only added a e2e test to the root to test the existence of the lists in the page.

When more logic is added, perhaps more unit test can be demonstrated.
