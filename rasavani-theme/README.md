# Rasavani Ghost Theme

Mobile-friendly Ghost 5 theme inspired by the provided Rasavani preview design.

## Features

- Ghost 5 compatible templates
- Telugu-forward visual style with responsive layout
- Reusable partials for header/nav/footer/post cards
- Ghost native member subscribe form
- Static placeholder widgets for Panchangam and festival block (v1)

## Theme Structure

- `default.hbs`
- `index.hbs`
- `post.hbs`
- `page.hbs`
- `tag.hbs`
- `author.hbs`
- `error.hbs`
- `partials/`
- `assets/css/style.css`
- `assets/js/main.js`
- `package.json`

## Validate (Recommended)

From workspace root:

```bash
npx --yes gscan ./rasavani-theme
```

## Zip for Ghost Upload

From workspace root:

```bash
cd /workspaces/rasavani_web
zip -r rasavani-theme.zip rasavani-theme -x "*/.git*" "*/node_modules/*"
```

Upload `rasavani-theme.zip` in Ghost Admin -> Settings -> Design -> Change theme.
