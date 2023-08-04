## Vercel navbar

This is a replica of Vercel's [design page](https://vercel.com/design) navigation bar.

> [!NOTE]
> The design credit goes to respective designers from Vercel. This repo is just a replica of the same navbar as an re usable package

| props  | type                                                           | default |
| ------ | -------------------------------------------------------------- | ------- |
| links  | `Array<{ title: string; icon: React.ReactNode;href: string;}>` | -       |
| index  | `number`                                                       | 0       |
| config | `AnimationConfig` from 'react-spring'                          | -       |

### usage

1. Install the package

```bash
npm i vercel-nav react-spring
```

2. Add the component to tailwind content (if you are using tailwind)

```js
 content: [
    'node_modules/replica-vercel-nav/**/*.{js,ts,jsx,tsx,mdx}',
    /// ...
  ],
```

3. Import and provide props

```jsx
import Header from "vercel-nav";
// ...
function App() {
  const headers = [
    {
      title: "Home",
      icon: <HomeIcon className="h-6 w-6" />,
      href: "/",
    },
    {
      title: "Blogs",
      icon: <BookOpenIcon className="h-6 w-6" />,
      href: "/blogs/",
    },
    {
      title: "Works",
      icon: <BriefcaseIcon className="h-6 w-6" />,
      href: "/experience",
    },
  ];
  return (
    <div>
      <Header links={headers} activeIndex={index} />
    </div>
  );
}
```

### docs

`links` prop expects `title`, `icon` and `href` to be present.

- `title` is shown in desktop and tablet view
- `icon` is shown in mobile view
- `href` is for navigating to specific page

`activeIndex` prop is for highlighting the active pill.
# vercel-nav
# vercel-nav
