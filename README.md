![d005d89e-ff25-4450-9119-aa56ff0d8949](https://user-images.githubusercontent.com/3274103/31629229-4859fe88-b2b3-11e7-85fb-66c35710f607.png)

![Software License][ico-license]

**WORK IN PROGRESS**

Pupper stands for "PHP Plus React" (PPR -> Pupper). The goal is to make a Framework that takes the best of both technologies and makes them communicate bi-directionnaly.

It's inspired by the article [Game Development with React and PHP: How Compatible Are They?](https://www.sitepoint.com/game-development-with-reactjs-and-php-how-compatible-are-they/?mkt_tok=eyJpIjoiTUdZek9URTFNR1JrTVRCaCIsInQiOiJxbnB6Z0JVNDBtdFRvSWFMMStkcmhuWGIrMkdDWlhwS1VSMGFGN1hwb0pxTUxcL1VBc015UmxEQ3J3VDBSSkFRNjh2ejVTdEluXC9QcEppT0VXQ3kybkxaMTZJSnExT1BJRjB3TFwvaTEyOWNCQkd4ZlZtcVlEK0hKSlFxKzE1WEhPTCJ9) by Christopher Pitt.

Go to the /app/ folder for an implementation example.

## Usage

This is a work in progress, but if you want to take a peek:
```bash
# npm
npm run front-watch
npm run back-dev

# yarn
yarn front-watch
yarn back-dev
```

## JS Components
### SocketProvider

`SocketProvider` takes a WebSocket as a prop and hydrates it to its child components.

It can automatically bind them by using the `bindTo` prop, that can be overwritten.

```jsx harmony
const globalSocket = new WebSocket('ws://127.0.0.1:1337/ws');

<SocketProvider socket={globalSocket} bindTo='customEvent'>
    
    {/* becomes <CustomComponent socket={globalSocket} bindTo='customEvent'/> */}
    <CustomComponent/>
       
    {/* becomes <OtherComponent socket={globalSocket} bindTo='otherEvent'/> */}
    <CustomComponent bindTo='otherEvent' />
    
</SocketProvider>
```

### withSocket

`withSocket` ables a component to be provided by `SocketProvider`.
```jsx harmony
export default withSocket(MyComponent)
```
---

### SocketListener

`SocketListener` is the Component you want to extend whenever you want to **receive** updates for an event. 

Overwrite its `onData` method to define what to do with the value.

```jsx harmony
class CustomerLogger extends SocketListener {
    onData(value) {
        console.log('Customer has logged', value);
    }
}

// Usage
<CustomerLogger bindTo='customerHasLogged'/>
```

### SocketDispatcher

`SocketDispatcher` is the Component you want to extend whenever you want to **send** event updates. 

Invoke its `onSubmit` method to send a new event with its `toSubmit` prop value.

```jsx harmony
class LoginButton extends SocketDispatcher {
    render() {
        return <button onClick={this.onSubmit}>Submit</button>
    }
}

// Usage
<LoginButton toSubmit={this.state.customerId} bindTo='customerHasLogged'/>
```
## PHP Components
### WebSocket

`WebSocket` is the class that will let you define listeners on the PHP side.

The only method that you should learn about is `addListener`, which takes the event name as first parameter, and a callback function as a second parameter.

```php
use Pupper\Pupper\ReactEvent;

$websocket = (new Pupper\Pupper\WebSocket)
    ->addEventListener('custom', function (ReactEvent $event) {
        return (new ReactEvent)
            ->setName('custom')
            ->setValue('From PHP: ' . $event->getValue())
            ->build();
    });

$router = Aerys\router()
    ->route('GET', '/ws', Aerys\websocket($websocket));

return (new Aerys\Host)
    ->use($router)
    ->expose('*', 1337);
```

### ReactEvent

`ReactEvent` represents an event from the PHP side.


**Read**

`ReactEvent` has `getName()` and `getValue()` methods that you can use to read the event's name and value.

```php
use Pupper\Pupper\ReactEvent;

function (ReactEvent $event) {
    echo $event->getName();
    echo $event->getValue();
});
```

**Write**

`ReactEvent` has a `build()` method that prepares events in the right format for `WebSocket` callbacks.

```php
use Pupper\Pupper\ReactEvent;

$event = (new ReactEvent)
    ->setName('custom')
    ->setValue('From PHP: ' . $event->getValue())
    ->build();
```

## Credits

- [bouiboui][link-author]
- [All Contributors][link-contributors]

## License

Unlicense. Please see [License File](LICENSE.md) for more information.

[ico-license]: https://img.shields.io/badge/license-Unlicense-brightgreen.svg?style=flat-square

[link-author]: https://github.com/bouiboui
[link-contributors]: ../../contributors
