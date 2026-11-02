---
name: git
description: Commit changes with a Conventional Commits 1.0.0 message and name branches by the same types. Use on /git or when the user asks to commit or create a branch.
---

# git

Write commit messages by the [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/)
spec and name branches by the same types. Never push — a push to `master` deploys the site.

## Branches

- The default branch is `master`.
- Any other branch is named `<type>/<short-description>`, with the commit types from the table below and
  a lowercase kebab-case description: `feat/language-switcher`, `fix/header-overlap`,
  `chore/claude-rules`.

## 1. Look at the changes

- `git status` and `git diff --staged`. If nothing is staged, look at `git diff` and stage only the files
  that belong to this change; ask if it's unclear what to include.
- Never stage secrets or local files: `.env*`, `node_modules`, `.next`, `.idea`.
- If the changes do several unrelated things, propose splitting them into separate commits.

## 2. Write the message

```
<type>[optional scope][!]: <description>

[optional footer(s)]
```

### Header

- `type` is required, then an optional `(scope)`, an optional `!`, then `: ` and the description.
- Types:

| Type       | When                                                         |
| ---------- | ------------------------------------------------------------ |
| `feat`     | a new feature                                                |
| `fix`      | a bug fix                                                    |
| `refactor` | code change that neither fixes a bug nor adds a feature      |
| `perf`     | performance improvement                                      |
| `style`    | formatting only, no change in meaning                        |
| `test`     | adding or fixing tests                                       |
| `docs`     | documentation only                                           |
| `build`    | build system, Dockerfile, dependencies                       |
| `ci`       | CI config and deploy scripts (`.gitlab-ci.yml`, `deploy.sh`) |
| `chore`    | anything else that touches no source or tests                |
| `revert`   | reverts an earlier commit                                    |

- `scope` is a noun naming the affected part of the code, in parentheses: `feat(header):`. Skip it when
  the change is not local to one part.
- Description: a short summary right after `: `, imperative mood, lowercase start, no trailing period.

### Body

- Never write a body. The header alone must say what the commit does.

### Footers

- Optional. Start after one blank line following the header.
- Each footer is `Token: value` or `Token #value`. Tokens use `-` instead of spaces (`Reviewed-by`,
  `Refs`), except `BREAKING CHANGE`.
- A value may span several lines; it ends where the next `Token: ` / `Token #` starts.

### Breaking changes

- Mark them either with `!` before the `:` in the header, or with a `BREAKING CHANGE: <description>`
  footer, or both.
- `BREAKING CHANGE` must be uppercase; `BREAKING-CHANGE` is the same token. All other keywords are
  case-insensitive.
- With `!` the footer may be omitted; the description then states what breaks.

### Examples

```
feat(lang): add Polish language
```

```
docs: correct spelling of CHANGELOG
```

```
feat(api)!: send an email to the customer when a product is shipped
```

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

```
fix: prevent racing of requests

Refs: #123
```

## 3. Commit

- Show the message, then commit with a heredoc so the blank lines survive:

```bash
git commit -F - <<'EOF'
feat(header): add language switcher
EOF
```

- Never mention Claude or Claude Code in the commit: no `Co-Authored-By: Claude` trailer, no
  "Generated with Claude Code" line, no AI attribution of any kind.
- Don't amend, rebase or push unless the user asks.
