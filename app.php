<?php

$router = Aerys\router()
    ->route('GET', '/tes', function (\Aerys\Request $request, \Aerys\Response $response) {
        $response->write(
            '<div id="app"></div>' .
            '<script async src="./app.js"></script>'
        );
    });

return (new Aerys\Host)
    ->use($router)
    ->use(Aerys\root(__DIR__ . '/front/dist'))
    ->expose('*', 1337);
