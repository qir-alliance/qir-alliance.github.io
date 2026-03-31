const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const createdDateCache = new Map();
const usesCreatedDateCache = new Map();

function usesCreatedFrontMatterDate(inputPath) {
  if (!inputPath) {
    return false;
  }

  if (usesCreatedDateCache.has(inputPath)) {
    return usesCreatedDateCache.get(inputPath);
  }

  let usesCreatedDate = false;

  try {
    const fileContents = fs.readFileSync(inputPath, "utf8");
    const frontMatterMatch = fileContents.match(/^---\n([\s\S]*?)\n---/);

    usesCreatedDate = Boolean(
      frontMatterMatch && /^date:\s*Created\s*$/m.test(frontMatterMatch[1]),
    );
  } catch {
    usesCreatedDate = false;
  }

  usesCreatedDateCache.set(inputPath, usesCreatedDate);
  return usesCreatedDate;
}

function getGitCreatedDate(inputPath) {
  const createdDateValue = getGitCreatedDateValue(inputPath);

  if (!createdDateValue) {
    return null;
  }

  return new Date(`${createdDateValue}T00:00:00.000Z`);
}

function getGitCreatedDateValue(inputPath) {
  if (!inputPath) {
    return null;
  }

  if (createdDateCache.has(inputPath)) {
    return createdDateCache.get(inputPath);
  }

  let createdDate = null;

  try {
    const resolvedPath = path.resolve(inputPath);
    const output = execFileSync(
      "git",
      ["log", "--follow", "--diff-filter=A", "--format=%as", "--", resolvedPath],
      {
        cwd: path.dirname(resolvedPath),
        encoding: "utf8",
      },
    ).trim();

    if (output) {
      createdDate = output.split("\n")[0];
    }
  } catch {
    createdDate = null;
  }

  createdDateCache.set(inputPath, createdDate);
  return createdDate;
}

function resolvePostDate(frontMatterDate, inputPath) {
  const resolvedDateValue = resolvePostDateValue(frontMatterDate, inputPath);

  if (typeof resolvedDateValue === "string" && /^\d{4}-\d{2}-\d{2}$/.test(resolvedDateValue)) {
    return new Date(`${resolvedDateValue}T00:00:00.000Z`);
  }

  return resolvedDateValue;
}

function resolvePostDateValue(frontMatterDate, inputPath) {
  if (frontMatterDate !== "Created" && !usesCreatedFrontMatterDate(inputPath)) {
    return frontMatterDate;
  }

  return getGitCreatedDateValue(inputPath) ?? frontMatterDate;
}

module.exports = {
  getGitCreatedDate,
  getGitCreatedDateValue,
  resolvePostDate,
  resolvePostDateValue,
  usesCreatedFrontMatterDate,
};
