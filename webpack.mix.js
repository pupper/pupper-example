let mix = require('laravel-mix');

mix.setPublicPath('./');

mix.react('app/app.js', 'dist/');
mix.copy('app/static', 'dist/');
