import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
    name: 'William',
    age: 57
	}
});

export default app;