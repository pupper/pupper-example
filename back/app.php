<?php

$router = require __DIR__ . '/routes.php';

return (new Aerys\Host)
    ->use($router)
    ->use(Aerys\root(dirname(__DIR__) . '/front/dist'))
    ->expose('*', 1337);
