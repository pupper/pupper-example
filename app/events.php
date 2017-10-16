<?php

use Pupper\Pupper\ReactEvent;

$websocket = new Pupper\Pupper\WebSocket;

$websocket->addEventListener('custom', function (ReactEvent $event) {
    return (new ReactEvent)
        ->setName('custom')
        ->setValue('From PHP: ' . $event->getValue())
        ->build();
});

$websocket->addEventListener('hash', function (ReactEvent $event) {
    return (new ReactEvent)
        ->setName('hash')
        ->setValue(md5($event->getValue()))
        ->build();
});

return $websocket;
