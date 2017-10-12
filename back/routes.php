<?php

use Pupper\Pupper\PupperApp;
use Pupper\Pupper\PupperWebSocket;
use function Aerys\websocket;

return Aerys\router()
    ->route('GET', '/', new PupperApp)
    ->route('GET', '/ws', websocket(new PupperWebSocket));
