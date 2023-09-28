import ora from "ora";
import { exec } from "child_process";

exec("git diff --cached --name-only -- '*.ts' '*.tsx'", (_, stdout) => {
  // Split the output by line breaks and count the lines
  const stagedFiles = stdout.split("\n").filter(Boolean);
  const numberOfStagedFiles = stagedFiles.length;

  if (numberOfStagedFiles === 0) {
    // No staged files found
    console.log("\x1b[34m→\x1b[0m No staged files match any configured task.");
    process.exit(0);
  }

  const typeChecksCommand = "pnpm tsc --noEmit --pretty";

  const spinner = ora({
    text: typeChecksCommand,
    color: "yellow",
  });

  spinner.start();

  // Run type checks
  const childProcess = exec(typeChecksCommand, (err, stdout) => {
    // On fails the code is 2 and the stdout contains the error
    if (err.code === 2 && stdout) {
      console.log(stdout);
      process.exit(1);
    }
  });

  // Change the spinner on exit
  childProcess.on("exit", code => {
    if (code === 0) {
      // Type checks completed successfully
      spinner.succeed("Type checks successful!");
    }
    // Type checks failed
    spinner.fail("Type checks failed.");
  });
});
