<table class="table">
    <thead>
        <tr>
            <th>Project Name</th>
            <th>Project Description</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="project in projects">
            <td v-text="project.name" />
            <td v-text="project.description" />
        </tr>
    </tbody>
</table>