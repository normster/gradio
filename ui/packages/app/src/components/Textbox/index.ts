export { default as Component } from "./Textbox.svelte";
export const modes = ["static", "dynamic"];

export const document = (config: Record<string, any>) => ({
	type: "string",
	description: "text string",
	example_data: config.value || "hello world"
});
