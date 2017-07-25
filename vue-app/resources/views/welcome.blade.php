<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        {{-- <link rel="stylesheet" href="/css/app.css"> --}}
    </head>
    <body>
        <div class="" id="app">
            {{-- <notification></notification> --}}
        </div>

        <div id="one">
            <h1>
                @{{ shared.user.name }}
            </h1>
        </div>

        <div id="two">
            <h1>
                @{{ shared.user.name }}
            </h1>
        </div>

        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

        <script type="text/javascript" src="https://unpkg.com/vue@2.1.6/dist/vue.js"></script>

        <script src="/js/app-state.js"></script>
    </body>
</html>
