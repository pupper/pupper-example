<?php

namespace Pupper\Pupper;

use Aerys\Request;
use Aerys\Response;

class PupperApp
{
    public function __invoke(Request $request, Response $response)
    {
        $response->write(
            '<div id="app"></div>' .
            '<script src="./app.js"></script>'
        );
    }

}
