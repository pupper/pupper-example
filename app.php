<?php

return (new Aerys\Host)
    ->expose('*', 1337)
    ->use(Aerys\root(__DIR__ . '/public'));
