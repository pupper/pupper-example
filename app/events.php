<?php

use Pupper\Pupper\Event;

$websocket = new Pupper\Pupper\WebSocket;

$websocket->addEventListener('text_sent', function (Event $event) {
    return new Event('hash_sent', md5($event->getValue()));
});

return $websocket;
