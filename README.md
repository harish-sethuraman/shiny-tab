
![shiny tab preview](/readme.png)

## shiny tab

this is a replica of Vercel's [design page](https://vercel.com/design) tabs.

> [!NOTE]
> The design credit goes to respective designers from Vercel. This repo is just a replica of the same tabs as an re usable package

| props  | type                                                                                    | default |
| ------ | --------------------------------------------------------------------------------------- | ------- |
| links  | `Array<{ title: string; icon: React.ReactNode;onClick: (activeIndex:number) => void;}>` | -       |
| index  | `number`                                                                                | 0       |
| config | `AnimationConfig` from 'react-spring'                                                   | -       |

### usage

1. Install the package

```bash
npm i shiny-tab react-spring
```

2. Add the component to tailwind content (if you are using tailwind)

```js
 content: [
    'node_modules/shiny-tab/**/*.{js,ts,jsx,tsx,mdx}',
    /// ...
  ],
```

3. Import and provide props

```jsx
import Header from "shiny-tab";
// ...
function App() {
  const headers = [
    {
      title: "Home",
      icon: <HomeIcon className="h-6 w-6" />,
      onClick: (index: number) => setIndex(index),
    },
    {
      title: "Blogs",
      icon: <BookOpenIcon className="h-6 w-6" />,
      onClick: (index: number) => setIndex(index),
    },
    {
      title: "Works",
      icon: <BriefcaseIcon className="h-6 w-6" />,
      onClick: (index: number) => setIndex(index),
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

`links` prop expects `title`, `icon` and `onClick` to be present.

- `title` is shown in desktop and tablet view
- `icon` is shown in mobile view
- `onClick` is for navigating to specific page or setting activeIndex to something

`activeIndex` prop is for highlighting the active pill.
