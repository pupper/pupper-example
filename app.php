<?php

class HomeAction
{
    public function __invoke(\Aerys\Request $request, \Aerys\Response $response)
    {
        $response->end(
            '<div>hello</div>' .
            '<script src="dist/app.js"/>'
        );
    }
}

$router = Aerys\router()
    ->route('GET', '/tes', new HomeAction);

return (new Aerys\Host)
    ->use($router)
    ->use(Aerys\root(__DIR__ . '/public'))
    ->expose('*', 1337);
