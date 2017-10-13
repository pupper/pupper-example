<?php

return (new Aerys\Host)
    ->use(require __DIR__ . '/routes.php')
    ->use(Aerys\root(dirname(__DIR__) . '/dist'))
    ->expose('*', 1337);
