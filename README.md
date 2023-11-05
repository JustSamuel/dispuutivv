# Hèt Dispuut "In Vino Veritas" Website

This repository contains the source code for the "Hèt Dispuut "In Vino Veritas" website. It is a Pug/Jade-based static site that showcases the members of Hèt Dispuut, their activities, and contact information.

## Adding a New Member

To add a new member to the website, you need to edit the `src/pug/index.pug` file. Follow the template provided in the "Onze Leden" section. Here's a step-by-step guide:

1. Locate the section marked with comments `// -------------------- GEEN TITLES --------------------` for regular members or `// -------------------- DAGELIJKS BESTUUR --------------------` for board members.
2. Copy the template of an existing member card.
```pug
.col-lg-4.col-sm-6.mb-5
  .card.h-100.border-1.shadow-sm
      img.card-img-top(src='./assets/img/Leden/your-image.png')
      .card-body.p-4
          h4.fw-bold.card-title.mb-3 Your Name
          ul.fs-5.list-group.list-unstyled
              li Your Role(s)
              li Lid sedert Your Membership Date
              li Favoriete wijn: Your Favorite Wine
              p.fst-italic.mt-3.text-center Possible Quote
```
3. Replace the details with the new member's information:
   - Image path: `img.card-img-top(src='./assets/img/Leden/your-image.png')`
   - Name: `h4.fw-bold.card-title.mb-3 Your Name`
   - Role (if any): `li Your Role`
   - Membership date: `li Lid sedert Your Membership Date`
   - Favorite wine: `li Favoriete wijn: Your Favorite Wine`

Make sure to maintain the same structure and classes to ensure consistent styling across the site.
