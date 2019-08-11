import Vue from 'vue';
import Router from 'vue-router';

/** Components */
import Index from '../components/pages/index/Index.vue';
import Chat from '../components/pages/chat/Chat.vue';
import Todo from '../components/pages/todo/Todo.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: 'IndexPage',
            component: Index,
            alias: ['/index']
        },
        {
            path: '/chat',
            name: 'ChatPage',
            component: Chat,
        },
        {
            path: '/todo',
            name: 'TodoPage',
            component: Todo,
        }
    ]
})

export default router;