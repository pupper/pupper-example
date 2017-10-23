<?php

use Aerys\Request;
use Aerys\Response;
use function Aerys\websocket;

$webRouter = Aerys\router()
    ->route('GET', '/', function (Request $request, Response $response) {
        $response->write(
            '<div id="app"></div>' .
            '<script src="app.js"></script>'
        );
    });

$socketRouter = Aerys\router()->route('GET', '/',
    websocket(require __DIR__ . '/events.php'));

return [
    (new Aerys\Host)
        ->use($webRouter)
        ->use(Aerys\root(dirname(__DIR__) . '/dist'))
        ->expose('0.0.0.0', 80),

    (new Aerys\Host)
        ->use($socketRouter)
        ->expose('0.0.0.0', 1337)
];
