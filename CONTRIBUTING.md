# Contributing

Thank you for your interest in contributing to the QIR Homepage!

There are many ways in which you can contribute to the QIR Homepage, whether by
contributing a news story or by improving the web dev tools; we value
contributions in all shapes and sizes! The following sections may give some
ideas for how you can get involved.

## Adding news stories

If you have some news or cool QIR related content that you want to share with
the community, please reach out to
[qiralliance@mail.com](mailto:qiralliance@mail.com). News stories are simply
markdown files in the posts directory (`src\posts`). The template requires a
yaml header with the following fields:

```yaml
---
title: The title of the news story
date: Created
summary: A short (one sentence) summary of the news story.
tags:
  - workstream
  - entrypoint
  - get-involved
---
```

The date should be a literal date in the format `YYYY-MM-DD`, or if you want it
to use the date the file was created, you can put `Created` in the date field.

Tags should be all lowercase, words separated by dashes. If you want to see the
existing tags, you can navigate to
[qir-alliance.org/tags](https://qir-alliance.org/tags).

News post content should be written in markdown, but there is support for html
snippets. The post will automatically be added by the template to the news page,
once the PR is merged.

> For local testing of your PR, see the [README](README.md) for project setup
> instructions.

<!-- markdown-link-check-disable -->
## Reporting and Commenting on Issues

Have you identified a bug or information that would benefit the community? We
want to hear about it! If you have feedback about the content in this
repository, please let us know by filing a [new
issue](https://github.com/qir-alliance/qir-alliance.github.io/issues/new)!

As for any active effort, there are always many ways in which we hope to evolve
and improve the specification and tools. We encourage you to look at the list of
currently [open
issues](https://github.com/qir-alliance/qir-alliance.github.io/issues) to share
your ideas and expertise.

## Contributing Code to Improve the Website

If you are interested in helping fix issues or improve the website in some form,
please file a GitHub issue for the changes you would like to make on the
repository, and indicate that you would like to work on it. The repository
owners will periodically triage issue and give early feedback. Please be patient
-- we are all volunteering our time and are doing our best to be responsive. To
get immediate feedback, we recommend engaging in one of the community forums
mentioned in [here](https://qir-alliance.github.io/resources/).

If you are looking for a place to get started with contributing code, search for
example for the
[good-first-issue](https://github.com/qir-alliance/qir-alliance.github.io/labels/good%20first%20issue)
or
[help-wanted](https://github.com/qir-alliance/qir-alliance.github.io/labels/help%20wanted)
labels. Also, look for issues that have already been discussed in more detail,
and check if you can help someone who has already started working on it.

<!-- markdown-link-check-enable -->
And last but not least:

## Thank You

Your contributions to open source, large or small, make great projects like this
possible. Thank you for taking the time to contribute.
