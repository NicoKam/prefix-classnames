# prefix-classnames

classnames with prefix

You should know ['classnames'](https://github.com/JedWatson/classnames#readme) before use this tool.

## Usage

```javascript
import pc from 'prefix-classnames';

const px = pc('prefix');

px(); // 'prefix'
px('root'); // 'prefix-root'
px({ root: true }); // 'prefix-root'
px('a', 'b', 'c'); // 'prefix-a prefix-b prefix-c'
px(['a', 'b', 'c']); // 'prefix-a prefix-b prefix-c'
px('a', { bb: true, cc: false, dd: true }); // 'prefix-a prefix-bb prefix-dd'
px(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // 'prefix-bar prefix-1'
px(['a', ['b', { c: 1, d: false }, ['e', { f: true }, 'g']]]); // 'prefix-a prefix-b prefix-c prefix-e prefix-f prefix-g'
```

## Demo

You can use `prefix-classnames` in your React Component like this.

style:

```less
@prefix: my-special-component-prefix;

.@{prefix}- {
  &root{

  }

  &dark-mode{

  }

  &header{

  }

  &body{

  }
}

```

component:

```jsx
import React from 'react';
import pc from 'prefix-classnames';
import 'MyComponent.less'; // no css-modules

// class prefix
const px = pc('my-special-component-prefix');

export default class MyComponent{
  render(){
    const { darkMode } = this.props;
    return(
      <div className={px('root', {['dark-mode']: darkMode})}>
        <div className={px('header')}>
          Component Header
        </div>
        <div className={px('body')}>
        </div>
      </div>
    );
  }
}

```