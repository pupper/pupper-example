![d005d89e-ff25-4450-9119-aa56ff0d8949](https://user-images.githubusercontent.com/3274103/31629229-4859fe88-b2b3-11e7-85fb-66c35710f607.png)

![Software License][ico-license]

**WORK IN PROGRESS**

Pupper stands for "PHP Plus React" (PPR -> Pupper). The goal is to make a Framework that takes the best of both technologies and makes them communicate bi-directionnaly.

It's inspired by the article [Game Development with React and PHP: How Compatible Are They?](https://www.sitepoint.com/game-development-with-reactjs-and-php-how-compatible-are-they/?mkt_tok=eyJpIjoiTUdZek9URTFNR1JrTVRCaCIsInQiOiJxbnB6Z0JVNDBtdFRvSWFMMStkcmhuWGIrMkdDWlhwS1VSMGFGN1hwb0pxTUxcL1VBc015UmxEQ3J3VDBSSkFRNjh2ejVTdEluXC9QcEppT0VXQ3kybkxaMTZJSnExT1BJRjB3TFwvaTEyOWNCQkd4ZlZtcVlEK0hKSlFxKzE1WEhPTCJ9) by Christopher Pitt.

## The example app

<p align="center">
  <img src="https://user-images.githubusercontent.com/3274103/31654109-3b836c0e-b325-11e7-9616-aae18d76b152.png" />
</p>

The aim of the example app is to send text input from React, convert it into a MD5 hash via PHP, and display it back in the React app.

### PHP side

**Listening**

PHP is hooked to the same WebSocket as React. In this piece of code we're adding a listener for an event named 'hash'.

```php
# app/events.php

$websocket = new Pupper\Pupper\WebSocket;

$websocket->addEventListener('hash', 
   function (ReactEvent $event) {
      // ...
   }
);
```
**Sending**

In the callback we're fetching the data that was sent with `$event->getValue()`, converting it into a md5 hash, and sending it back by returning a new `ReactEvent`.
```php
# app/events.php
use Pupper\Pupper\ReactEvent;
// ...
return (new ReactEvent)
    ->setName('hash')
    ->setValue(md5($event->getValue()))
    ->build();
```

### React side
On the React side we're hooking onto the same WebSocket as PHP and creating a `SocketProvider` that will hydrate every child component with the socket.
We're binding it to the 'hash' event by default.
```js
# app/pages/HashPage.js
const globalSocket = new WebSocket('ws://127.0.0.1:1337/ws');

// ...

<SocketProvider socket={globalSocket} bindTo='hash'>

    // ...

</SocketProvider>
```

You need to use the `withSocket` function to export your component for `SocketProvider` to hydrate it.
```js
export default withSocket(HashForm)
```

**Sending**

To send text to the 'hash' event that will be caught by the PHP listener, we create a component that extends `SocketSubmit`. `SocketSubmit` is basically a `<button>` that sends whatever is in its `toSubmit` prop to the socket it's connected to.

```js
// app/pages/components/HashForm.js
class HashForm extends SocketSubmit

// app/pages/HashPage.js
<HashForm 
    toSubmit={this.state.textToHash}
    // ...
    >Add</HashForm>
```
**Listening**

To display the hashed version of the text, that was sent by PHP, we create a `HashList` component that extends `SocketPullComponent`. `SocketPullComponent` is a listener that triggers its children `onData(value)` method with the data that was sent.

```js
// app/pages/components/HashList.js
class HashList extends SocketPullComponent {
    onData(value) {
        this.props.onData(value);
    }

// app/pages/HashPage.js
onPhpData(val) {
    const {hashList, lastTextHashedKey} = this.state;
    hashList[lastTextHashedKey] = val;
    this.setState({hashList, lastTextHashedKey: lastTextHashedKey + 1});
}
// ... (render)
<HashList hashList={this.state.hashList} onData={this.onPhpData}/>

```

## JS Components
### SocketProvider
### withSocket

### SocketSubmit
### SocketPrinter
### SocketLogger

### SocketComponent
### SocketPullComponent

### ReactEvent

## Usage

This is a work in progress, but if you want to take a peek:
```bash
// npm
npm run front-watch
npm run back-dev

// Yarn
yarn front-watch
yarn back-dev
```

## Credits

- [bouiboui][link-author]
- [All Contributors][link-contributors]

## License

Unlicense. Please see [License File](LICENSE.md) for more information.

[ico-license]: https://img.shields.io/badge/license-Unlicense-brightgreen.svg?style=flat-square

[link-author]: https://github.com/bouiboui
[link-contributors]: ../../contributors
