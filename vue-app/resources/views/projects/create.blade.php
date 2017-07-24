<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.3/css/bulma.min.css">
        <style type="text/css">
        body {
            padding-top: 40px;
        }
        </style>
    </head>
    <body>
        <div class="container" id="app">
            @include('projects.list')

            <hr style="margin-top: 1em; margin-bottom: 1em;">
            <form class="" action="/projects" method="POST" @submit.prevent="onSubmit" @keydown="errors.clear($event.target.name)">
                <div class="field">
                    <label for="name" class="label">Project Name : </label>
                    <div class="control">
                        <input type="text" name="name" value="" class="input" id="name" v-model="name" autocomplete="off">
                        <span class="help is-danger" v-if="errors.has('name')" v-text="errors.get('name')"></span>
                    </div>
                </div>

                <div class="field">
                    <label for="description" class="label">Project Description : </label>
                    <div class="control">
                        <input type="text" name="description" value="" class="input" id="description" v-model="description" autocomplete="off">
                        <span class="help is-danger" v-if="errors.has('description')" v-text="errors.get('description')"></span>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <button class="button is-primary" :disabled="errors.any()">Create Project</button>
                    </div>
                </div>
            </form>
        </div>

        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

        <script type="text/javascript" src="https://unpkg.com/vue@2.1.6/dist/vue.js"></script>

        <script src="/js/app.js"></script>
    </body>
</html>