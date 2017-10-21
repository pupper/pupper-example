<?php

use Aerys\Request;
use Aerys\Response;
use function Aerys\websocket;

$websocket = require __DIR__ . '/events.php';

$router = Aerys\router()
    ->route('GET', '/', function (Request $request, Response $response) {
        $response->write(
            '<div id="app"></div>' .
            '<script src="app.js"></script>'
        );
    })
    ->route('GET', '/ws', websocket($websocket));

return (new Aerys\Host)
    ->use($router)
    ->use(Aerys\root(dirname(__DIR__) . '/dist'));