import { App } from './app';

async function main() {
	const app = new App(4000);
	app.listen();
}

main();
