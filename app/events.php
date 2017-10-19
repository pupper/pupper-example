<?php

use Pupper\Pupper\Event;

$websocket = new Pupper\Pupper\WebSocket;

$websocket->addEventListener('custom', function (Event $event) {
    return (new Event)
        ->setName('custom')
        ->setValue('From PHP: ' . $event->getValue());
});

$websocket->addEventListener('hash', function (Event $event) {
    return (new Event)
        ->setName('hash')
        ->setValue(md5($event->getValue()));
});

return $websocket;
