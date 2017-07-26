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
            {{-- <input type="text" name="" value="" v-model="coupon"> --}}
            {{-- <input type="text" name="" value="" :value="coupon" @input="coupon = $event.target.value"> --}}

            <coupon v-model="coupon"></coupon>
        </div>

        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

        <script type="text/javascript" src="https://unpkg.com/vue@2.1.6/dist/vue.js"></script>

        <script src="/js/app-custom-input.js"></script>
    </body>
</html>
