const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { execFileSync } = require("node:child_process");

const {
  getGitCreatedDate,
  getGitCreatedDateValue,
  resolvePostDate,
  resolvePostDateValue,
  usesCreatedFrontMatterDate,
} = require("../src/_lib/post-date");

function runGit(args, cwd, extraEnv = {}) {
  return execFileSync("git", args, {
    cwd,
    encoding: "utf8",
    env: {
      ...process.env,
      ...extraEnv,
    },
  }).trim();
}

test("resolvePostDate leaves literal dates unchanged", () => {
  assert.equal(resolvePostDateValue("2026-03-25", "src/posts/example.md"), "2026-03-25");
  assert.equal(
    resolvePostDate("2026-03-25", "src/posts/example.md").toISOString(),
    "2026-03-25T00:00:00.000Z",
  );
});

test("usesCreatedFrontMatterDate detects the Created sentinel from source front matter", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "qir-created-frontmatter-"));
  const createdPost = path.join(tempDir, "created.md");
  const literalPost = path.join(tempDir, "literal.md");

  fs.writeFileSync(createdPost, "---\ndate: Created\n---\n");
  fs.writeFileSync(literalPost, "---\ndate: 2026-03-25\n---\n");

  assert.equal(usesCreatedFrontMatterDate(createdPost), true);
  assert.equal(usesCreatedFrontMatterDate(literalPost), false);
});

test("getGitCreatedDate uses the first git commit date for a file", () => {
  const repoDir = fs.mkdtempSync(path.join(os.tmpdir(), "qir-post-date-"));
  const postPath = path.join(repoDir, "post.md");
  const addEnv = {
    GIT_AUTHOR_DATE: "2022-09-16T10:00:00Z",
    GIT_COMMITTER_DATE: "2022-09-16T10:00:00Z",
  };
  const updateEnv = {
    GIT_AUTHOR_DATE: "2026-03-25T14:42:06Z",
    GIT_COMMITTER_DATE: "2026-03-25T14:42:06Z",
  };

  runGit(["init"], repoDir);
  runGit(["config", "user.name", "Test User"], repoDir);
  runGit(["config", "user.email", "test@example.com"], repoDir);

  fs.writeFileSync(postPath, "first version\n");
  runGit(["add", "post.md"], repoDir);
  runGit(["commit", "-m", "feat: add post"], repoDir, addEnv);

  fs.writeFileSync(postPath, "updated version\n");
  runGit(["add", "post.md"], repoDir);
  runGit(["commit", "-m", "docs: update post"], repoDir, updateEnv);

  const createdDate = getGitCreatedDate(postPath);

  assert.ok(createdDate instanceof Date);
  assert.equal(getGitCreatedDateValue(postPath), "2022-09-16");
  assert.equal(createdDate.toISOString(), "2022-09-16T00:00:00.000Z");
  assert.equal(resolvePostDateValue("Created", postPath), "2022-09-16");
  assert.equal(resolvePostDate("Created", postPath).toISOString(), "2022-09-16T00:00:00.000Z");
});
