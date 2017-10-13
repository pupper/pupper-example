<?php

use Aerys\Request;
use Aerys\Response;
use Pupper\Pupper\ReactEvent;
use function Aerys\websocket;

$websocket = new Pupper\Pupper\PupperWebSocket;

$websocket->addListener('custom', function (ReactEvent $data) {
    return (new ReactEvent)
        ->setName('custom')
        ->setValue('From PHP: ' . $data->getValue())
        ->build();
});
$websocket->addListener('todo', function (ReactEvent $data) {
    sleep(2);
    return (new ReactEvent)
        ->setName('todo')
        ->setValue(md5($data->getValue()))
        ->build();
});

return Aerys\router()
    ->route('GET', '/', function (Request $request, Response $response) {
        $response->write(
            '<div id="app"></div>' .
            '<script src="./app.js"></script>'
        );
    })
    ->route('GET', '/ws', websocket($websocket));
