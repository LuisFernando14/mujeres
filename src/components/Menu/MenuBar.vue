<template>
    <div id="app">
        <component :is="'slide'">
            <a href="#">
                <i class="fa fa-fw fa-star-o"></i>
                <span>Favourites</span>
            </a>
            <a href="#">
                <i class="fa fa-fw fa-bell-o"></i>
                <span>Alerts</span>
            </a>
            <a href="#">
                <i class="fa fa-fw fa-envelope-o"></i>
                <span>Messages</span>
            </a>
            <a href="#">
                <i class="fa fa-fw fa-comment-o"></i>
                <span>Comments</span>
            </a>
            <a href="#">
                <i class="fa fa-fw fa-bar-chart-o"></i>
                <span>Analytics</span>
            </a>
            <a href="#">
                <i class="fa fa-fw fa-newspaper-o"></i>
                <span>Reading</span>
            </a>
        </component>
    </div>
</template>

<script>
    import slide from './slide';
    import Menu from './Menu';

    export default {
      components: {
        slide,
        Menu
      }
    };
</script>
