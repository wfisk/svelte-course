import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
    name: 'William',
    age: 4
	}
});

export default app;