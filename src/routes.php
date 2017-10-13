<?php

use Aerys\Request;
use Aerys\Response;
use function Aerys\websocket;

return Aerys\router()
    ->route('GET', '/', function (Request $request, Response $response) {
        $response->write(
            '<div id="app"></div>' .
            '<script src="./app.js"></script>'
        );
    })
    ->route('GET', '/ws', websocket(new Pupper\Pupper\PupperWebSocket));
