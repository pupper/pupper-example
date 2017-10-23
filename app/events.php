<?php

use Pupper\Pupper\Event;

$websocket = (new Pupper\Pupper\WebSocket)->allowOrigin('localhost', 80);

$websocket->addEventListener('text_sent', function (Event $event) {
    return new Event('hash_sent', md5($event->getValue()));
});

return $websocket;
