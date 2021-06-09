const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
	const GITHUB_TOKEN = core.getInput("GITHUB_TOKEN");
	const octokit = github.getOctokit(GITHUB_TOKEN);

	await octokit
		.rest
		.git
		.createCommit({
			owner: "Random Quotes",
			message: "Updated Quote",
		});
}

run();